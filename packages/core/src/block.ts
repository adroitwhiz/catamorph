type InputDescriptor<T = unknown, HasShadow = boolean> = {type: BlockInput<T>} &
(HasShadow extends false ? object : {initial: T});

/**
 * Instance of a block, with a given opcode and inputs.
 */
export class Block<
	Proto extends ProtoBlock = ProtoBlock,
	Inputs extends InputsForPrototype<Proto> = InputsForPrototype<Proto>
> {
	proto;
	inputs;
	constructor (proto: Proto, inputs: Inputs) {
		this.proto = proto;
		this.inputs = inputs;
	}
}

/**
 * Maps a type BlockPrototype<opcode, default inputs> to the corresponding Block<opcode, inputs>.
 */
type InputsForPrototype<P extends ProtoBlock> =
	// Infer the prototype's opcode and default inputs
	P extends ProtoBlock<infer __OpCode, infer __Shape, infer Inputs> ? {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		-readonly [K in keyof Inputs]: Inputs[K]['type'] extends BlockInput<any, any, any, any, infer T> ?
			T :
			never
	} :
		never;

/**
 * Runtime type information for a block with a certain opcode, which tells us what its inputs are and what their
 * default values should be.
 */
export class ProtoBlock<
	const OpCode extends string = string,
	Shape extends string = string,
	const Inputs extends {
		// The type of the default value must match the type of the BlockInput
		[K in keyof Inputs]: Inputs[K] extends InputDescriptor ?
			// Extract the BlockInput's type T and make the entire input descriptor match that type
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			Inputs[K]['type'] extends BlockInput<any, any, infer HasShadow, any, infer T> ?
				InputDescriptor<T, HasShadow> :
				never :
			never
	} & Record<string, InputDescriptor> = Record<string, InputDescriptor>
> {
	readonly opcode: OpCode;
	readonly shape: Shape;
	readonly inputs: Inputs;
	readonly returnType?: string;

	constructor (
		{opcode, shape, inputs, returnType}: {opcode: OpCode, shape: Shape, inputs?: Inputs, returnType?: string}) {
		this.opcode = opcode;
		this.shape = shape;
		// In theory, someone could pass their own subtype of an input dictionary that "{}" is not assignable to.
		// In practice, no one's going to do that and there's a huge ergonomics benefit to making inputs optional.
		this.inputs = typeof inputs === 'undefined' ? {} as Inputs : inputs;
		this.returnType = returnType;
	}
}

/**
 * Represents an input (droppable or non-droppable) on a ProtoBlock.
 */
export class BlockInput<
	T = unknown,
	const Accepts extends readonly string[] = readonly string[],
	const HasShadow extends boolean = boolean,
	Cast extends ((input: unknown) => T) | null = ((input: unknown) => T) | null,
	__InputType = Accepts['length'] extends 0 ? T : (T | Block<ProtoBlock<string, Accepts[number]>>)
> {
	type;
	accepts;
	hasShadow;
	validate;
	cast: Cast;

	constructor ({
		type,
		accepts,
		validate,
		hasShadow,
		cast}: {
		type: string,
		accepts: Accepts,
		hasShadow: HasShadow,
		validate: null | ((input: unknown) => input is T),
		cast: Cast
	}) {
		this.type = type;
		this.accepts = accepts;
		this.hasShadow = hasShadow;
		this.validate = validate;
		this.cast = cast;
	}

	// TODO: deduplicate with constructor
	static withType<T> (): <
		const Accepts extends readonly string[] = readonly string[],
		const HasShadow extends boolean = boolean,
		Cast extends ((input: unknown) => T) | null = ((input: unknown) => T) | null,
		__InputType = Accepts['length'] extends 0 ? T : (T | Block<ProtoBlock<string, Accepts[number]>>)>(
		{
			type,
			accepts,
			validate,
			hasShadow,
			cast
		}: {
			type: string,
			accepts: Accepts,
			hasShadow: HasShadow,
			validate: null | ((input: unknown) => input is T),
			cast: Cast
		}) => BlockInput<T, Accepts, HasShadow, Cast, __InputType> {
		// eslint-disable-next-line max-len
		return ({type, accepts, hasShadow, validate, cast}) => new BlockInput({type, accepts, hasShadow, validate, cast});
	}
}

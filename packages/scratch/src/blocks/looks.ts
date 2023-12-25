import {ProtoBlock, BlockInput} from '@catamorph/core';
import {ScratchBlockShape, NumberInput, StringInput, reporterOrBoolean, stringCheck} from '../common.js';

// TODO: accept Costume objects
export const CostumeInput = new BlockInput({
	type: 'costume',
	accepts: reporterOrBoolean,
	hasShadow: true,
	validate: stringCheck,
	cast: null
});

// TODO: accept Costume objects
export const BackdropInput = new BlockInput({
	type: 'backdrop',
	accepts: reporterOrBoolean,
	hasShadow: true,
	validate: stringCheck,
	cast: null
});

export enum GraphicEffect {
	COLOR,
	FISHEYE,
	WHIRL,
	PIXELATE,
	MOSAIC,
	BRIGHTNESS,
	GHOST
}

const graphicEffectCheck = (input: unknown): input is GraphicEffect => {
	return typeof input === 'number' && Object.prototype.hasOwnProperty.call(GraphicEffect, input);
};

export const GraphicEffectInput = new BlockInput({
	type: 'graphicEffect',
	accepts: [],
	hasShadow: false,
	validate: graphicEffectCheck,
	cast: null
});

export enum FrontBack {
	FRONT,
	BACK
}

const frontBackCheck = (input: unknown): input is FrontBack => {
	return typeof input === 'number' && Object.prototype.hasOwnProperty.call(FrontBack, input);
};

export const FrontBackInput = new BlockInput({
	type: 'frontBack',
	accepts: [],
	hasShadow: false,
	validate: frontBackCheck,
	cast: null
});

export enum ForwardBackward {
	FORWARD,
	BACKWARD
}

const forwardBackwardCheck = (input: unknown): input is ForwardBackward => {
	return typeof input === 'number' && Object.prototype.hasOwnProperty.call(ForwardBackward, input);
};

export const ForwardBackwardInput = new BlockInput({
	type: 'forwardBackward',
	accepts: [],
	hasShadow: false,
	validate: forwardBackwardCheck,
	cast: null
});

export enum CostumeNumberName {
	NUMBER,
	NAME
}

const costumeNumberNameCheck = (input: unknown): input is CostumeNumberName => {
	return typeof input === 'number' && Object.prototype.hasOwnProperty.call(CostumeNumberName, input);
};

export const CostumeNumberNameInput = new BlockInput({
	type: 'costumeNumberName',
	accepts: [],
	hasShadow: false,
	validate: costumeNumberNameCheck,
	cast: null
});

/* eslint-disable camelcase */
export const looks_sayforsecs = new ProtoBlock({
	opcode: 'looks_sayforsecs',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		MESSAGE: {
			type: StringInput,
			initial: 'Hello!'
		},
		SECS: {
			type: NumberInput,
			initial: 2
		}
	}
});

export const looks_say = new ProtoBlock({
	opcode: 'looks_say',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		MESSAGE: {
			type: StringInput,
			initial: 'Hello!'
		}
	}
});

export const looks_thinkforsecs = new ProtoBlock({
	opcode: 'looks_thinkforsecs',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		MESSAGE: {
			type: StringInput,
			initial: 'Hmm...'
		},
		SECS: {
			type: NumberInput,
			initial: 2
		}
	}
});

export const looks_think = new ProtoBlock({
	opcode: 'looks_think',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		MESSAGE: {
			type: StringInput,
			initial: 'Hmm...'
		}
	}
});

export const looks_switchcostumeto = new ProtoBlock({
	opcode: 'looks_switchcostumeto',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		COSTUME: {
			type: CostumeInput,
			initial: 'costume1'
		}
	}
});

export const looks_nextcostume = new ProtoBlock({
	opcode: 'looks_nextcostume',
	shape: ScratchBlockShape.COMMAND,
	inputs: {}
});

export const looks_switchbackdropto = new ProtoBlock({
	opcode: 'looks_switchbackdropto',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		BACKDROP: {
			type: BackdropInput,
			initial: 'backdrop1'
		}
	}
});

export const looks_nextbackdrop = new ProtoBlock({
	opcode: 'looks_nextbackdrop',
	shape: ScratchBlockShape.COMMAND,
	inputs: {}
});

export const looks_changesizeby = new ProtoBlock({
	opcode: 'looks_changesizeby',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		CHANGE: {
			type: NumberInput,
			initial: 10
		}
	}
});

export const looks_setsizeto = new ProtoBlock({
	opcode: 'looks_setsizeto',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		SIZE: {
			type: NumberInput,
			initial: 100
		}
	}
});

export const looks_changeeffectby = new ProtoBlock({
	opcode: 'looks_changeeffectby',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		EFFECT: {
			type: GraphicEffectInput,
			initial: GraphicEffect.COLOR
		},
		CHANGE: {
			type: NumberInput,
			initial: 25
		}
	}
});

export const looks_seteffectto = new ProtoBlock({
	opcode: 'looks_seteffectto',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		EFFECT: {
			type: GraphicEffectInput,
			initial: GraphicEffect.COLOR
		},
		VALUE: {
			type: NumberInput,
			initial: 0
		}
	}
});

export const looks_cleargraphiceffects = new ProtoBlock({
	opcode: 'looks_cleargraphiceffects',
	shape: ScratchBlockShape.COMMAND,
	inputs: {}
});

export const looks_show = new ProtoBlock({
	opcode: 'looks_show',
	shape: ScratchBlockShape.COMMAND,
	inputs: {}
});

export const looks_hide = new ProtoBlock({
	opcode: 'looks_hide',
	shape: ScratchBlockShape.COMMAND,
	inputs: {}
});

export const looks_gotofrontback = new ProtoBlock({
	opcode: 'looks_gotofrontback',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		FRONT_BACK: {
			type: FrontBackInput,
			initial: FrontBack.FRONT
		}
	}
});

export const looks_goforwardbackwardlayers = new ProtoBlock({
	opcode: 'looks_goforwardbackwardlayers',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		FORWARD_BACKWARD: {
			type: ForwardBackwardInput,
			initial: ForwardBackward.FORWARD
		},
		NUM: {
			type: NumberInput,
			initial: 1
		}
	}
});

export const looks_costumenumbername = new ProtoBlock({
	opcode: 'looks_costumenumbername',
	shape: ScratchBlockShape.REPORTER,
	inputs: {
		NUMBER_NAME: {
			type: CostumeNumberNameInput,
			initial: CostumeNumberName.NUMBER
		}
	}
});

export const looks_backdropnumbername = new ProtoBlock({
	opcode: 'looks_backdropnumbername',
	shape: ScratchBlockShape.REPORTER,
	inputs: {
		NUMBER_NAME: {
			type: CostumeNumberNameInput,
			initial: CostumeNumberName.NUMBER
		}
	}
});

export const looks_size = new ProtoBlock({
	opcode: 'looks_size',
	shape: ScratchBlockShape.REPORTER,
	inputs: {}
});

export const looks_hideallsprites = new ProtoBlock({
	opcode: 'looks_hideallsprites',
	shape: ScratchBlockShape.COMMAND,
	inputs: {}
});

export const looks_switchbackdroptoandwait = new ProtoBlock({
	opcode: 'looks_switchbackdroptoandwait',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		BACKDROP: {
			type: BackdropInput,
			initial: 'backdrop1'
		}
	}
});

export const looks_changestretchby = new ProtoBlock({
	opcode: 'looks_changestretchby',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		CHANGE: {
			type: NumberInput,
			initial: 10
		}
	}
});

export const looks_setstretchto = new ProtoBlock({
	opcode: 'looks_setstretchto',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		STRETCH: {
			type: NumberInput,
			initial: 0
		}
	}
});

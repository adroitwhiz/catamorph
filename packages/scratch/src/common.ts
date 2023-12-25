import {BlockInput} from '@catamorph/core';

const castToNumber = (value: unknown): number => {
	// If value is already a number we don't need to coerce it with Number().
	const numericValue = typeof value === 'number' ? value : Number(value);
	if (Number.isNaN(numericValue)) {
		// Scratch treats NaN as 0, when needed as a number.
		// E.g., 0 + NaN -> 0.
		return 0;
	}
	return numericValue;
};

export enum ScratchBlockShape {
	COMMAND = 'COMMAND',
	REPORTER = 'REPORTER',
	BOOLEAN = 'BOOLEAN'
}

export const reporterOrBoolean = [ScratchBlockShape.REPORTER, ScratchBlockShape.BOOLEAN] as const;

export const numericCheck = (input: unknown): input is number => typeof input === 'number';
export const stringCheck = (input: unknown): input is string => typeof input === 'string';

export const NumberInput = BlockInput.withType<number>()({
	type: 'number',
	accepts: reporterOrBoolean,
	hasShadow: true,
	validate: numericCheck,
	cast: null
});

/** Input which displays an angle picker when clicked. Behaves identically to NumberInput, including casts. */
export const AngleInput = new BlockInput({
	type: 'angle',
	accepts: reporterOrBoolean,
	hasShadow: true,
	validate: numericCheck,
	cast: null
});

/** Droppable string input. */
export const StringInput = new BlockInput({
	type: 'string',
	accepts: reporterOrBoolean,
	hasShadow: true,
	validate: stringCheck,
	cast: null
});

/** Droppable Boolean input. */
export const BooleanInput = new BlockInput({
	type: 'boolean',
	accepts: [ScratchBlockShape.BOOLEAN],
	hasShadow: false,
	validate: (input): input is boolean => typeof input === 'boolean',
	cast: null
});

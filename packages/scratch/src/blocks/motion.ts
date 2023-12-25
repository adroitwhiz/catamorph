import {ProtoBlock, BlockInput} from '@catamorph/core';
import {ScratchBlockShape, NumberInput, AngleInput, reporterOrBoolean, stringCheck} from '../common.js';

// TODO: accept Sprite objects
export const GoToTargetInput = new BlockInput({
	type: 'goToTarget',
	accepts: reporterOrBoolean,
	hasShadow: true,
	validate: stringCheck,
	cast: null
});

// TODO: accept Sprite objects
export const PointTowardsTargetInput = new BlockInput({
	type: 'pointTowardsTarget',
	accepts: reporterOrBoolean,
	hasShadow: true,
	validate: stringCheck,
	cast: null
});

export enum RotationStyle {
	ALL_AROUND,
	LEFT_RIGHT,
	DONT_ROTATE
}

const rotationStyleCheck = (input: unknown): input is RotationStyle => {
	return input === RotationStyle.ALL_AROUND ||
		input === RotationStyle.LEFT_RIGHT ||
		input === RotationStyle.DONT_ROTATE;
};

export const RotationStyleInput = new BlockInput({
	type: 'rotationStyle',
	accepts: [],
	hasShadow: false,
	validate: rotationStyleCheck,
	cast: null
});

/* eslint-disable camelcase */
export const motion_movesteps = new ProtoBlock({
	opcode: 'motion_movesteps',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		STEPS: {
			type: NumberInput,
			initial: 10
		}
	}
});

export const motion_turnright = new ProtoBlock({
	opcode: 'motion_turnright',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		STEPS: {
			type: NumberInput,
			initial: 15
		}
	}
});

export const motion_turnleft = new ProtoBlock({
	opcode: 'motion_turnleft',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		STEPS: {
			type: NumberInput,
			initial: 15
		}
	}
});

export const motion_goto = new ProtoBlock({
	opcode: 'motion_goto',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		TO: {
			type: GoToTargetInput,
			initial: '_random_'
		}
	}
});

export const motion_gotoxy = new ProtoBlock({
	opcode: 'motion_gotoxy',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		X: {
			type: NumberInput,
			initial: 0
		},
		Y: {
			type: NumberInput,
			initial: 0
		}
	}
});

export const motion_glideto = new ProtoBlock({
	opcode: 'motion_glideto',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		SECS: {
			type: NumberInput,
			initial: 1
		},
		TO: {
			type: GoToTargetInput,
			initial: '_random_'
		}
	}
});

export const motion_glidesecstoxy = new ProtoBlock({
	opcode: 'motion_glidesecstoxy',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		SECS: {
			type: NumberInput,
			initial: 1
		},
		X: {
			type: NumberInput,
			initial: 0
		},
		Y: {
			type: NumberInput,
			initial: 0
		}
	}
});

export const motion_pointindirection = new ProtoBlock({
	opcode: 'motion_pointindirection',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		DIRECTION: {
			type: AngleInput,
			initial: 90
		}
	}
});

export const motion_pointtowards = new ProtoBlock({
	opcode: 'motion_pointtowards',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		TOWARDS: {
			type: PointTowardsTargetInput,
			initial: '_mouse_'
		}
	}
});

export const motion_changexby = new ProtoBlock({
	opcode: 'motion_changexby',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		DX: {
			type: NumberInput,
			initial: 10
		}
	}
});

export const motion_setx = new ProtoBlock({
	opcode: 'motion_setx',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		X: {
			type: NumberInput,
			initial: 0
		}
	}
});

export const motion_changeyby = new ProtoBlock({
	opcode: 'motion_changeyby',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		DY: {
			type: NumberInput,
			initial: 10
		}
	}
});

export const motion_sety = new ProtoBlock({
	opcode: 'motion_sety',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		Y: {
			type: NumberInput,
			initial: 0
		}
	}
});

export const motion_ifonedgebounce = new ProtoBlock({
	opcode: 'motion_ifonedgebounce',
	shape: ScratchBlockShape.COMMAND
});

export const motion_setrotationstyle = new ProtoBlock({
	opcode: 'motion_setrotationstyle',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		STYLE: {
			type: RotationStyleInput,
			initial: RotationStyle.LEFT_RIGHT
		}
	}
});

export const motion_xposition = new ProtoBlock({
	opcode: 'motion_xposition',
	shape: ScratchBlockShape.REPORTER
});

export const motion_yposition = new ProtoBlock({
	opcode: 'motion_xposition',
	shape: ScratchBlockShape.REPORTER
});

// Legacy no-op blocks

export const motion_scroll_right = new ProtoBlock({
	opcode: 'motion_scroll_right',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		DISTANCE: {
			type: NumberInput,
			initial: 10
		}
	}
});

export const motion_scroll_up = new ProtoBlock({
	opcode: 'motion_scroll_up',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		DISTANCE: {
			type: NumberInput,
			initial: 10
		}
	}
});

export const ScrollAlignmentInput = new BlockInput({
	type: 'string',
	// TODO: Not sure if this is droppable in 3.0
	accepts: reporterOrBoolean,
	hasShadow: true,
	validate: stringCheck,
	cast: null
});

export const motion_align_scene = new ProtoBlock({
	opcode: 'motion_align_scene',
	shape: ScratchBlockShape.COMMAND,
	inputs: {
		ALIGNMENT: {
			type: ScrollAlignmentInput,
			initial: 'middle'
		}
	}
});

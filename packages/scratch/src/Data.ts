type ScalarValue = number | string | boolean;

export class VariableBase<T> {
	public name: string;
	public value: T;

	public visible: boolean;
	public x: number;
	public y: number;

	constructor (name: string, value: T, visible: boolean, x: number, y: number) {
		this.name = name;
		this.value = value;
		this.visible = visible;
		this.x = x;
		this.y = y;
	}
}

export enum VariableMonitorMode {
	DEFAULT,
	SLIDER,
	LARGE
}

export class ScalarVariable extends VariableBase<ScalarValue> {
	public cloud: boolean;
	public mode: VariableMonitorMode;
	public sliderMin: number;
	public sliderMax: number;
	public isDiscrete: boolean;

	constructor ({
		name,
		value,
		cloud = false,
		visible = true,
		mode = VariableMonitorMode.DEFAULT,
		x = 0,
		y = 0,
		sliderMin = 0,
		sliderMax = 100,
		isDiscrete = true
	}: {
		name: string,
		value: ScalarValue,
		cloud?: boolean,
		visible?: boolean,
		mode?: VariableMonitorMode,
		x?: number,
		y?: number,
		sliderMin?: number,
		sliderMax?: number,
		isDiscrete?: boolean
	}) {
		super(name, value, visible, x, y);

		this.cloud = cloud;
		this.mode = mode;
		this.sliderMin = sliderMin;
		this.sliderMax = sliderMax;
		this.isDiscrete = isDiscrete;
	}
}

export class ListVariable extends VariableBase<ScalarValue[]> {
	public width: number | null;
	public height: number | null;

	constructor ({
		name,
		value,
		visible = true,
		x = 0,
		y = 0,
		width = null,
		height = null
	}: {
		name: string,
		value: ScalarValue[],
		visible?: boolean,
		x?: number,
		y?: number,
		width?: number | null,
		height?: number | null
	}) {
		super(name, value, visible, x, y);

		this.width = width;
		this.height = height;
	}
}

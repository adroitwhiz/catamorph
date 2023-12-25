export default class Asset {
	public md5;
	public ext;
	public data;

	constructor (md5: string, ext: string, data: ArrayBuffer) {
		this.md5 = md5;
		this.ext = ext;
		this.data = data;
	}
}

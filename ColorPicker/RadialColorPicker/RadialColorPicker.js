import { Color } from "../Models/Color";

export default class RadialColorPicker {
    constructor() {
        this.color = new Color();
        this.Value = this.color.colorHex;
    }

    init() {
        this.color.fromHex(this.Value);
    }

    valueChanged() {
        this.color.HsvChanged();
        this.Value = this.color.colorHex;
    }
}
import { Color } from "../Models/Color";

export default class RgbSliderColorPicker {
    constructor() {
        this.color = new Color();
        this.Value = this.color.colorHex;
    }

    init() {
        this.color.fromHex(this.Value);
    }

    valueChanged() {
        this.color.RgbChanged();
        this.Value = this.color.colorHex;
    }

    get gradientR (){
        return {
            start: `#00${this.color.hexG}${this.color.hexB}`,
            end: `#ff${this.color.hexG}${this.color.hexB}`
        }
    }

    get gradientG (){
        return {
            start: `#${this.color.hexR}00${this.color.hexB}`,
            end: `#${this.color.hexR}ff${this.color.hexB}`
        }
    }

    get gradientB (){
        return {
            start: `#${this.color.hexR}${this.color.hexG}00`,
            end: `#${this.color.hexR}${this.color.hexG}ff`
        }
    }
}
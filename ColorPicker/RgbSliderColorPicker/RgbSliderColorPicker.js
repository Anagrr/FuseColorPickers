export default class RgbSliderColorPicker {
    constructor() {
        this.R = 0.5;
        this.G = 0.2;
        this.B = 0.6;
        this.Value = this.colorHex;
    }

    get colorHex(){
        return `#${this.toHex(this.R)}${this.toHex(this.G)}${this.toHex(this.B)}`;
    }

    get gradientR (){
        return {
            start: `#00${this.toHex(this.G)}${this.toHex(this.B)}`,
            end: `#ff${this.toHex(this.G)}${this.toHex(this.B)}`
        }
    }

    get gradientG (){
        return {
            start: `#${this.toHex(this.R)}00${this.toHex(this.B)}`,
            end: `#${this.toHex(this.R)}ff${this.toHex(this.B)}`
        }
    }

    get gradientB (){
        return {
            start: `#${this.toHex(this.R)}${this.toHex(this.G)}00`,
            end: `#${this.toHex(this.R)}${this.toHex(this.G)}ff`
        }
    }

    toHex(number) {
        number = Math.round(number * 255);
        return number < 16 ? "0" + number.toString(16) : number.toString(16);
    }

    valueChanged() {
        this.Value = this.colorHex;
    }
}
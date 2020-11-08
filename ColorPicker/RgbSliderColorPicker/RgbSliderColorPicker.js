export default class RgbSliderColorPicker {
    constructor() {
        this.R = this.G = this.B = 0;
        this.Value = this.hexRGB;
        this.ValueString = this.hexRGB;
    }

    get hexR() {
        return this.toHex(this.R);
    }
    get hexG() {
        return this.toHex(this.G);
    }
    get hexB() {
        return this.toHex(this.B);
    }

    get hexRGB(){
        return `#${this.hexR}${this.hexG}${this.hexB}`;
    }

    get gradientR (){
        return {
            start: `#00${this.hexG}${this.hexB}`,
            end: `#FF${this.hexG}${this.hexB}`
        }
    }

    get gradientG (){
        return {
            start: `#${this.hexR}00${this.hexB}`,
            end: `#${this.hexR}FF${this.hexB}`
        }
    }

    get gradientB (){
        return {
            start: `#${this.hexR}${this.hexG}00`,
            end: `#${this.hexR}${this.hexG}FF`
        }
    }

    toHex(number) {
        return number < 16 ? "0" + number.toString(16) : number.toString(16);
    }

    valueChanged(){
        this.Value = this.hexRGB;
        this.ValueString = this.hexRGB;
    }
}
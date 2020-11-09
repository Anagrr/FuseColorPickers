export default class HSLSliderColorPicker {
    constructor() {
        this.H = 0;
        this.S = 1;
        this.V = 1;
        this.Value = this.color;
    }

    get color() {
        return this.rgbToHex(this.hsv2rgb(this.H, this.S, this.V));
    }

    valueChanged() {
        this.Value = this.color;
    }

    toHex(number) {
        number = Math.round(number * 255);
        return number < 16 ? "0" + number.toString(16) : number.toString(16);
    }

    // input: h in [0,360] and s,v in [0,1] - output: r,g,b in [0,1]
    hsv2rgb(h,s,v) {                              
        let f = (n,k=(n+h/60)%6) => v - v*s*Math.max(Math.min(k,4-k,1), 0);     
        return [f(5),f(3),f(1)];       
    }

    // input: r,g,b in [0,1], out: h in [0,360) and s,v in [0,1]
    rgb2hsv(r,g,b) {
        let v=Math.max(r,g,b), c=v-Math.min(r,g,b);
        let h= c && ((v==r) ? (g-b)/c : ((v==g) ? 2+(b-r)/c : 4+(r-g)/c)); 
        return [60*(h<0?h+6:h), v&&c/v, v];
    }

    rgbToHex(rgb){
        return `#${this.toHex(rgb[0])}${this.toHex(rgb[1])}${this.toHex(rgb[2])}`;
    }
}
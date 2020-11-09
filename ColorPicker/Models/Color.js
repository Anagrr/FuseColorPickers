import { Observable } from "FuseJS/Observable";

export class Color {
    constructor() {
        this.R = 0;
        this.G = 0;
        this.B = 0;

        this.H = 0;
        this.S = 1;
        this.V = 1;

        this.HexColor = Observable("");
    }

    get colorHex() {
        return `#${this.toHex(this.R)}${this.toHex(this.G)}${this.toHex(this.B)}`;
    }

    fromRGB(r,g,b) {
        this.R = r;
        this.G = g;
        this.B = b;

        let arr = this.rgb2hsv(r,g,b);
        this.H = arr[0];
        this.S = arr[1];
        this.V = arr[2];
        this.valueChanged();
    }

    fromRGB(h,s,v) {
        this.H = h;
        this.S = s;
        this.V = v;

        let arr = this.hsv2rgb(h,s,v);
        this.R = arr[0];
        this.G = arr[1];
        this.B = arr[2];
        this.valueChanged();
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

    valueChanged() {
       this.HexColor(this.colorHex); 
    }
}
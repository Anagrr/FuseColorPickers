export class Color {
    constructor() {
        this.R = 0;
        this.G = 0;
        this.B = 0;

        this.H = 0;
        this.S = 1;
        this.V = 1;
    }

    get colorHex() {
        return `#${this.toHex(this.R)}${this.toHex(this.G)}${this.toHex(this.B)}`;
    }

    RgbChanged() {
        let arr = this.rgb2hsv(this.R,this.G,this.B);
        this.H = arr[0];
        this.S = arr[1];
        this.V = arr[2];
    }

    HsvChanged() {
        let arr = this.hsv2rgb(this.H,this.S,this.V);
        this.R = arr[0];
        this.G = arr[1];
        this.B = arr[2];
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

    fromHex(hex){
        if(!hex) return;
        this.R = parseInt(`0x${hex[1]}${hex[2]}`) / 255;
        this.G = parseInt(`0x${hex[3]}${hex[4]}`) / 255;
        this.B = parseInt(`0x${hex[5]}${hex[6]}`) / 255;

        this.RgbChanged();
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
}
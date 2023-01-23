let c = Number(process.argv[2]);
let p = Number(process.argv[3]);
let _r = Number(process.argv[4]);

let r =  parseFloat(_r) / (100 * p) ;

let _i = ((c * r) / (1 - (1 / Math.pow((1 + r),p))));

let t___i = 0;
let t_rec = 0;

let b = c;
__i = parseFloat(b) * r;

for (var i = 1; i <= p ; i++) {
    var __i = parseFloat(b) * r;
    b -= (_i - __i);
    console.error(i + "\t\t" + _i.toFixed(2) + " \t\t" + __i.toFixed(2) + "\t\t" + (_i - __i).toFixed(2) + "\t\t" + b.toFixed(2));
    t_rec += _i;
    t___i += __i;
}

console.info("t \t" + t_rec.toFixed(2) + " \t\t" + t___i.toFixed(2) + "\t\t" + (c).toFixed(2));


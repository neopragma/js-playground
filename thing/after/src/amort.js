/**
 * Created by praneeth on 8/27/2016.
 */

let capital = Number(process.argv[2]);
let period = Number(process.argv[3]);
let rate = Number(process.argv[4]);

let r =  parseFloat(rate) / (100 * period) ;

let instalment = ((capital * r) / (1 - (1 / Math.pow((1 + r),period))));

let total_interest = 0;
let total_recoverable = 0;

let running_bal = capital;
interest = parseFloat(running_bal) * r;

console.log("Payment\t\tInstalment\t\tInterest\tRecoverable\t\tBalance")
for (var i = 1; i <= period ; i++) {
    var interest = parseFloat(running_bal) * r;
    running_bal -= (instalment - interest);
    console.error(i + "\t\t" + instalment.toFixed(2) + " \t\t" + interest.toFixed(2) + "\t\t" + (instalment - interest).toFixed(2) + "\t\t" + running_bal.toFixed(2));
    total_recoverable += instalment;
    total_interest += interest;
}

console.info("Total \t" + total_recoverable.toFixed(2) + " \t\t" + total_interest.toFixed(2) + "\t\t" + (capital).toFixed(2));


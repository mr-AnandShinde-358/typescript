"use strict";
// const AISLE=0
// const MIDDEL=1
// const WINDOW=2
Object.defineProperty(exports, "__esModule", { value: true });
// const seat=0
// if(seat===AISLE){
//     console.log('this is aisle seat')
// }
var SeatChoice;
(function (SeatChoice) {
    // AISLE,
    // AISLE=10,
    // AISLE="asile",
    // MIDDEL=0,
    SeatChoice["AISLE"] = "asile";
    SeatChoice["MIDDEL"] = "middle";
    SeatChoice["WINDOW"] = "window";
    SeatChoice[SeatChoice["FOURTH"] = 0] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;

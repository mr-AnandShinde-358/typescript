// const AISLE=0
// const MIDDEL=1
// const WINDOW=2

// const seat=0
// if(seat===AISLE){
//     console.log('this is aisle seat')
// }


// const enum SeatChoice { // when you can add const before enum javascript code not proceduce so many
enum SeatChoice {
    // AISLE,
    // AISLE=10,
    // AISLE="asile",
    // MIDDEL=0,
    AISLE="asile",
    MIDDEL="middle",
    WINDOW="window",
    FOURTH=0
}

const hcSeat = SeatChoice.AISLE

export{}
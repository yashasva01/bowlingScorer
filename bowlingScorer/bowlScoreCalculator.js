let rolls = [1,2,3,4,'5','five'];//[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]


function getScore (rolls) {
    if (!Array.isArray(rolls)) {throw new Error('The Input type did not match the requirement');}
    if (rolls.some(isNaN)) {throw new Error('Some of the input are not in type number');}
}

console.log(getScore(rolls))

module.exports = { getScore }
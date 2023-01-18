let rolls1 = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let rolls2 = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
let rolls3 = [1, 1, 2, 3, 4, 5, 4, 5, 5, 3, 3, 2, 3, 4, 5, 5, 3, 7, 10, 10, 4];
let rolls4 = [0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];


function getScore (rolls) {
    if (!Array.isArray(rolls)) {throw new Error('The Input type did not match the requirement');}
    if (rolls.some(num=> isNaN(num))) {throw new Error('Some of the input are not in type number');}
    //console.log(rolls)
    let totalScore = 0;
    let frames = 10;
    for(let ind = 0; ind < rolls.length;) {
        if(frames === 0){//throw new Error('More than 10 frames')
            break;}
        //strike
        if (rolls[ind] > 10) {throw new Error('Cant be greater than 10');}
        else if(rolls[ind] == 10) {
            frames =frames - 1;
            totalScore = totalScore + rolls[ind] + rolls[ind + 1] + rolls[ind + 2];
            ind = ind + 1;
        }else {
            // error
            if(rolls[ind] + rolls[ind + 1] > 10){throw new Error('Frame cant cross limit 10');}
            //Maybe spare
            else if(rolls[ind] + rolls[ind + 1] == 10){
                totalScore = totalScore + 10 + rolls[ind + 2];
                ind = ind + 2;
                frames = frames - 1;
            }//Maybe open frame 
            else {
                totalScore = totalScore + rolls[ind] + rolls[ind+1];
                ind = ind + 2;
                frames = frames - 1;
            }
         }
        
    }
    return totalScore;
}
console.log(getScore(rolls1))
function getBestScore(rolls1, rolls2, rolls3, rolls4) {
    let scoreArray = []
    scoreArray.push(getScore(rolls1))
    scoreArray.push(getScore(rolls2))
    scoreArray.push(getScore(rolls3))
    scoreArray.push(getScore(rolls4))
    console.log(Math.max(...scoreArray));
}
console.log(getBestScore(rolls1, rolls2, rolls3, rolls4))

module.exports = { getScore }
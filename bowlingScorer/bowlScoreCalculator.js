let rolls = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


function getScore (rolls) {
    if (!Array.isArray(rolls)) {throw new Error('The Input type did not match the requirement');}
    if (rolls.some(num=> isNaN(num))) {throw new Error('Some of the input are not in type number');}
    //console.log(rolls)
    let totalScore = 0;
    let frames = 10;
    for(let ind = 0; ind < rolls.length;) {
        if(frames === 0){break;}
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

console.log(getScore(rolls))
module.exports = { getScore }
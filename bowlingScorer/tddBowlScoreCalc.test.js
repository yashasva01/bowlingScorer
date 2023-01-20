const { getScore, splitFrame } = require('./');

describe('Bowling Score calculator utility',() => {
    describe('Incorrect input type', () => {
        it('Should throw an error when the input type in not an array', () => {
            expect(() => getScore({})).toThrow('The Input type did not match the requirement');
        });
        it('Should throw an error when the input type in array is not Int', () => {
            let rolls = [1,2,3,4,'5','five'];
            expect(() => getScore(rolls)).toThrow('Some of the input are not in type number');
        });
    });

    describe('When provided array with normal input', () => {
        it('Should return the score of the rolls', () => {
            rolls = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            expect( getScore(rolls)).toBe(16);
        });
    });
    describe('When last three are strike', () => {
        it('Should return the correct score considering the two extra rolls',()=>{
            rolls = [0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
            expect( getScore(rolls)).toBe(40);
        });
    });
});
const { getScore } = require('./bowlScoreCalculator')


describe ('Bowling Score utility', () => {
    describe('Incorrect input type', () => {
        it('Should throw an error when the input type in not an array', () => {
            expect(() => getScore({})).toThrow('The Input type did not match the requirement');
        })
        it('Should throw an error when the input type in not an array', () => {
            let rolls = [1,2,3,4,'5','five'];
            expect(() => getScore(rolls)).toThrow('The Input type did not match the requirement');
        })
    })

}) 
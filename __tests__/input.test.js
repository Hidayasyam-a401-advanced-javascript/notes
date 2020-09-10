
'use strict'
const Input = require('../lib/input.js');
jest.mock('minimist');
const minimist = require('minimist');

minimist.mockImplementation(() => {
    return {
        a: { _: [], a: 'Hello from other side  :P  ' },
        args: { _: [], c: 'hello from home side :D ' }

    }
});



describe('Input Module', () => {

    it('valid()  invalid action', () => {
        const testInput = new Input();
        let args = { _: [], c: 'hello from home side :D ' }
        expect(testInput.valid(args)).toBeFalsy();
    });
    it('valid() returns action and massage as payload', () => {
        const testInput = new Input();
        let args = { _: [], a: 'Hello from other side  :P  ' }
        expect(testInput.valid(args)).toBeTruthy();
    });



});
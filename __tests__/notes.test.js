'use strict'

const Input = require('../lib/input.js');
const Notes = require('../lib/notes.js');
jest.spyOn(global.console, 'log');
jest.spyOn(global.console, 'error');


describe('Notes Module', () => {

    let valid = {
        action: 'add',
        payload: 'Hello from other side'
    }



    it('Invalid action', () => {

        let options = new Notes({ actions: 'error: Invalid action' });

        expect(console.log).toHaveBeenCalled();
    });

    it('Invalid payload', () => {
        let options = new Notes({ actions: 'invalid notes' });
        expect(console.log).toHaveBeenCalled();
    });

    it('correct action and payload', () => {
        const opts = new Notes(valid)
        //options.execute());
        expect(console.log).toHaveBeenCalled();
    });
})



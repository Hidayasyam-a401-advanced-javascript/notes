'use strict'

const Input = require('../lib/notes.js');
jest.spyOn(global.console, 'log');
jest.mock('minimist')
const minimist = require('minimist');
minimist.mockImplementation(() => {

    return {
        a: { action: 'add', payload: 'payloads' }
    }

})

describe('Notes Module', () => {

    it('Invalid action', () => {
        let options = new Notes({ actions: 'error: Invalid action' });
        expect(console.log).toHaveBeenCalled();
    });

    it('Invalid payload', () => {
        let options = new Notes({actions:{action: 'add'}});
        expect(console.log).toHaveBeenCalled();
    });

    it('correct action and payload', () =>{
        let options = new Notes({actions:{action: 'add', payload: 'msg'}});
        expect(console.log).toHaveBeenCalled();
      });
})



'use strict'

const Input = require('../lib/input.js');
const Notes = require('../lib/notes.js');
jest.spyOn(global.console, 'log');
jest.spyOn(global.console, 'error');

// jest.mock('minimist')
// const minimist = require('minimist');
// minimist.mockImplementation(() => {

//     return {
//         a: { action: 'add', payload: 'payloads' }
//     }

// })

describe('Notes Module', () => {

    let valid={
        action:'add',
        payload:'Hello from other side'
    }

    // let Invalid={
    //     action:'',
    //     payload:'Hello from other side'
    // }

    // let InvalidNotes={
    //     action:'add',
    //     payload:'',
    // }

    it('Invalid action', () => {
       // let input= new Input(Invalid)
        let options = new Notes({actions:'error: Invalid action'});
       // console.log("options >>>>>>>>>>> ",options)
        expect(console.log).toHaveBeenCalled();
    });

    it('Invalid payload', () => {
        let options = new Notes({actions:'invalid notes'});
        expect(console.log).toHaveBeenCalled();
    });

    it('correct action and payload', () =>{
        const opts=new Notes(valid)
       //options.execute());
       expect(console.log).toHaveBeenCalled();
      });
})



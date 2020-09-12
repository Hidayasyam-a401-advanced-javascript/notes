'use strict'


const { collection } = require("../../notes/lib/model/notes-schema.js");

// try it with mongoose package and see ow the test data will be inserted 
require('@code-fellows/supergoose');

const Notes = require('../../notes/lib/model/notes-collection.js');
const notes = new Notes();

describe('Notes Model', () => {
    it('can create a new notes record', () => {
        let obj = { note: 'Note 1 ', category: 'life' };
        notes.create(obj).then(record => {
            Object.keys(obj).forEach(key => {
                expect(record[key]).toEqual(obj[key]);
            });
        });
    });

    

    it('can get() a notes record', async ()=> {
         let obj = { note: 'Note 2 ', category: 'school' };
        const record = await notes.create(obj);
        console.log("record : ",record)
        const Item = await notes.get(record._id);
        console.log("Notes : ",Item)
        Object.keys(obj).forEach(key => {
            expect(Item[key]).toEqual(obj[key]);
        });
    });

    it('can Update a new notes record', async () => {
        let obj = { note: 'Note 3 ', category: 'life' };
        const record = await notes.create(obj);
        let update_obj={ note: 'Note Update ', category: 'Education' }
        const Item = await notes.update(record._id,update_obj);
        console.log("Notes : ",Item)
        Object.keys(obj).forEach(key => {
            expect(Item[key]).toEqual(obj[key]);
        });
    });
    it('can Delete notes record', async () => {
        let obj = { note: 'Note 4 ', category: 'life' };
        const record = await notes.create(obj);
        const Item = await notes.delete(record._id);
        console.log("Notes Deleted : ",Item)
        Object.keys(obj).forEach(key => {
            expect(Item[key]).toEqual(obj[key]);
        });
    });
   
    
});

// const Input = require('../lib/input.js');
// const Notes = require('../lib/notes.js');
// jest.spyOn(global.console, 'log');
// jest.spyOn(global.console, 'error');


// describe('Notes Module', () => {

//     let valid = {
//         action: 'add',
//         payload: 'Hello from other side',
//         category: 'life'
//     }



//     it('Invalid action', () => {

//         let options = new Notes({ actions: 'error: Invalid action' });

//         expect(console.log).toHaveBeenCalled();
//     });

//     it('Invalid payload', () => {
//         let options = new Notes({ actions: 'invalid notes' });
//         expect(console.log).toHaveBeenCalled();
//     });

//     it('correct action and payload', () => {
//         const opts = new Notes({actions:valid})
//         //options.execute());
//         expect(console.log).toHaveBeenCalled();
//     });
// })



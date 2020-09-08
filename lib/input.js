'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.actions = this.getaction(args);
    this.valid(args)
  }

  getaction(action) {
    if (action.a || action.add) return this.getnotes(action.a || action.add);
    else { return 'error: Invalid action'; }
  }
  getnotes(notes = '') {
    if (notes !== true) return { action: 'add', payload: notes };
    else { return 'invalid notes'; }
  }

  valid(args) {

    return (args.a || args.add) && this.actions

  } 



}



module.exports = Input;


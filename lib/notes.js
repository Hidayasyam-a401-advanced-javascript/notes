
'use strict';

class Notes {

  constructor(opts) {
    this.execute(opts);

  }
  execute(opts) {
    if (opts.actions.action === 'add' || opts.actions.action === 'a') this.add(opts);
    else { console.log(opts.actions); }
  }
  add(opts) {
    this.payload = opts.actions.payload;
    this.id = parseInt(Math.random() * 9999999999999);

    console.log('Payload =', this.payload, ' ', 'ID=', this.id);
  }
}

module.exports = Notes;

'use strict';

class Notes {

  constructor(actions) {
    this.execute(actions);

  }
  // execute(opts) {
  //   if (actions.action === 'add' || opts.actions.action === 'a') this.add(opts);
  //   else { console.log(opts.actions); }
  // }
  // add(opts) {
  //   this.payload = opts.actions.payload;
  //   this.id = parseInt(Math.random() * 9999999999999);

  //   console.log('Payload =', this.payload, ' ', 'ID=', this.id);
  // }

  execute(actions) {
    if (actions.action === 'add' || actions.action === 'a') this.add(actions);
    else { console.log(actions); }
  }
  add(actions) {
    this.payload = actions.payload;
    this.id = parseInt(Math.random() * 9999999999999);

    console.log('Payload =', this.payload, ' ', 'ID=', this.id);
  }
}

module.exports = Notes;
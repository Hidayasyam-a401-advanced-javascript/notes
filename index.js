#!/usr/bin/env node

'use strict'

const mongoose = require('mongoose');
const notes = require('./lib/model/notes-collection.js');
const note = new notes();

require('dotenv').config();

const MONGOOSE_URL=process.env.MONGOOSE_URL;
mongoose.connect(MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=>
    console.log("connect")
);
//mongoose.disconnect();
const Input = require('./lib/input');
const Notes = require('./lib/notes');
const arg = new Input();
//console.log('index >>>>>>> ',arg);
const note1 = new Notes(arg);
// Npm module
const color = require('cli-color');

// console.log(color.bgGreen('Hello world'))


// (function(data){
    
// })('salaah')


// Local Module


// const auth = require('./auth');

// auth.register('Salaah!!')
// auth.login('Salaah!!', 'secret')

//Core Modules

// http, os, fs, events, path


//PATH 

const path = require('path');

//dirname
// console.log('Folder Name: ', path.dirname(__filename));

//filename
// console.log('File Name: ', path.basename(__filename));

//extension

// console.log('Ext Name: ', path.extname(__filename));

//parse
// console.log('File Name: ', path.parse(__filename));

//join
// console.log('File Name: ', path.join(__dirname, 'order', 'app.js'));


const fs = require('fs');

// fs.mkdir(path.join(__dirname, 'text'), (err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log('Folder Created!')
// })

// fs.writeFile(path.join(__dirname, 'text', 'text.txt'), 'Hello Node', (err) => {
//     if(err){
//         throw err;
//     }
//     console.log('File Created!')
// })


// fs.readFile(path.join(__dirname, 'text', 'text.txt'), 'utf-8', (err, data) => {
//     if(err){
//         throw err;
//     }
//     console.log(data);
// })


//OS 

const os = require('os');

//type
// console.log('Os Type: ', os.type());
//platform
// console.log('Os Platform: ', os.platform());
//arch
// console.log('Os arch: ', os.arch());
//cpu details
// console.log('cpu details: ', os.cpus());
//free memory
// console.log('Free Memory: ', os.freemem());
//total memory
// console.log('Total memory: ', os.totalmem());
//uptime
// console.log('Uptime: ', os.uptime());




const Emitter = require('events');

const myEmitter = new Emitter();

// myEmitter.on('name', (data) => {
//     console.log(data);
// })


// myEmitter.emit('name', {
//     name: 'Salaah!'
// })

class Auth extends Emitter {
    register(name){
        console.log(`Registered Succesfully ${name}`);
        this.emit('registered', name)
    }
}

const auth = new Auth();


auth.on('registered', (data) => {
    console.log(`Sending Verify mail to ${data}`)
})

auth.on('registered', (data) => {
    console.log(`Sending Welcome mail to ${data}`)
})

auth.register('buri buri')
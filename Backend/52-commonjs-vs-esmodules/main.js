// const { createServer } = require('node:http'); - commonjs
// import { createServer } from 'node:http'; - ecmascript

// import {a,b,d} from "./mymodule.js"
// console.log(a,b,d)
// import sanket from "./mymodule.js"
// console.log(sanket)

const a=require('./mymodule2.js')
console.log(a,__dirname,__filename)
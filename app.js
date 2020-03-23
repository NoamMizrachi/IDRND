const xlsx = require('node-xlsx');
const fs = require('fs');



const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/forTest.xlsx`));
console.log(workSheetsFromBuffer);
console.log(workSheetsFromBuffer[0].data[0]);
console.log(workSheetsFromBuffer[0].data[1]);



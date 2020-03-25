const xlsx = require('node-xlsx');
// import xlsx from 'node-xlsx';
const fs = require('fs');
const logger = require('./Logger')



/////////////////////////////////////////////////////////////////////////////////////////
// const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/forTest.xlsx`));
// const workSheetsFromFile = xlsx.parse(`${__dirname}/forTest.xlsx`);

// console.log(workSheetsFromFile);
// console.log(workSheetsFromFile[0].data[0]);
// console.log(workSheetsFromFile[0].data[1]);


////////////////////////////////////////////////////////////////////////////////////////
const dataForXlsx = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
var buffer = xlsx.build([{ name: "outPutXlsx", data: dataForXlsx }]); // Returns a buffer
const workSheetsFromBuffer = xlsx.parse(buffer);

console.log(workSheetsFromBuffer[0].data[2]);


////////////////////////////////////////////////////////////////////////////////////////

// var time = 1;

// var interval = setInterval(function() { 
//    if (time <= 3) { 
//       alert(time);
//       time++;
//    }
//    else { 
//       clearInterval(interval);
//    }
// }, 5000);
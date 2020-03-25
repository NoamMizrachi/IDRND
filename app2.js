const XLSX = require('xlsx');

var workbook = XLSX.readFile('./forTest.xlsx');

console.log(workbook);

XLSX.writeFile(workbook, 'out.xlsx');
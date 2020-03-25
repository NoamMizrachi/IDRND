// const request = require("request");
// const XLSX = require("xlsx");

function sdk() {
  const readFromXlsx = xlsxSheet => {
    // var workbook = XLSX.readFile("./forTest.xlsx");
    // console.log(workbook);
    // XLSX.writeFile(workbook, "out.xlsx");
  };

  const getFirstCell = xlsxSheet => {
    // var workbook = XLSX.readFile(xlsxSheet);
    console.log("hello");
  };

  return {
    readFromXlsx,
    getFirstCell
  };
}

module.exports = { sdk };
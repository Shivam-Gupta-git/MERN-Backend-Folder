const fs = require('fs')
const fileName = "text.txt"

/*---- write -----*/ 
fs.writeFileSync(fileName, "this is internal data \n", "utf-8");
console.log("file created");

/*------ read --------*/
let data = fs.readFileSync(fileName, "utf-8");
console.log(data);

/*------- upgate data --------*/ 
fs.appendFileSync(fileName, "this is append data \n", "utf-8")
console.log("data is updated successfully");

/*----- read update data ---------*/
data = fs.readFileSync(fileName, 'utf-8')
console.log(data);

/*-------- remove data ---------*/
// fs.unlinkSync(fileName);
// console.log("data is successfully remove");
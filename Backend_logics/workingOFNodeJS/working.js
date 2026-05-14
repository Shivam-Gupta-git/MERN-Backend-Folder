const fs = require('fs')
const crypto = require('crypto')

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 5 // user to set the size of threadPool 

setTimeout(() => console.log("hello from timer 1"), 0);
setImmediate(() => console.log("hello from immediate Fn 1"));

fs.readFile('sample.txt', 'utf-8', () => {
  console.log("IO Polling finish");

  setTimeout(() => console.log("hello from timer 2"), 0);
  setTimeout(() => console.log("hello function timer 3"), 5 * 1000);

  setImmediate(() => console.log("hello from immediate Fn 2"))

  // CPU Intensive Work
  crypto.pbkdf2('Password1', 'salt1', 100000, 1023, 'sha512', ()=> {
    console.log(`${Date.now() - start}ms`,"Password 1 Done");
  })
  crypto.pbkdf2('Password2', 'salt1', 100000, 1023, 'sha512', ()=> {
    console.log(`${Date.now() - start}ms`,"Password 2 Done");
  })
  crypto.pbkdf2('Password3', 'salt1', 100000, 1023, 'sha512', ()=> {
    console.log(`${Date.now() - start}ms`,"Password 3 Done");
  })
  crypto.pbkdf2('Password4', 'salt1', 100000, 1023, 'sha512', ()=> {
    console.log(`${Date.now() - start}ms`,"Password 4 Done");
  })
  crypto.pbkdf2('Password5', 'salt1', 100000, 1023, 'sha512', ()=> {
    console.log(`${Date.now() - start}ms`,"Password 5 Done");
  })

})
console.log("hello from top level code");
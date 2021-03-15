var path=require('path')

var p="/Users/stephengreer/Desktop/Node/app.txt"

console.log(path.dirname(p))
console.log(path.basename(p))
console.log(path.extname(p))
console.log(path.isAbsolute(p))
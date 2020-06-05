//run node process --name Mark

function param(p) {
  var index = process.argv.indexOf(p)
  console.log(`The value is ${index}`)
  return process.argv[index + 1];
}

console.log(param('--name'))
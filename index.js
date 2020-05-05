var randomColor = require('random-color');
var chalk = require('chalk');
var color = randomColor(0.5, 0.95);
//console.log(color);
console.log(color.hexString());
console.log(
  chalk.hex(color.hexString())(
    `##############################
##############################
##############################
##############################
##########  ${color.hexString()} ##########
##############################
##############################
##############################
##############################
##############################`,
  ),
);

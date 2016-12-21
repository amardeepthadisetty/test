function getArgument(argument){
    index = process.argv.indexOf(argument);

    return (index === -1) ? null : process.argv[index + 1];
}
var index;
var name = getArgument('--name');

var message = name ? "Hello " + name : "Hello World";

console.log(message+"\n"+index);
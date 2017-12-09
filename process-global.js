//prints node executable file path
console.log(process.execPath);
//current working directory
process.stdout.write(process.cwd());
//prints platform
process.stdout.write(process.platform  +'\n');
//prints version
process.stdout.write(process.version  +'\n');
//readable stream
process.stdin.read();
//non-blocking writeable stream
process.stdout.write('hello \n');
//blocking writeable stream
process.stderr.write('hello\n');
//Outputs the node executable file path and name of javaScript file passed to Node.js to start the process
console.log(process.argv);
//Outputs the node executable file path and name of javaScript file passed to Node.js to start the process
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
 });
//Exits program with exit code 0
process.on('exit', function(code) {
    
       // Following code will never execute.
       setTimeout(function() {
          console.log("This will not  run");
       }, 0);

       console.log('About to exit with code:', code);
    });
    console.log("Program Ended");
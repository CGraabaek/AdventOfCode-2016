
const fs = require('fs');



 function getSecurityCode(inputFile) {
        //var input = fs.readFileSync(inputFile, 'utf-8');
                var input = fs.readFileSync(inputFile, 'utf-8').trim().split("\n");

        //split instructions on newlines.
        var instructions = input.split("\n");

 instructions.forEach(function(line) {
            // ignore empty lines;
            if (line.length) {
                for (var i = 0; i < line.length; i++) {
                    var sides = instructions[i].split(" ");


                    console.log(sides);
                 
                }
            }
        });

      
    }



    getSecurityCode("./day3_input.txt");
const fs = require('fs');

var keypad = [[0, 0, 1, 0, 0],
    [0, 2, 3, 4, 0],
    [5, 6, 7, 8, 9],
    [0, "A", "B", "C", 0],
    [0, 0, "D", 0, 0]];

var startPosition = [2, 0];


    function getSecurityCode(inputFile, keypad, position) {
        var input = fs.readFileSync(inputFile, 'utf-8');
        var instructions = input.split("\n");
        var code = "";

        instructions.forEach(function(line) {
            // ignore empty lines;
            if (line.length) {
                for (var i = 0; i < line.length; i++) {
                    // check if the final position is defined and !false (0);
                    if ((line[i] === "U") && keypad[position[0] - 1] && keypad[position[0] - 1][position[1]]) {
                        position[0]--;
                    }
                    else if (line[i] === "D" && keypad[position[0] + 1] && keypad[position[0] + 1][position[1]]) {
                        position[0]++;
                    }
                    else if (line[i] === "R" && keypad[position[0]][position[1] + 1]) {
                        position[1]++;
                    }
                    else if (line[i] === "L" && keypad[position[0]][position[1] - 1]) {
                        position[1]--;
                    }
                }
                code += keypad[position[0]][position[1]];
            }
        });
        console.log("The code is: " + code);
    }

    getSecurityCode("./day2_input.txt", keypad, startPosition);


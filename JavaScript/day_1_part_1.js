/**
 * Created by ChristianGraabaek on 02/12/2016.
 */

function steps(input) {

    // put string input into instructions
    var instructions = input.split(', ');
    var currentPosition = [0, 0];
    var visitedLocations = [0,0];
    var direction;

    if ((/L/).test(instructions[0]) === true) {
        direction = 'west';
        var num = instructions[0].replace('L', '');
        var blocks = parseInt(num);
        currentPosition[0] = currentPosition[0] - blocks;
    } else {
        direction = 'east';
        var num = instructions[0].replace('R', '');
        var blocks = parseInt(num);
        currentPosition[0] += blocks;
    }

    for (var i = 1; i < instructions.length; i++) {
        if ((/L/).test(instructions[i]) === true) {
            var num = instructions[i].replace('L', '');
            var blocks = parseInt(num);
            // arr [0, 1]
            // arr [X, Y]

            if (direction == 'north') {
                direction = 'west';
                currentPosition[0] -= blocks;
            } else if (direction == 'east') {
                direction = 'north';
                currentPosition[1] += blocks;
            } else if (direction == 'south') {
                direction = 'east';
                currentPosition[0] += blocks;
            } else if (direction == 'west') {
                direction = 'south';
                currentPosition[1] -= blocks;
            }

        } else {

            var num = instructions[i].replace('R', '');
            var blocks = parseInt(num);

            if (direction == 'north') {
                direction = 'east';
                currentPosition[0] += blocks;
            } else if (direction == 'east') {
                direction = 'south';
                currentPosition[1] = currentPosition[1] - blocks;
            } else if (direction == 'south') {
                direction = 'west';
                currentPosition[0] -= blocks;
            } else {
                direction = 'north';
                currentPosition[1] += blocks;
            }


        }
        console.log(currentPosition);
      //  console.log(currentPosition[0] + currentPosition[1]);
        console.log(currentPosition[0] + currentPosition[1]);


    }
}

var str = 'L1, L5, R1, R3, L4, L5, R5, R1, L2, L2, L3, R4, L2, R3, R1, L2, R5, R3, L4, R4, L3, R3, R3, L2, R1, L3, R2, L1, R4, L2, R4, L4, R5, L3, R1, R1, L1, L3, L2, R1, R3, R2, L1, R4, L4, R2, L189, L4, R5, R3, L1, R47, R4, R1, R3, L3, L3, L2, R70, L1, R4, R185, R5, L4, L5, R4, L1, L4, R5, L3, R2, R3, L5, L3, R5, L1, R5, L4, R1, R2, L2, L5, L2, R4, L3, R5, R1, L5, L4, L3, R4, L3, L4, L1, L5, L5, R5, L5, L2, L1, L2, L4, L1, L2, R3, R1, R1, L2, L5, R2, L3, L5, L4, L2, L1, L2, R3, L1, L4, R3, R3, L2, R5, L1, L3, L3, L3, L5, R5, R1, R2, L3, L2, R4, R1, R1, R3, R4, R3, L3, R3, L5, R2, L2, R4, R5, L4, L3, L1, L5, L1, R1, R2, L1, R3, R4, R5, R2, R3, L2, L1, L5'

steps(str);
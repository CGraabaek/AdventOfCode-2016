const fs = require('fs');

var tri = 0;
var transposedTri = [];

function isTriangle(line) {
    if (
        line[0] + line[1] > line[2]
        && line[1] + line[2] > line[0]
        && line[0] + line[2] > line[1]  ) {
        return true;
    }
    else
        return false;
}

function calculateTriangles(input) {
    const triangles =
        fs.readFileSync(input, "utf-8").trim()
            .split("\n")
            .map(line => {
                return line.trim().split(/\s+/).map(side => +side)
            });

    //Transpose the first 3 rows 
    for (var i = 0; i < triangles.length; i += 3) {
        for (let j = 0; j < 3; j++) {
            transposedTri.push([triangles[i + 0][j], triangles[i + 1][j], triangles[i + 2][j]]);
        }
    }

    transposedTri.forEach(function (line) {
        // ignore empty lines;
        if (line.length) {
            if (isTriangle(line)) {
                tri++;
            }
        }
    });

    console.log(tri);

}

calculateTriangles("./day3_input.txt");



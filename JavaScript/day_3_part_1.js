const fs = require('fs');

var tri = 0;

function isTriangle(line) {
  if (line[0] + line[1] > line[2]
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


    
  triangles.forEach(function (line) {
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



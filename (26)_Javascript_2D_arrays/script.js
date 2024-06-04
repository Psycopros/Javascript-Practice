const matrix = [[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
                ["*", 0, "#"]];

matrix[1][1] = "X";

for(let matrixValue of matrix){
    const StringValue = matrixValue.join(" ");
    console.log(StringValue);
}

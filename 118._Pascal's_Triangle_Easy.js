var generate = function(numRows) {
    let store = new Array(numRows).fill().map(() => new Array(0));
    for(let i = 0; i < numRows; i++){
        store[i][0] = 1;
        store[i][i] = 1;
        for(let j = 1; j < i; j++){
            store[i][j] = store[i-1][j-1] + store[i-1][j];
        }
    }
    return store;
};
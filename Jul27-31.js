// July 27 (sick)

// July 28,2020

var lastStoneWeight = function (stones) {
    let sorted = stones.sort((a, b) => b - a);

    while (sorted.length > 1) {
        if (sorted[0] === sorted[1]) {
            sorted = sorted.slice(2)
        } else if (sorted[0] !== sorted[1]) {
            sorted[1] = sorted[0] - sorted[1];
            sorted.shift()
            sorted = sorted.sort((a, b) => b - a)
        }
        console.log(sorted)
    }

    if (sorted.length === 1) return sorted[0];

    return 0;
}

lastStoneWeight([2, 4, 8, 3, 7, 5]);
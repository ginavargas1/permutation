// Heap's algorithm 
// using an array and making a pure function 
//create two function 1. to swaps the element (this wll get an array index A and B)

const getPermutations = arr => {

    const output = [];

    const swapInPlace = (arrToSwap, indexA, indexB) => {
        const temp = arrToSwap[indexA];
        arrToSwap[indexA] = arrToSwap[indexB]
        arrToSwap[indexB] = temp
    };

    const generate = (n, heapArry) => {
        if (n === 1) {
            output.push(heapArry.slice());
            return;
        }

        generate(n - 1, heapArry);

        for (let i = 0; i < n -1; i++) {
            if (n % 2 === 0) {
                swapInPlace(heapArry, i, n - 1);
            } else {
                swapInPlace(heapArry, 0, n - 1);
            }

            generate(n - 1, heapArry)
            
        }
    };

    generate(arr.length, arr.slice());

    return output;

};

console.log(getPermutations([1,2,3]));


//const array = [1,2,3] 
//getPermutation(arr);
//console.log(arr)
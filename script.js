// Heap's algorithm 
// using an array and making a pure function 

const getPermutations = arr => {

    const swapInPlace = (arrToSwap, indexA, indexB) => {
        const temp = arrToSwap[indexA];
        arrToSwap[indexA] = arrToSwap[indexB]
        arrToSwap[indexB] = temp
    }

}

//const array = [1,2,3]
//getPermutation(arr);
//console.log(arr)
function sort(initialArray, sortingArray) {
    const copy = [...sortingArray]
    let result=[]
    const sortedIndex = copy.sort((a,b)=> a-b);
    for(let index of sortedIndex) {
        const itsIndex = sortingArray.indexOf(index)
        result.push(initialArray[itsIndex]);
    
    }
    return result
   
}

// ======== typescript Version ========
/*
    function sort(initialArray: (string | number)[], sortingArray: number[]) {
    const copy = [...sortingArray];
    let result: (string | number)[] = [];
    const sortedIndex = copy.sort((a, b) => a - b);
    for (let index of sortedIndex) {
        const itsIndex = sortingArray.indexOf(index);
        result.push(initialArray[itsIndex]);
    }
    return result;
    }
    console.log(
    sort(
        [-53, "z", "a", "b", "u", -22, -66, 19, 48, "f", -41, "q", "e"],
        [6, 4, 12, 2, 8, 1, 0, 7, 9, 5, 11, 3, 10]
    ))

    //[-66, -22, "b", "q", "z", "f", -53, 19, "u", 48, "e", -41, "a"];
function sort(initialArray: number[], sortingArray: number[]): number[] {
 */
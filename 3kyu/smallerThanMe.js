function smaller(arr) {
    let counts = new Array(arr.length).fill(0);
    
    function mergeSort(enumArr) {
        if (enumArr.length <= 1) return enumArr;
        
        const mid = Math.floor(enumArr.length / 2);
        const left = mergeSort(enumArr.slice(0, mid));
        const right = mergeSort(enumArr.slice(mid));
        
        let i = 0, j = 0;
        while (i < left.length || j < right.length) {
            if (j === right.length || (i < left.length && left[i][1] <= right[j][1])) {
                enumArr[i + j] = left[i];
                counts[left[i][0]] += j;
                i++;
            } else {
                enumArr[i + j] = right[j];
                j++;
            }
        }
        return enumArr;
    }

    mergeSort(arr.map((num, idx) => [idx, num]));
    return counts;
}
function SortDes(arr) {
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

let originalArray = [5, 2, 9, 1, 5, 6];
let sortedArray = SortDes(originalArray.slice());
console.log(sortedArray);

function sortArray(arr) {
    let i = 1;
    while (i < arr.length) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;        }
            arr[j + 1] = key;
            i++; }
            return arr;}
   const array = [9,7,10,8,5,8]
   console.log(sortArray(array));

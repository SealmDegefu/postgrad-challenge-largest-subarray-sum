function largestSubarraySum(array){
    if (array.length < 1){
        return 0;
    }

    let currentMax = array[0];
    let globalMax = array[0];
    // let lengtharray = array.length;
    for (let i = 1; i < array.length; i++){
        if (currentMax < 0){
            currentMax = array[i]
        } else {
            currentMax += array[i];
        }
        if (globalMax < currentMax){
            globalMax = currentMax;
        }
    }
    return globalMax;
}
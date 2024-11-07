"use strict";
{
    // Sum of Array
    function sumArray(numbers) {
        return numbers.reduce((sum, num) => sum + num, 0);
    }
    // function call
    const result = sumArray([1, 2, 3, 4, 5]);
    console.log(result);
}

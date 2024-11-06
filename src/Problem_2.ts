{
    // Create a RemoveDuplicates function that takes an array of numbers and returns a new array without duplicates.

    function removeDuplicates (numbers: number[]) : number [] {
        return Array.from(new Set(numbers))
    }

    // function call with an array that has only one number (no duplicates)
    const result = removeDuplicates([1,2,3,4,4,5,6]);
    console.log(result);
}
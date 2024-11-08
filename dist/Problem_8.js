"use strict";
{
    //Create a function validateKeys
    function validateKeys(obj, keys) {
        return keys.every(key => key in obj);
    }
    //Input:
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    // output
    console.log(validateKeys(person, ["name", "age"]));
    // 
}

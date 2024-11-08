"use strict";
{
    // generic function
    function getProperty(obj, key) {
        return obj[key];
    }
    //   take input
    const person = { name: "shan", age: 21 };
    //   for output
    console.log(getProperty(person, "name"));
    // 
}

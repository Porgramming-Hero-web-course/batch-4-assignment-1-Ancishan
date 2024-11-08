{ 
    //Create a function validateKeys 

    function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
        return keys.every(key => key in obj);
    }
    
    // Input:
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    // Output
    console.log(validateKeys(person, ["name", "age"])); // true
    console.log(validateKeys(person, ["name", "height"])); // false
     
    // 
}
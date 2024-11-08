{
    //Create a function validateKeys
    function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
        return keys.every(key => key in obj);
    }

    //Input:
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    // output
    console.log(validateKeys(person, ["name", "age"])); 



    // 
}
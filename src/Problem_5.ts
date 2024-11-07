{
    // generic function
    function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
    }
    //   take input
    const person = { name: "shan", age: 21 };
    //   for output
    console.log(getProperty(person, "name"));

    // 
}
{

    //  Counts the occurrences of a specific word in a sentence, ignoring case.

    function countWordOccurrences(sentence: string, word: string): number {
        const lowerCaseSentence = sentence.toLowerCase();
        const lowerCaseWord = word.toLowerCase();
        const words = lowerCaseSentence.split(" ");
        return words.filter(w => w === lowerCaseWord).length;
    }

    // Input
    const result = countWordOccurrences("I love typescript", "typescript");

    //output 
    console.log(result);


    // 

}
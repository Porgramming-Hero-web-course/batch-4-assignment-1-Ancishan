{
    // countWord Occurrences

    function countWordOccurrences (sentence:string, word:string) : number {

        // convert sentence and word to lowercase
        const lowerSentence = sentence.toLowerCase();
        const lowerWord = word.toLowerCase();

        // split sentence into word
        const words = lowerSentence.split(/\b/);

        const wordCount = words.filter(w => w === lowerWord).length;
        return wordCount;

        
    }

    // call the function
    const result = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");

    console.log(result);

    // 
}
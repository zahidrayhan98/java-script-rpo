function wordreverse (word){
    const words = word.split(' ');
    let reverse = [];
    for (i = word.length -1; i>= 0; i--){
        const element = word [i];
        reverse.push(element);

    }

    return reverse;
}
const word1 = "i am a good boy";
const word2 =wordreverse(word1);
console.log(word2);
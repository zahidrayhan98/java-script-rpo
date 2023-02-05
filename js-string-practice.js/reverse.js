function reversestring (text){
    let reverse ='';
    for (i = text.length - 1; i >= 0; i--){
        const element =text[i];
        reverse = reverse + element;
        console.log(element, reverse)
    }
    return reverse;
}
const string ="i am a fgood boy";
const string1 = reversestring(string);
console.log(string);
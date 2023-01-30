var subject ={
    math :45 ,
    english :76,
    physics : 87,
    chemistry :98,
    biology  :34

}
var all =Object.keys(subject);
var one =Object.values(subject);
// console.log(all , one);
 for (i =0; i<all.length; i ++){
    // 
    var three = all[i];
    var four = subject[three];
    console.log(three, four)
;
 }
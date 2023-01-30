function  getaverage(assignment1, assignment2, assignment3){
    const total =assignment1 + assignment2 + assignment3 ;
    const average = total / 3 ;
    
    return average ;

}
var assignment1mark =55;
var assignment2mark = 51;
var assignment3mark = 60 ;
 var myaverage = getaverage(assignment1mark, assignment2mark,assignment3mark);

 console.log("my average so far:" , myaverage);

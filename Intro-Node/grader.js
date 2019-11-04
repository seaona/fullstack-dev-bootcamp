function average(arr){
    var sum=0;
    //for(var i=0; i<arr.length; i++){
        //sum+=arr[i];
    //}

    arr.forEach(function(score){
        sum+=score;
    })

    var avg=Math.round(sum/arr.length);
    return avg;
}

console.log("Avg score for english");
var scores=[90,98,89,100,100,86,94];
console.log(average(scores));

console.log("Avg score for maths");
var scores2=[40,65,77,82,80,54,73,63,95,49];
console.log(average(scores2));
var Array1=[1,7,3,4,5];
var Array2=[6,7,3,9,8];
var combine=[];

for(var i=0;i<Array1.length;i++){
    combine[combine.length]=Array1[i];
}
for(var j=0;j<Array2.length;j++){
    combine[combine.length]=Array2[j];
}
var uniqueElement=[];
for(var k=0;k<combine.length;k++){
    var element=combine[k];
    var count=0;

    for(var l=0;l<combine.length;l++){
        if(combine[l]===element){
            count++;
        }
    }
    if(count===1){
        uniqueElement[uniqueElement.length]=element;
    }
}
console.log(uniqueElement);
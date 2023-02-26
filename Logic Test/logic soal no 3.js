var oddNumber = [];
// var input = prompt("Masukkan bilangan apapun:");

function oddCount(input){
    for(var i=0; i<input; i++){
        if (i % 2 === 1){
            oddNumber.push(i);
        };
    };
    var countOddNumber = oddNumber.length;
    var output = countOddNumber + " ---> " + oddNumber;
    console.log(output);
}

oddCount(7);
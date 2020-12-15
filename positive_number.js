minimumNumber = (number) => {
    var result = 1;
    var number = number.sort((a,b) => a-b);

    for(let i=0; i<=number.length; i++){
        if(number[i] <= result){
            result = result + number[i]
        } else {
            break;
        }
    }
    return result;
}

console.log(minimumNumber([1,2,8,7]))
console.log(minimumNumber([4,1,2,3,12]))
console.log(minimumNumber([2,3,2,3,4,2,12,3]))
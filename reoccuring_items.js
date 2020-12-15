reoccuringElement = elements => {
    var set = new Set();
    var previous = null;
    var final = null;

    for(let i=0; i < elements.length; i++){
        let element = elements[i];
        if(element !== previous && !set.has(element)){
            set.add(element)
            previous = element;
        } else if(element !== previous && set.has(element)){
                final = element;
                break
            }        
    };

    return final
}

console.log(reoccuringElement([0,0,0,0,0,0,1,2,3,3,3,4,0,0]));
console.log(reoccuringElement([0,1,'a',2,'a']));
console.log(reoccuringElement([0,0,1,1,2,2]));
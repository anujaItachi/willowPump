anagram = (str1, str2) => {
    var count1 = new Array(26).fill(0);
    var count2 = new Array(26).fill(0);

    for (let i = 0; i < str1.length; i++) {
        count1[str1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let i = 0; i < str2.length; i++) {
        count2[str2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let word = '';
    let first = Array.from(str1);
    let second = Array.from(str2);

    first.forEach((ele, index) => {
        if (second.length !== 0 && second.includes(ele)) {
            second.splice(second.indexOf(ele), 1)
            word = word + ele
        }
    })

    let result = 0;
    for (let i = 0; i < 26; i++) {
        result = result + Math.abs(count1[i] - count2[i]);
    }

    return[result, word];
}

console.log(anagram("willowpump", "urowl"));
console.log(anagram("xy", "yab"));
console.log(anagram("hello", ""));
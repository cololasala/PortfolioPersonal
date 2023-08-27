const palabra = 'luciano';

var one = palabra.split('');

console.log(one);

var two = one.reverse();

console.log(two);

var three = two.join("")

console.log(three)

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString('hello'))
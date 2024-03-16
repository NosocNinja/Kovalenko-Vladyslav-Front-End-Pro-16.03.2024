let lengthArr = parseInt(prompt('Input length of Array'));
let arr = [];

for (let i = 0; i < lengthArr; i++){
    arr.push(parseInt(prompt(`Input ${i + 1} element array`)))
}

document.write('Array: [' + arr.join(', ') + ']')

arr.splice(1, 3)

document.write(' Array slice: [' + arr.join(', ') + ']')

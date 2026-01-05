/*пробежать по циклу и перемножить все элементы массива*/


function multiplyArray(array) {
    let value = 1
    for (let i = 0; i <= array.length - 1; i++) {
        value = value * array[i]
    }
    console.log(value)
}
multiplyArray([6, 2, 3, 4])


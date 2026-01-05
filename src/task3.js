function countLetters(num1, num2, str1, str2) {
    const a = {}
    a[str1] = num1;
    a[str2] = num2;

    return a;
}
console.log(countLetters(7, 5, "соль", "перец"))
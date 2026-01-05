/*
Есть список пользователей с информацией об их покупках. Нужно написать функцию, которая:
1) Принимает массив пользователей;
2) Возвращает массив имен тех пользователей, которые сделали больше 3 покупок и сумма всех их покупок больше 100.
   */

const users = [
    { name: 'Anna', purchases: [20, 35, 50] },
    { name: 'John', purchases: [100, 30, 20, 10] },
    { name: 'Mike', purchases: [5, 15] },
    { name: 'Sarah', purchases: [50, 40, 30, 20] },
];

function myUsers(www) {
    const myNames = []

    www.forEach(user => {
        let sum = 0
        user.purchases.forEach(p => sum = sum + p)

        if (user.purchases.length >= 3 && sum > 100) {
            myNames.push(user.name)
        }
    })
    return myNames
}
const namess = myUsers(users)
console.log(namess)
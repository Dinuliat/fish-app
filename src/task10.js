/*Есть массив заказов.Каждый заказ содержит:
имя пользователя(user), cписок товаров(items), где каждый товар — объект с name и price.

        Нужно:
Написать функцию getTopCustomers(orders, minTotal), которая возвращает массив имён пользователей, 
которые: потратили больше minTotal денег суммарно.*/

const orders = [
    {
        user: 'Alice',
        items: [
            { name: 'Book', price: 15 },
            { name: 'Pen', price: 5 }
        ]
    },
    {
        user: 'Bob',
        items: [
            { name: 'Laptop', price: 700 }
        ]
    },
    {
        user: 'Nike',
        items: [
            { name: 'Backpack', price: 30 },
            { name: 'Notebook', price: 10 }
        ]
    },
    {
        user: 'Charlie',
        items: [
            { name: 'Phone', price: 300 },
            { name: 'Case', price: 20 },
            { name: 'Charger', price: 25 }
        ]
    }
];

function getTopCustomers(orders, minTotal) {
    const myNames = []
    orders.forEach(order => {
        let sum = 0
        order.items.forEach(item => sum = sum + item.price)
        //console.log(order.user + " = " + sum)
        //console.log(sum)
        if (sum > minTotal) {
            myNames.push(order.user)
        }
    })
    return myNames
}
let Names = getTopCustomers(orders, 50)
console.log(Names)

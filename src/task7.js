/*Требования:
1. Найди суммарную стоимость всех продуктов категории "Electronics". 
Используй цикл для прохождения по массиву объектов и суммируй цены продуктов в категории "Electronics".
2. Выведи в консоль все продукты, цена которых больше 100, в формате "Product Name costs Price". 
Например: "Laptop costs 1500".
3. Создай новый массив, состоящий только из продуктов, цена которых меньше 50, и выведи его.
4. Найди и выведи в консоль самый дорогой продукт в категории "Clothing"*/


const products = [
    { name: "Laptop", price: 1500, category: "Electronics" },
    { name: "Phone", price: 800, category: "Electronics" },
    { name: "Shirt", price: 30, category: "Clothing" },
    { name: "Book", price: 20, category: "Books" },
    { name: "TV", price: 1200, category: "Electronics" },
    { name: "Jacket", price: 150, category: "Clothing" },
    { name: "Pen", price: 2, category: "Stationery" }
];
/* Ищем суммарную стоимость всех продуктов категории "Electronics". 
Используем функцию forEach для прохождения по массиву объектов и суммируем цены продуктов в категории "Electronics".*/

let sum = 0
const collectSum = (product) => {
    if (product.category === "Electronics") {
        sum = sum + product.price
    }
}
products.forEach(collectSum)
console.log(sum)

/* Выводим в консоль все продукты, цена которых больше 100, в формате "Product Name costs Price". 
Например: "Laptop costs 1500". */

const Price = (p) => {
    if (p.price > 100) {
        console.log(p.name + " costs " + p.price)
    }
}
products.forEach(Price)

/* Создай новый массив, состоящий только из продуктов, цена которых меньше 50, и выведи его.*/

const z = []
const List = (p) => {
    if (p.price < 50) {
        z.push(p)
    }
}
products.forEach(List)
console.log(z)

/*Найди и выведи в консоль самый дорогой продукт в категории "Clothing"*/


/*const productos = [56, 1500, 66];

const overrPrice = Math.max.apply(null, productos)
console.log(overrPrice)*/

/*const maxxValue = (product) => {
    if (product.category === "Clothing") {
        const overPrice = Math.max(product.price)
        console.log(overPrice)
    }
}
products.forEach(maxxValue)*/

let maxprice = 0
let maxname = null
products.forEach(anyproduct => {
    if (anyproduct.category === "Clothing") {
        if (anyproduct.price > maxprice) {
            maxprice = anyproduct.price
            maxname = anyproduct.name
        }
    }
})
console.log(maxname + " costs " + maxprice)


/*const animals = [
    { type: "cat", name: "Fosya" },
    { type: "dog", name: "Bars" },
    { type: "dog", name: "Mysia" }

];
const sayHallo = (animal, i) => {
    console.log("Hallo", animal.name, i)

}
//console.log(animals[0].name)

animals.forEach(sayHallo)

animals.push({ type: "bird", name: "Katya" })
const names = animals.map((animal) => {
    return animal.name
})
console.log(names)
console.log(animals)


/*colback(animals[0], 0)
colback(animals[1], 1)*/

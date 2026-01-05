const user = {
    name: "Sarah",
    logName: function () {
        console.log(`Name: ${this.name}`);
    },
    nestedObject: {
        name: "Mike",
        showName: function () {
            console.log(`Nested Name: ${this.name}`);

            const innerFunction = () => {
                console.log(`Inner Arrow Name: ${this.name}`);
            };

            function innerFunction2() {
                console.log(`Inner Regular Name: ${this.name}`);
            }

            innerFunction();
            innerFunction2();
        }
    }
};

user.logName();
user.nestedObject.showName();
// Вопрос 1: Что выведет в консоль?
// Вопросы 2, 3 и 4: Что выведет каждый console.log?
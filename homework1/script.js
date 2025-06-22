// Создание объекта person1
let person1 = { name: "Alice", age: 25 };

// Глубокая копия объекта с добавлением свойства favoriteColor
let person2 = JSON.parse(JSON.stringify(person1));
person2.favoriteColor = "blue";

// Проверка, что оригинал не изменился
console.log("Original:", person1);
console.log("Copy:", person2);

/*
6. Когда использовать объект?
🟢 Используй объект, когда нужно хранить **связанные по смыслу данные в формате ключ-значение**.
Пример: информация о человеке, товаре, пользователе и т.д.

7. Когда использовать массив?
🟢 Используй массив, когда нужно хранить **упорядоченный список элементов**, например: список имён, чисел, задач и т.п.
*/

// 8. Функция с двумя аргументами
function introduce(name, favoriteHobby) {
    console.log(`My name is ${name} and my favorite hobby is ${favoriteHobby}`);
}

// Пример вызова функции
introduce("Alice", "painting");
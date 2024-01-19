//Feladat 1.
let car = ['Ford', 'Mustang', 2022, 'blue'];
    
let [brand, model, year, color] = car;


console.log(brand);
console.log(model);
console.log(year);
console.log(color);

/*Kérdés:
Milyen változóneveket lehet használni tömb esetén destrukturálás esetén?
A változók sorrendje fontos-e?

-- Bármi lehet változónév, számít a sorrend


Feladat 2 */

let book = {
title: 'JavaScript: The Good Parts',
author: 'Douglas Crockford',
publicationYear: 2008,
language: 'English'
};

let { bookTitle, bookAuthor, publicationYear, language } = book;

console.log(bookTitle); 
console.log(bookAuthor); 
console.log(publicationYear); 
console.log(language);

/*Kérdés:
Milyen változóneveket lehet használni objektum esetén destrukturálás esetén?
A változók sorrendje fontos-e?

-- Bármi lehet változónév, számít a sorrend

Feladat 3 */

function printStudentInfo({name, age, grade, subjects}) {
    console.log(`${name} ${age} éves, ${grade} osztályos, tantárgyai ${subjects}`);
}

let student = {
name: 'John Doe',
age: 20,
grade: 'B',
subjects: ['Math', 'English', 'History']
};

printStudentInfo(student);

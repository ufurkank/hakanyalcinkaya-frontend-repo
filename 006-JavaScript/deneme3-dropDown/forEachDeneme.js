
////----------------------------------------------------////

// forEach deneme1 Object
const ufkObject = {
    key1: "value1",
    key2: "value2"
}

Object.keys(ufkObject).forEach(element => {
    console.log(element)
});

// forEach deneme2 Array
const ufkArray = ["Ali", "Veli", 4950]

ufkArray.forEach((key) => console.log(key))

////----------------------------------------------------////

// Alıştırma GPT-2
// Bir dizideki sayıları toplayarak sonucu konsola yazdırın.
const numbers = [10, 20, 30, 40];

let total =  0
numbers.forEach ((number) => {
    total += number
})
console.log(`DENEME BAŞLADI`)
// console.log(`DENEME BİTTİ`)
console.log("Alıştırma GPT-2: Sayıların toplamları=", total)

// Alıştırma GPT-3
// Bir dizideki her öğenin sonuna bir karakter ekleyerek yeni bir dizi oluşturun.

const animals = ["Kedi", "Köpek", "Kuş"];
const modifiedAnimals = [];

animals.forEach( (animal)=> {
    modifiedAnimals.push(`${animal} bir hayvandır.`)
})
console.log("Alıştırma GPT-3 Yeni Dizi:", modifiedAnimals)

// Alıştırma GPT-4
// Bir dizideki çift sayıları konsola yazdırın.

const numbers4 = [1, 2, 3, 4, 5, 6];

numbers4.forEach((number4)=> {
    if ( number4 % 2 === 0)
        console.log ( "Alıştırma GPT-4: Sadece çift sayılar", number4)
})

// Alıştırma GPT-5
// Bir dizideki her kelimenin uzunluğunu konsola yazdırın.

const words = ["JavaScript", "React", "CSS", "HTML"];

words.forEach( (word) => {
    console.log("Alıştırma GPT-5: Uzunluklar:", word.length)
})
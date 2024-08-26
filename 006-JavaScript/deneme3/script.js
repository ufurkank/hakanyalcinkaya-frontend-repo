const button = document.querySelectorAll(".buttonForEach")
button.forEach(menuItem => {
    menuItem.addEventListener("click", () => {
        const buttonElement = menuItem.querySelector(".dropForEach")
        buttonElement.classList.toggle("d-none")
    })
})

/*

button.addEventListener ("click", () => {
    const buttonElement = document.querySelector (".dropForEach")
    buttonElement.classList.toggle ("d-none")
})

*/






//----------------------------------------------------//

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
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
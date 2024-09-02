const button = document.querySelector ("#navButton")
button.addEventListener ("click", () => {
    const buttonElement = document.querySelector ("#dropdown")
    buttonElement.classList.toggle ("d-none")
})
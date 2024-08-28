const button = document.querySelectorAll(".buttonForEach")
button.forEach(menuItem => {
    menuItem.addEventListener("click", () => {
        const buttonElement = menuItem.querySelector(".dropForEach")
        buttonElement.classList.toggle("d-none")
    })
})
const buttons = document.querySelectorAll(".buttonForEach");

buttons.forEach(menuItem => {
    menuItem.addEventListener("click", (event) => {
        event.stopPropagation(); // Tıklama olayının diğer eventlere yayılmasını engeller

        // Tıklanan menüyü bul
        const buttonElement = menuItem.querySelector(".dropForEach");

        // Diğer tüm menüleri kapat
        buttons.forEach(item => {
            const otherDropdown = item.querySelector(".dropForEach");
            if (otherDropdown !== buttonElement) {
                otherDropdown.classList.add("d-none");
            }
        });

        // Tıklanan menüyü aç/kapat
        buttonElement.classList.toggle("d-none");
    });
});

document.body.addEventListener("click", () => {
    buttons.forEach(menuItem => {
        const buttonElement = menuItem.querySelector(".dropForEach");
        buttonElement.classList.add("d-none"); // Tüm menüleri kapat
    });
});


/*
/* KOPYA ÇEKİLEN KISIM

button.addEventListener ("click", () => {
    const buttonElement = document.querySelector (".dropForEach")

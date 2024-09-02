const buttons = document.querySelectorAll(".buttonForEach");

buttons.forEach(menuItem => {
    menuItem.addEventListener("click", (event) => {
        event.stopPropagation(); // Tıklama olayının diğer eventlere yayılmasını engeller

        // Diğer tüm menüleri kapat
        document.querySelectorAll(".dropForEach").forEach(dropdown => {
            if (dropdown !== menuItem.querySelector(".dropForEach")) {
                dropdown.classList.add("d-none");
            }
        });

        // Tıklanan menüyü aç/kapat
        menuItem.querySelector(".dropForEach").classList.toggle("d-none");
    });
});

document.body.addEventListener("click", () => {
    buttons.forEach(menuItem => {
        const buttonElement = menuItem.querySelector(".dropForEach");
        buttonElement.classList.add("d-none"); // Tüm menüleri kapat
    });
});


/* KOPYA ÇEKİLEN KISIM

button.addEventListener ("click", () => {
    const buttonElement = document.querySelector (".dropForEach")
    buttonElement.classList.toggle ("d-none")
})

*/
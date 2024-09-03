// Bölüm Sonu Çalışması 1: Form Yapısının Dinamik Hale Getirilmesi

const hexInputContainer = document.querySelector("#hexInputContainer")
const hexColorForm = document.querySelector("#hexColorForm")
const addNew = document.querySelector("#addNew")
let counter = 1

addNew.addEventListener("click", () => {
    counter += 1
    hexInputContainer.append(newHexColorInput(counter))
})

function newHexColorInput(itemCount) {
    const newDivElement = document.createElement('div')

    newDivElement.classList.add("col-sm")

    newDivElement.innerHTML = `
<label for="colorInput-${itemCount}" class="form-label">HEX Color</label>
<input 
type="text" 
minlength="7" maxlength="7"
class="form-control" 
id="colorInput-${itemCount}" 
name="color-${itemCount}"
>
`
    return newDivElement
}

hexInputContainer.append(newHexColorInput(counter))

hexColorForm.addEventListener("submit", (event) => {
    event.preventDefault()

    let localStorageColors = localStorage.getItem("colors") ? JSON.parse(localStorage.getItem("colors")) : []

    let colors = []
    Array.from(event.target.elements).forEach(item => {
        if (item.type === "text")
            colors.push(item.value)
    })

    localStorageColors.push(colors)
    colorCards.append(addColorPalette(colors)) // append edildi

    localStorage.setItem("colors", JSON.stringify(localStorageColors))
    hexColorForm.reset()
})

// Buraya kadar localStorage'a attık. 

const colorCards = document.querySelector("#colorCards")

if (localStorageColors.length) {
    localStorageColors.forEach (colors => {
        colorCards.append ( addColorPalette(colors) )
    })
}

function addColorPalette(items) {
    const rowElement = document.createElement("div")
    rowElement.classList.add("row", "gap-3", "my-3")

    items.forEach(item => {
        const cardItem = document.createElement("div")
        cardItem.classList.add("col-sm", "card", "colorCard")
        cardItem.style.backgroundColor = item

        // Burada event listener ekliyoruz
        cardItem.addEventListener("click", () => {
            navigator.clipboard.writeText(cardItem.style.backgroundColor)
            alert(`Renk Kopyalandı`)
        })

        rowElement.append(cardItem)
    })

    return rowElement
}
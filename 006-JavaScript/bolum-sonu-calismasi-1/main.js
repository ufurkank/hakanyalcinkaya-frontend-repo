// Bölüm Sonu Çalışması 1: Form Yapısının Dinamik Hale Getirilmesi

const hexInputContainer = document.querySelector("#hexInputContainer")
const hexColorForm = document.querySelector("#hexColorForm")
const addNew = document.querySelector("#addNew")
let counter = 1

addNew.addEventListener("click", () => {
    counter += 1
    hexInputContainer.append( newHexColorInput(counter) )
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

hexColorForm.addEventListener("submit", event => {
    event.preventDefault()
})


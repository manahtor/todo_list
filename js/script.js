const list = document.querySelector('#list');
list.addEventListener('click', event => event.target.classList.toggle("checked"));

console.log(list.children.length );

for (let i = list.children.length - 1; i > -1 ; i--){
    const item_eski = list.children[i];
    newElement(item_eski.innerHTML)
    item_eski.remove()
}

function newElement(oge=NaN) {
    let text;

    if (oge){
        text = oge;
    } else {
        const textDOM = document.querySelector("#task")
        text = textDOM.value.trim(" ")
        textDOM.value = "";
    }
    
    // Boş karakter eklemeyi engelle
    if(text) {
        const oge = document.createElement("li")
        oge.innerHTML = `<button type="button" class="delete" onclick=removeElement(event)>x</button> ${text} `
        list.appendChild(oge)

        // oge.addEventListener("click", itemChecked)
        // success id'li Toast mesajını gösterir 
        $('.success').toast('show')
    } else {
        // error id'li Toast mesajını gösterir 
        $('.error').toast('show')
    }
}

function removeElement(event) {
    event.target.parentElement.remove()
}

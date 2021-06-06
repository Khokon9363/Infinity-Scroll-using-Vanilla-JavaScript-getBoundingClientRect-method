document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

/*
    Infinity Scrolling using Vanilla JavaScript's build in method element.getBoundingClientRect() .
    element.getBoundingClientRect() is used to know the current possition of an element
*/

const wrapper = document.querySelector('.wrapper')
let postId = 1

document.addEventListener('scroll', async function (){
    if(!touchLastItem(getElements()[getElements().length - 1])) return

    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    const result = await res.json()

        for (let i = 0; i < result.length; i++) {
            wrapper.innerHTML += `<h1>${result[i].name}</h1>`
        }
        postId++
})

function getElements() {
    return document.querySelectorAll('h1')
}

function touchLastItem(el) {
    var rect = el.getBoundingClientRect()
    return rect.bottom > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight)
}
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    let firstItem = items[0]
    items[0].remove()
    document.querySelector('.slide').appendChild(firstItem)
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    let lastItem = items[items.length - 1]
    items[items.length - 1].remove()
    document.querySelector('.slide').prepend(lastItem)
})
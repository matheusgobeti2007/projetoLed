document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click',() => {
        fetch(`/led?turnTo=${button.id}`)
        document.body.className = button.id
    })
})
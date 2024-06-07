document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click0',() => {
        fetch(`/led?turnTo=${button.id}`)
        document.body.className = button.id
    })
})
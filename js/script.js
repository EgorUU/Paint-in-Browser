const canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
const choice = document.querySelectorAll('.choices>div')
let color = ''

choice.forEach((c) => {
    c.addEventListener('click', () => {
        choice.forEach((c) => {
            c.classList.remove('active')
        })
        c.classList.add('active')
        if (getComputedStyle(c).backgroundColor == 'rgb(255, 255, 255)') {
            ctx.lineWidth = 20 * 2;
        }
        else {
            ctx.lineWidth = 10 * 2;
        }
        color = getComputedStyle(c).backgroundColor
        ctx.fillStyle = color
        ctx.strokeStyle = color
        ctx.beginPath()
    })
})

canvas.width = window.innerWidth
canvas.height = window.innerHeight - 30
let draw = false
ctx.lineWidth = 10 * 2;
canvas.addEventListener('mousemove', (e) => {
    if(draw) {
        ctx.lineTo(e.clientX, e.clientY - 34)
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(e.clientX, e.clientY - 34, 10,0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(e.clientX, e.clientY - 34)
    }
})
canvas.addEventListener('mousedown', (e) => {
    draw = true
    console.log(draw)
})
canvas.addEventListener('mouseup', () => {
    draw = false
    console.log(draw)
    ctx.beginPath()
})
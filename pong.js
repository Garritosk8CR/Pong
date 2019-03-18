const canvas = document.getElementById('pong')
const context = canvas.getContext('2d')
 
const black = '#000'
context.fillStyle = black;

context.fillRect(0, 0, canvas.clientWidth, canvas.height)
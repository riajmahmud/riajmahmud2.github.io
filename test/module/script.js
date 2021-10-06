import { sum, difference, product, quotient } from './functions.js'

const x = 10
const y = 5

document.getElementById('x').textContent = x
document.getElementById('y').textContent = y

document.getElementById('addition').textContent = sum(x, y)
document.getElementById('subtraction').textContent = difference(x, y)
document.getElementById('multiplication').textContent = product(x, y)
document.getElementById('division').textContent = quotient(x, y)
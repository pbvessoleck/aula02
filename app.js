'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')

function mudarCor () {
    forma1.classList.toggle('vermelho')
}

function mudarForma () {
    forma2.classList.toggle('circulo')
}

function mudarImagem () {
    forma3.classList.toggle('imagem')
}

function girar () {
    forma4.classList.toggle('girar')
}

function desaparecer () {
    forma5.classList.toggle('desaparecer')
}

function aumentar () {
    forma6.classList.toggle('aumentar')
}

function deslizar () {
    forma7.classList.toggle('deslizar')
}

forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', mudarImagem)
forma4.addEventListener('click', girar)
forma5.addEventListener('click', desaparecer)
forma6.addEventListener('click', aumentar)
forma7.addEventListener('click', deslizar)
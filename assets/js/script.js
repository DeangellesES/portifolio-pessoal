// Funcão para fazer letras do titulo uma por uma
function escrevendLetra() {
    function ativaLetra(elemento) {
        const arrTexto = elemento.innerHTML.split('')
        elemento.innerHTML = ''
        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra
            }, 75 * i)
        });
    }

    const titulo = document.querySelector('.digitando')
    ativaLetra(titulo)
}

escrevendLetra()

function sobreMim() {
    const divExperiencia = document.querySelectorAll('.experience_content div')
    const liExperiencia = document.querySelectorAll('.experience_content ul li')
    const divEducation = document.querySelectorAll('.education_content div')
    const liEducation = document.querySelectorAll('.education_content ul li')

    divExperiencia[0].classList.add('ativo')
    liExperiencia[0].classList.add('ativo')
    divEducation[0].classList.add('ativo')
    liEducation[0].classList.add('ativo')

    function slideShow(index) {
        divExperiencia.forEach((div) => {
            div.classList.remove('ativo')
        })
        liExperiencia.forEach((botao) => {
            botao.classList.remove('ativo')
        })
        divExperiencia[index].classList.add('ativo')
        liExperiencia[index].classList.add('ativo')
    }

    function slideShow2(index) {
        divEducation.forEach((div) => {
            div.classList.remove('ativo')
        })
        liEducation.forEach((botao) => {
            botao.classList.remove('ativo')
        })
        divEducation[index].classList.add('ativo')
        liEducation[index].classList.add('ativo')
    }

    liExperiencia.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow(index)
        })
    })

    liEducation.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow2(index)
        })
    })
}

sobreMim()


function MENUCLICK() {
    const menuClick = document.querySelector('header i')
    const nav = document.querySelector('header nav ul')

    menuClick.addEventListener('click', clicou)

    function clicou() {
        nav.classList.toggle("ativo")
    }
}

MENUCLICK()

// SWIPER NOS PROJETOS
const swiper = new Swiper('.swiper', {
    slidesPerView: 6,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

// ESCONDER MENU AO SCROLAR
let hamburguer = document.querySelector(".navegacao-primaria")

window.onscroll = () => {
    hamburguer.classList.remove('ativo')
}

// ESCONDER SETA COM INTERVAL E FAZER APARECER COM SCROLL
setInterval(setaSubir, 4500)

let setaCima = document.querySelector('.seta-subir')

function setaSubir() {
    setaCima.classList.add('esconder')
}

window.onscroll = () => {
    setaCima.classList.remove('esconder')
}

// CHAMAR MODAL E ESCONDER
let verModalCorpo = document.querySelector("#modal-zero")
let verModalBox = document.querySelector(".menu-modal")
let abrirModal = document.querySelector(".modal-projeto")
let fechar = document.querySelector("#fechar")

abrirModal.addEventListener('click', ()=> {
    verModalCorpo.style.display = 'flex'
})
fechar.addEventListener('click', ()=> {
    verModalCorpo.style.display = 'none'
})

let verModalCorpo1 = document.querySelector("#modal-um")
let verModalBox1 = document.querySelector("#menu-modal-um")
let abrirModal1 = document.querySelector("#modal-projeto-um")
let fechar1 = document.querySelector("#fechar-um")

abrirModal1.addEventListener('click', ()=> {
    verModalCorpo1.style.display = 'flex'
})
fechar1.addEventListener('click', ()=> {
    verModalCorpo1.style.display = 'none'
})


// TROCAR COR DE FUNDO 
// let mudarCorFundo = document.querySelector('.trocar')
// let cabecalho = document.querySelector('.cabecalho')
// let sobre = document.querySelector('.sobre')
// let curriculo = document.querySelector('.secao-curriculo')
// let especialidades = document.querySelector('.especialidades')
// let reusmo = document.querySelector('.my_resume')
// let portifolio = document.querySelector('.portifolio')
// let rodape = document.querySelector('.footer')

// mudarCorFundo.addEventListener('click', () => {
//     cabecalho.style.backgroundColor = 'gray'
//     curriculo.style.backgroundColor = 'white'
//     curriculo.style.color = 'black'
//     sobre.style.backgroundColor = 'gray'
//     especialidades.style.backgroundColor = 'white'
//     reusmo.style.backgroundColor = 'gray'
//     portifolio.style.backgroundColor = 'white'
//     rodape.style.backgroundColor = 'white'
// })
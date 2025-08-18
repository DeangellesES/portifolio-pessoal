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

//CLICAR MENU HAMBURGUER
function MENUCLICK() {
    const menuClick = document.querySelector('header .esconder-bars')
    const nav = document.querySelector('header .navegacao ul')

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
let hamburguer = document.querySelector(".navegacao ul")

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

// CHAMAR MODAL E ESCONDER // CHAMAR MODAL E ESCONDER // CHAMAR MODAL E ESCONDER
// MODAL 0
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

// MODAL 1
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

// MODAL 2
let verModalCorpo2 = document.querySelector("#modal-dois")
let verModalBox2 = document.querySelector("#menu-modal-dois")
let abrirModal2 = document.querySelector("#modal-projeto-dois")
let fechar2 = document.querySelector("#fechar-dois")

abrirModal2.addEventListener('click', ()=> {
    verModalCorpo2.style.display = 'flex'
})
fechar2.addEventListener('click', ()=> {
    verModalCorpo2.style.display = 'none'
})

// MODAL 3
let verModalCorpo3 = document.querySelector("#modal-tres")
let verModalBox3 = document.querySelector("#menu-modal-tres")
let abrirModal3 = document.querySelector("#modal-projeto-tres")
let fechar3 = document.querySelector("#fechar-tres")

abrirModal3.addEventListener('click', ()=> {
    verModalCorpo3.style.display = 'flex'
})
fechar3.addEventListener('click', ()=> {
    verModalCorpo3.style.display = 'none'
})

// MODAL 4
let verModalCorpo4 = document.querySelector("#modal-quatro")
let verModalBox4 = document.querySelector("#menu-modal-quatro")
let abrirModal4 = document.querySelector("#modal-projeto-quatro")
let fechar4 = document.querySelector("#fechar-quatro")

abrirModal4.addEventListener('click', ()=> {
    verModalCorpo4.style.display = 'flex'
})
fechar4.addEventListener('click', ()=> {
    verModalCorpo4.style.display = 'none'
})

// MODAL 5
let verModalCorpo5 = document.querySelector("#modal-cinco")
let verModalBox5 = document.querySelector("#menu-modal-cinco")
let abrirModal5 = document.querySelector("#modal-projeto-cinco")
let fechar5 = document.querySelector("#fechar-cinco")

abrirModal5.addEventListener('click', ()=> {
    verModalCorpo5.style.display = 'flex'
})
fechar5.addEventListener('click', ()=> {
    verModalCorpo5.style.display = 'none'
})

// MODAL 6
let verModalCorpo6 = document.querySelector("#modal-seis")
let verModalBox6 = document.querySelector("#menu-modal-seis")
let abrirModal6 = document.querySelector("#modal-projeto-seis")
let fechar6 = document.querySelector("#fechar-seis")

abrirModal6.addEventListener('click', ()=> {
    verModalCorpo6.style.display = 'flex'
})
fechar6.addEventListener('click', ()=> {
    verModalCorpo6.style.display = 'none'
})

// MODAL 7
let verModalCorpo7 = document.querySelector("#modal-sete")
let verModalBox7 = document.querySelector("#menu-modal-sete")
let abrirModal7 = document.querySelector("#modal-projeto-sete")
let fechar7 = document.querySelector("#fechar-sete")

abrirModal7.addEventListener('click', ()=> {
    verModalCorpo7.style.display = 'flex'
})
fechar7.addEventListener('click', ()=> {
    verModalCorpo7.style.display = 'none'
})

// MODAL 8
let verModalCorpo8 = document.querySelector("#modal-oito")
let verModalBox8 = document.querySelector("#menu-modal-oito")
let abrirModal8 = document.querySelector("#modal-projeto-oito")
let fechar8 = document.querySelector("#fechar-oito")

abrirModal8.addEventListener('click', ()=> {
    verModalCorpo8.style.display = 'flex'
})
fechar8.addEventListener('click', ()=> {
    verModalCorpo8.style.display = 'none'
})

// MODAL 9
let verModalCorpo9 = document.querySelector("#modal-nove")
let verModalBox9 = document.querySelector("#menu-modal-nove")
let abrirModal9 = document.querySelector("#modal-projeto-nove")
let fechar9 = document.querySelector("#fechar-nove")

abrirModal9.addEventListener('click', ()=> {
    verModalCorpo9.style.display = 'flex'
})
fechar9.addEventListener('click', ()=> {
    verModalCorpo9.style.display = 'none'
})

// MODAL 10
let verModalCorpo10 = document.querySelector("#modal-dez")
let verModalBox10 = document.querySelector("#menu-modal-dez")
let abrirModal10 = document.querySelector("#modal-projeto-dez")
let fechar10 = document.querySelector("#fechar-dez")

abrirModal10.addEventListener('click', ()=> {
    verModalCorpo10.style.display = 'flex'
})
fechar10.addEventListener('click', ()=> {
    verModalCorpo10.style.display = 'none'
})

// MODAL 11
let verModalCorpo11 = document.querySelector("#modal-onze")
let verModalBox11 = document.querySelector("#menu-modal-onze")
let abrirModal11 = document.querySelector("#modal-projeto-onze")
let fechar11 = document.querySelector("#fechar-onze")

abrirModal11.addEventListener('click', ()=> {
    verModalCorpo11.style.display = 'flex'
})
fechar10.addEventListener('click', ()=> {
    verModalCorpo11.style.display = 'none'
})

// MODAL 12
let verModalCorpo12 = document.querySelector("#modal-doze")
let verModalBox12 = document.querySelector("#menu-modal-doze")
let abrirModal12 = document.querySelector("#modal-projeto-doze")
let fechar12 = document.querySelector("#fechar-doze")

abrirModal12.addEventListener('click', ()=> {
    verModalCorpo12.style.display = 'flex'
})
fechar12.addEventListener('click', ()=> {
    verModalCorpo12.style.display = 'none'
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
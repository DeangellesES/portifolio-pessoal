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
// 1 получить все переменные
// 2 при нажатии на кнопку открытия навешивать класс у модал
// создать фукнцию закрытия
// создать функцию открытия
// 3 при нажатии на кнопку закрытия. закрыть модалку
// 4 если клик не по modal-content то закрываем модалку
// идея - создать табы
const openButton = document.querySelector('#open-btn')
const modal = document.querySelector('#modal')
const closeButton = modal.querySelector('#close-btn')
const modalContent = modal.querySelector('#modal-content')
const modalActiveClass = 'active'

const initialState = {
    isModalOpened: false,
}

let { isModalOpened } = initialState

const openModal = () => {
    document.body.appendChild(modal)
    modal.classList.add(modalActiveClass)
    isModalOpened = true
}

const closeModal = () => {
    if (isModalOpened) {
        modal.classList.remove(modalActiveClass)
        document.body.removeChild(modal)
        isModalOpened = false
    } else return
}

modal.addEventListener('click', (event: Event) => {
    const target = event.target as Element
    if (target !== modalContent) closeModal()
})
document.addEventListener('keyup', (e: KeyboardEvent) => {
    if (isModalOpened) {
        if (e.code === 'Escape') closeModal()
    } else return
})

openButton.addEventListener('click', openModal)
closeButton.addEventListener('click', closeModal)

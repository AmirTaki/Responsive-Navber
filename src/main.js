const toggleBtn = document.querySelector(".toggle_btn")
const toggleBtnIcon = document.querySelector(".toggle_btn i")
const dropDwonMenu = document.querySelector(".dropdown_menu")

toggleBtn.addEventListener('click', ()=>{
    dropDwonMenu.classList.toggle('open')
    const isOpen = dropDwonMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
})
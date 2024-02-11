const menuList = document.querySelector(".menuList")
const overlay = document.querySelector(".overlay")
const bars = document.querySelector(".headerLeft i")
const close = document.querySelector(".menuList i")


bars.addEventListener("click", () => {
    overlay.classList.add("active")
    menuList.classList.add("active")
})
overlay.addEventListener("click", () => {
    overlay.classList.remove("active")
    menuList.classList.remove("active")
})
close.addEventListener("click", () => {
    overlay.classList.remove("active")
    menuList.classList.remove("active")
})
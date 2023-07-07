const nav = document.querySelector(".header__navigation")
const navBtn = document.querySelector(".header__nav-toggle-btn")

navBtn.addEventListener("click", () => {
  const visibility = nav.getAttribute('data-visible')
  
  if (visibility === "false") {
    nav.setAttribute('data-visible', "true")
    navBtn.setAttribute('aria-expanded', "true")
  } else if (visibility === "true") {
    nav.setAttribute('data-visible', "false")
    navBtn.setAttribute('aria-expanded', "false")
  }
})
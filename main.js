window.addEventListener('scroll', onScroll)
const navigation = document.querySelector('#navigation');

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight /2

  const selectionTop = section.offsetTop
  const selectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= selectionTop

  const sectionEndsAt = selectionTop + selectionHeight

  const sectionEndsPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndsPassedTargetLine

  const sectionID = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionID}]`)

  menuElement.classList.remove('active')

  if (sectionBoundaries){
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card
  #about, 
  #about header, 
  #about .content`)

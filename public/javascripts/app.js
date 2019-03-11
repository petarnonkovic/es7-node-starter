const toggleButton = document.getElementById('toggleButton')
const navMenu = document.getElementById('mainNav')
const closeButton = document.querySelector('.notification .delete')

// register events on page load
document.addEventListener('DOMContentLoaded', function(e) {

    /* Toggle Navigation */
    toggleButton.addEventListener('click', e => {
        toggleNavBar(toggleButton, navMenu)
    })

    // FadeOut Flash Notification
    if (closeButton) {
        const alert = closeButton.parentNode
        const fadeOutTimer = setTimeout(() => {
            fadeElementOut(alert, 'fade-out')
        }, 3000)
        closeButton.addEventListener('click', e => {
            fadeElementOut(alert, 'fade-out')
            clearTimeout(fadeOutTimer)
        })
    }

})

/**
 * Toggle Navigation NavMenu
 * @param {toggler} -- toggle button
 * @param {menu} -- menu to toggle
 */
function toggleNavBar(toggler, menu) {
    toggler.classList.toggle('is-active')
    menu.classList.toggle('is-active')
}

/**
 *  Fade Element Out
 *  @param {element} -- Element to act on
 *  @param {className} -- fade out class name
 */
function fadeElementOut(element, className) {
    element.classList.add(className)
    element.addEventListener('animationend', e => {
        element.style.display = 'none'
    })
}

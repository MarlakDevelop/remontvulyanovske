function initMobileNavbar (navbar, {buttonOn, buttonOff}) {
    buttonOn.onclick = () => {
        navbar.classList.add('show')
    }

    buttonOff.onclick = () => {
        navbar.classList.remove('show')
    }
}


function initStickyNavigation() {
    const intersectionChecker = document.querySelector('[data-for="#top-content"][data-detector="intersecting"]')
    const positionCheckers = document.querySelectorAll('[data-for="#top-content"][data-detector="position"]')
    const topContent = document.querySelector('#top-content')
    const options = {
        threshold: 1
    }

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                topContent.style.position = 'static'
                positionCheckers.forEach(checker => {
                    checker.style.height = '0'
                })
            } else {
                topContent.style.position = 'fixed'
                positionCheckers.forEach(checker => {
                    checker.style.height = '50px'
                })
            }
        });
    }

    let observer = new IntersectionObserver(callback, options)
    observer.observe(intersectionChecker)
}

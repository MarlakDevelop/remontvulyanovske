initAnchors('a.link[href^="#"]')
initStickyNavigation()
initMobileNavbar(
    document.getElementById('mobile-navigation'),
    {
        buttonOn: document.getElementById('mobile-navbar-on-button'),
        buttonOff: document.getElementById('mobile-navbar-off-button')
    }
)
initPromotionCounter('#promotion-counter', new Date(2024, 0, 1, 0, 0, 0, 0))
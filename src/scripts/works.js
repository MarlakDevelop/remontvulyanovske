const worksCarousel = new Swiper('#worksCarousel', {
    slidesPerView: "auto",
    centeredSlides: true,
    initialSlide: 2,
    navigation: {
        nextEl: '#worksCarousel .swiper-button-next',
        prevEl: '#worksCarousel .swiper-button-prev',
    },
});

document.querySelectorAll('.work').forEach(work => {
    const image = work.querySelector('img')
    work.querySelector('.meta').style.maxWidth = `${image.width}px`
})
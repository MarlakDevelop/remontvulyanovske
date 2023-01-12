function morphByNumber(number, words) {
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

function initPromotionCounter(selector, endDate) {
    const root = document.querySelector(selector)
    const words = {
        days: ['день', 'дня', 'дней'],
        hours: ['час', 'часа', 'часов'],
        minutes: ['минута', 'минуты', 'минут'],
        seconds: ['секунда', 'секунды', 'секунд']
    }
    const calculate = () => {
        const now = new Date()
        const milliseconds = endDate - now
        const days = Math.floor(milliseconds / 24 / 60 / 60 / 1000)
        const hours = Math.floor(milliseconds / 60 / 60 / 1000) % 24
        const minutes = Math.floor(milliseconds / 60 / 1000) % 60
        const seconds = Math.floor(milliseconds / 1000) % 60
        root.innerText = `Осталось - ${days} ${morphByNumber(days, words.days)} ${hours} ${morphByNumber(hours, words.hours)} ${minutes} ${morphByNumber(minutes, words.minutes)} ${seconds} ${morphByNumber(seconds, words.seconds)}`
    }
    calculate()
    setInterval(calculate, 1000)
}

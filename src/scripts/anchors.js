function initAnchors(selector) {
    const links = document.querySelectorAll(selector)
    const hashes = {}
    for (let i = 0; i < links.length; i++) {
        const link = links[i]
        const hash = link.getAttribute('href')
        if (hash in hashes) {
            hashes[hash].links.push(link)
        } else {
            hashes[hash] = {
                links: [link],
                elements: Array.from(document.querySelectorAll(hash))
            }
        }
    }
    // console.log(hashes)

    const options = {
        threshold: Array.from([...Array(101).keys()].map(number => number / 100))
    }

    const callback = (entries, observer) => {
        // console.log(entries)
        // entries.forEach((entry) => {
        //     // Each entry describes an intersection change for one observed
        //     // target element:
        //     //   entry.boundingClientRect
        //     //   entry.intersectionRatio
        //     //   entry.intersectionRect
        //     //   entry.isIntersecting
        //     //   entry.rootBounds
        //     //   entry.target
        //     //   entry.time
        // });
    }

    let observer = new IntersectionObserver(callback, options)
    observer.observe(document.querySelector('#gallery'))
}

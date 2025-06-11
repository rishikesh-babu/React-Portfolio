import ScrollReveal from "scrollreveal"

const srm = ScrollReveal({
    distance: '50px',
    duration: 1000,
    reset: true,
    delay: 500,
    // desktop: false,
    // mobile: true
})

const srd = ScrollReveal({
    distance: '50px',
    duration: 1000,
    reset: true,
    delay: 500,
    // mobile: false,
    // desktop: true,
})

export { srm, srd }
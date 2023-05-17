import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const sectionAnimation = (navElem) => {
    gsap.from(
        navElem, {
            scrollTrigger: {
                trigger: navElem,
                start: "top 80%",
            },
            duration: 1.2,
            y: 15, 
            opacity: 0,
            ease: "power2.out"
        }
    )
}
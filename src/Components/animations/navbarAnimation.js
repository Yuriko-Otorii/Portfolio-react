import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const navbarAnimation = (navElem) => {
    // ScrollTrigger.create({
    //     trigger: {navElem},
    //     start: "top 90%",
    //     end: "top 10%"
    // })

    gsap.fromTo(
        navElem.current,
        {
          duration: 1,
          y: 10, 
          opacity: 0,
          ease: "power2.out"
        },
        {
          duration: 1,
          y: 0, 
          opacity: 1,
          ease: "power2.out",
          ScrollTrigger: {navElem}
        },
      )
}
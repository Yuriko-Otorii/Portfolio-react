import { gsap } from 'gsap'

export const setHeaderAnimation = (
  nameElem,
  occupationElem,
  linketinIcon,
  githubIcon,
  navItem1,
  navItem2,
  navItem3,
  downArrow,
  durationTime
) => {
  
  gsap.fromTo(
    nameElem.current,
    {
      duration: 0.8,
      y: 0,
      opacity: 0,
      ease: 'power2.out',
    },
    {
      y: 15,
      opacity: 1,
      ease: 'power2.out',
    },
    // 0.5,
    // 4.0,
    durationTime
  )
  gsap.fromTo(
    occupationElem.current,
    {
      duration: 0.8,
      y: 0,
      opacity: 0,
      ease: 'power2.out',
    },
    {
      y: 15,
      opacity: 1,
      ease: 'power2.out',
    },
    // 0.6,
    // 4.2,
    (durationTime + 0.2)
  )
  gsap.fromTo(
    linketinIcon.current,
    {
      x: 900,
    },
    {
      x: 0,
      duration: 2,
      ease: 'bounce.out',
    },
    // 0.4,
    // 4.0,
    (durationTime - 0.1)
  )
  gsap.fromTo(
    githubIcon.current,
    {
      x: -900,
    },
    {
      x: 0,
      duration: 2,
      ease: 'bounce.out',
    },
    // 0.4,
    // 4.0,
    (durationTime - 0.1)
  )
  gsap.fromTo(
    navItem1.current,
    {
      duration: 0.8,
      y: 0,
      opacity: 0,
      ease: 'power2.out',
    },
    {
      y: 15,
      opacity: 1,
      ease: 'power2.out',
    },
    // 1.5,
    // 5.1,
    (durationTime + 1.0)

  )
  gsap.fromTo(
    navItem2.current,
    {
      duration: 0.8,
      y: 0,
      opacity: 0,
      ease: 'power2.out',
    },
    {
      y: 15,
      opacity: 1,
      ease: 'power2.out',
    },
    // 1.8,
    // 5.4,
    (durationTime + 1.3)

  )
  gsap.fromTo(
    navItem3.current,
    {
      duration: 0.8,
      y: 0,
      opacity: 0,
      ease: 'power2.out',
    },
    {
      y: 15,
      opacity: 1,
      ease: 'power2.out',
    },
    // 2.1,
    // 5.7,
    (durationTime + 1.6)
  )
  gsap.fromTo(
    downArrow.current,
    {
      duration: 0.8,
      y: 0,
      opacity: 0,
      ease: 'power2.out',
    },
    {
      y: 15,
      opacity: 1,
      ease: 'power2.out',
    },
    // 2.7,
    // 6.3,
    (durationTime + 2.2)
  )
}

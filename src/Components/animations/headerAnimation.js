import { gsap } from 'gsap'

export const setHeaderAnimation = (
  nameElem,
  occupationElem,
  linketinIcon,
  githubIcon,
  navItem1,
  navItem2,
  navItem3,
  downArrow
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
    0.6,
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
    0.4,
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
    0.4,
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
    1.5,
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
    1.8,
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
    2.1,
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
    2.7,
  )
}

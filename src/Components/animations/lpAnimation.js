import { gsap } from 'gsap'

export const setLpAnimation = (lpHeader, nameElem, positionElem, balloonBody, popme) => {
    
  gsap.fromTo(
    lpHeader.current,
    {
      duration: 1.5,
      opacity: 0,
      ease: 'power2.out',
    },
    {
      opacity: 1,
      ease: 'power2.out',
    },
  )
  gsap.fromTo(
    nameElem.current,
    {
      duration: 1,
      y: 15,
      opacity: 0,
      ease: 'power2.out',
    },
    {
      opacity: 1,
      y: 0,
      ease: 'power2.out',
    },
    0.6
  )
  gsap.fromTo(
    positionElem.current,
    {
      duration: 1,
      y: 15,
      opacity: 0,
      ease: 'power2.out',
    },
    {
      opacity: 1,
      y: 0,
      ease: 'power2.out',
    },
    1.0
  )
  gsap.fromTo(
    balloonBody.current,
    {
      duration: 1,
      y: 15,
      opacity: 0,
      ease: 'power2.out',
    },
    {
      opacity: 1,
      y: 0,
      ease: 'power2.out',
    },
    1.6
  )
  gsap.fromTo(
    popme.current,
    {
      duration: 1,
      y: 15,
      opacity: 0,
      ease: 'power2.out',
    },
    {
      opacity: 1,
      y: 0,
      ease: 'power2.out',
    },
    2.0
  )
  
}

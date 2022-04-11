import React, { useEffect,useState } from 'react'

const Nav = () => {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } 
            return () => {
                window.removeEventListener('scroll', () => {
                    handleShow(false)
                })
            }
        })
    })
  return (
    <nav className={`nav-wrp ${show && "changeNav"}`}>
        <img 
        className='netflix-logo'
        src="https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=1" 
        alt="netflix-logo" 
        />
        <img 
        className='netflix-avatar'
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
        alt="Avatar" 
        />


    </nav>
  )
}

export default Nav
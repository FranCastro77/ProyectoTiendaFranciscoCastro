// import React from 'react'

// const Saludos = ({name, lastname, children}) => {
//   return (
//     <>
//      <h1>Saludos a {name} {lastname}</h1>
//      {children}
//     </>
   
//   )
// }

//export default Saludos//



import React from 'react'
import CartWidget from './CartWidget'
import logo from '../assets/images/logo.png'

const NavBar = () => {
  return (
    <header>
      <nav>
      <div className="Logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>Quienes somos</li>
          <li>Como contactarnos</li>
          <li>Nuestras propuestas</li>
          <CartWidget/>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
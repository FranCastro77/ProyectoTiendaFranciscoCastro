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

const NavBar = () => {
  return (
    <header>
      <nav>
        <h1>OKNO Esmaltes</h1>
        <ul>
          <li>Quienes somos</li>
          <li>Como contactarnos</li>
          <li>Dejate tentar</li>
          <CartWidget/>
          <li>Donde encontrarnos</li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
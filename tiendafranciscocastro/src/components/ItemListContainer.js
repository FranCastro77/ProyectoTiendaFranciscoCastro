import React from 'react'

const ItemListContainer = ({product, description, cantidad, children}) => {
  return (

    <main>

        <div className="ListContainer">

           <article>
            
                Codigo:{product} - Descripcion:{description} - Cantidad:{cantidad}
            
            </article> 




        </div>

    </main>

  )
}

export default ItemListContainer
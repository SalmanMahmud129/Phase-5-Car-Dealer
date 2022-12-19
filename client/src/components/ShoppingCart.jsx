import React from 'react'

function ShoppingCart({inCart}) {
  console.log("shopping cart page", inCart)

  const displayItemsInCart = inCart.map(item =>{
    return (
    <li>{item.make},{item.model} , {item.price} </li>
    )
  })
  return (
    <div>
      <header>
        <h1>Your Cart</h1>
      </header>
      <ul>
        {displayItemsInCart}
      </ul>
    </div>
  )
}

export default ShoppingCart
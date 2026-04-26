import { useState } from 'react'
import { pizzaCart } from './pizzas'

const Cart = () => {
  const [cart, setCart] = useState([...pizzaCart])

  const increase = (id) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === id
          ? { ...pizza, count: pizza.count + 1 }
          : pizza
      )
    )
  }

  const decrease = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((pizza) =>
          pizza.id === id
            ? { ...pizza, count: pizza.count - 1 }
            : pizza
        )
        .filter((pizza) => pizza.count > 0)
    )
  }

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0)

  return (
    <main className="cart-container">
      <h2>Detalles del pedido:</h2>

      {cart.map((pizza) => (
        <div key={pizza.id} className="cart-item">
          <div className="cart-item-left">
            <img src={pizza.img} alt={pizza.name} className="cart-img" />
            <span className="cart-name">
              {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
            </span>
          </div>

          <div className="cart-item-right">
            <span className="cart-price">
              ${pizza.price.toLocaleString('es-CL')}
            </span>

            <button className="btn-minus" onClick={() => decrease(pizza.id)}>
              -
            </button>

            <span className="cart-count">{pizza.count}</span>

            <button className="btn-plus" onClick={() => increase(pizza.id)}>
              +
            </button>
          </div>
        </div>
      ))}

      <h2 className="cart-total">
        Total: ${total.toLocaleString('es-CL')}
      </h2>

      <button className="btn-pay">Pagar</button>
    </main>
  )
}

export default Cart
import { useEffect, useState } from 'react'
import { pizzas as pizzasLocal } from './pizzas'

const Pizza = () => {
  const [pizza, setPizza] = useState(null)

  const isGitHub = window.location.hostname === 'sergio-papo.github.io'

  useEffect(() => {
    const obtenerPizza = async () => {
      try {
        if (isGitHub) {
        const pizzaLocal = pizzasLocal.find(p => p.id === 'p001') || pizzasLocal[0]
        setPizza(pizzaLocal)
        } else {
          const res = await fetch('http://localhost:5000/api/pizzas/p001')
          const data = await res.json()
          setPizza(data)
        }
      } catch (error) {
        console.error('Error al obtener la pizza:', error)
      }
    }

    obtenerPizza()
  }, [])

  if (!pizza) {
    return <p>Cargando pizza...</p>
  }

  return (
    <section className="pizza-detail">
      <img
        src={pizza.img}
        alt={pizza.name}
        className="pizza-detail-img"
        onError={(e) => {
          e.target.onerror = null
          e.target.src = "https://via.placeholder.com/400x300?text=Pizza"
        }}
      />

      <div className="pizza-detail-info">
        <h2>Pizza {pizza.name}</h2>
        <p>{pizza.desc}</p>

        <h3>Ingredientes:</h3>
        <ul>
          {pizza.ingredients?.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>

        <h3>Precio: ${pizza.price.toLocaleString('es-CL')}</h3>

        <button>Añadir al carrito 🛒</button>
      </div>
    </section>
  )
}

export default Pizza
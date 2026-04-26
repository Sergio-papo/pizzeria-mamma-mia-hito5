import { useEffect, useState } from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import { pizzas as pizzasLocal } from './pizzas'

const Home = () => {
  const [pizzas, setPizzas] = useState([])

  const isGitHub = window.location.hostname === 'sergio-papo.github.io'

  useEffect(() => {
    const obtenerPizzas = async () => {
      try {
        if (isGitHub) {
          setPizzas(pizzasLocal)
        } else {
          const res = await fetch('http://localhost:5000/api/pizzas')
          const data = await res.json()
          setPizzas(data)
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }

    obtenerPizzas()
  }, [])

  return (
    <>
      <Header />

      <main className="cards-container">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </main>
    </>
  )
}

export default Home
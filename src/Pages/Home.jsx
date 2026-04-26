import { useEffect, useState } from 'react'
import Header from '../Header'
import CardPizza from '../CardPizza'

const Home = () => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    const obtenerPizzas = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/pizzas')
        const data = await res.json()
        setPizzas(data)
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
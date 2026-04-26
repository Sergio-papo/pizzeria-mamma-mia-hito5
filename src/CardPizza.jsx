const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <article className="card-pizza">
      <img 
  src={img} 
  alt={name} 
  className="pizza-img"
  onError={(e) => e.target.src = "https://via.placeholder.com/300x200?text=Pizza"}
/>

      <div className="card-body">
        <h3>Pizza {name}</h3>

        <hr />

        <p className="ingredients-title">Ingredientes:</p>

        <ul className="ingredients-list">
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>

        <hr />

        <h2>Precio: ${price.toLocaleString('es-CL')}</h2>

        <div className="card-buttons">
          <button>Ver más 👀</button>
          <button className="btn-add">Añadir 🛒</button>
        </div>
      </div>
    </article>
  )
}

export default CardPizza
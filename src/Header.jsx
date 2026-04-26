import headerImg from './assets/img/Header.jpg'

const Header = () => {
  return (
    <header
      className="header"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${headerImg})`,
      }}
    >
      <h1>¡Pizzería Mamma Mia!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  )
}

export default Header
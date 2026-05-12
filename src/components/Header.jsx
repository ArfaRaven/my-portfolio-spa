import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="logo">Anastasiia Portfolio</div>

      <nav className="nav">
        <NavLink to="/about">Про мене</NavLink>
        <NavLink to="/my-city">Моє місто</NavLink>
        <NavLink to="/my-future">Кар'єра</NavLink>
      </nav>
    </header>
  )
}

export default Header

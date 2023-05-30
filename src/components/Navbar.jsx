import { Link } from "react-router-dom"

const Navbar = () => {

  return (
    <nav>
      <Link className='like-button' to='/'>Home</Link>
      <Link className='like-button' to='/about'>About</Link>
    </nav>
  )
}

export default Navbar;
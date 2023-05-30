import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>Página About</h1>
      {/* NESTED ROUTES */}
      <p>
        <Link to='/about/1'>About 1</Link>
      </p>
      <p>
        <Link to='/about/2'>About 2</Link>
      </p>
      <p>
        <Link to='/about/3'>About 3</Link>
      </p>
    </div>
  )
}


export default About;
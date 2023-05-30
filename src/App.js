import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header>
        <Link className='like-button' to='/'>Header</Link>
        <Navbar />
      </Header>
      <main>
        <Outlet/>
      </main>
      <Footer>FOOTER</Footer>
    </div>
    
  );
}

export default App;

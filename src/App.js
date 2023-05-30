import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header>
        Header
        <Navbar />
      </Header>
      <Outlet />
      <Footer>FOOTER</Footer>
    </div>
    
  );
}

export default App;

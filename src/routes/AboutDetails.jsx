import { useParams, useNavigate } from 'react-router-dom';

const AboutDetails = () => {
  const { id } = useParams();

  // redirect
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Mensagem enviada');
    return navigate('/');
  }

  return (
    <div>
      <h1>AboutDetails: {id}</h1>
      <button onClick={handleClick}>ENVIAR MENSAGEM</button>
    </div>
  )
}


export default AboutDetails;
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Esta página não existe</h1>
      <Link to='/'>Voltar para a página inicial</Link>
    </div>
  )
}


export default ErrorPage;
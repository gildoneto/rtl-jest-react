import Button from "../components/Button";
import Checkbox from "../components/Checkbox";

const Home = () => {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Você está na Home</h1>
      <Button />
      <Checkbox name="beer" label="Beer" />
    </>
  )
}


export default Home;
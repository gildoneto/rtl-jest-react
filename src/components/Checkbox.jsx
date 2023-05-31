const Checkbox = (props) => {
  return (
    <>
      <input type="checkbox" id={props.name} name={props.name}/>
      <label htmlFor={props.name}>{props.label}</label>
    </>
  )
}

export default Checkbox;
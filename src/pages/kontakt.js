function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  const Kontakt=()=> {
    return (
      <div>
        <Welcome name="World, Kontakt" />
       
      </div>
    );
  }
  export default Kontakt;
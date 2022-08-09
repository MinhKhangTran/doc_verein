function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  const Gallerie=()=> {
    return (
      <div>
        <Welcome name="World, Gallerie" />
       
      </div>
    );
  }
  export default Gallerie;
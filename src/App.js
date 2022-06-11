import './App.css';
function namereturn(user){
return user.firstName + ' ' + user.lastName;
}

 const user = {
  firstName : "Pranjay",
  lastName : "Poddar" 
};

function App() {
  return (
    <>
    <div className="blank">{namereturn(user)}</div>
    <br/>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>

    <h1 className="heading">This Page is Coded By Pranjay Poddar</h1>

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Molestias expedita maiores quidem hic inventore animi odio, ullam neque! Soluta,
      exercitationem officia reprehenderit porro fugit enim sit iusto iure quos veniam?</p>    
    </>
     
  );
}

export default App;

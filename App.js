// import logo from './logo.svg';
import './App.css';

function App() {
 
    const logo = "LOGOBAKERY";
  let links = ["Services", "About", "Contact"];
    return (
       <div className="App">

         <nav className="nav">
           <div>{logo}</div>
           <div className= "list">
             { links.map((e)=>{
                return <Links links = {e} />
             })}
           </div>
            <button className="btn">Contact</button>
          
         </nav>
   
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}
function Links({links}){

  return <div>{links}</div>
}
export default App;

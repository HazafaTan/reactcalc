import './App.css';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';

const Styles = makeStyles({
  root: {
    border: 0,
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(255,105,135, .3)',
    width: 350,
    height: 487,
    padding: '0 5px',
    display: 'block',
    backgroundColor: 'pink',
    font: 'Helvetica',

  },
  display:{
    textAlign: 'right',
    font: 'Helvetica',
  }
});

function App() {

  const classes = Styles();

  const buttonsTag =  ['C', '+/-', '%', '/', '7','8','9', '*','4','5','6','-','1','2','3','+','0','.','=','∞']

  const buttons= [];



  const handleClick = (value) => {
    if(document.getElementById("display").innerHTML ==="0"){
      document.getElementById("display").innerHTML = "";
    }
    if(!isNaN(value) || value === "+" || value ==="-" || value ==="*" || value ==="/" || value === "."||  value === "%") {
      document.getElementById("display").innerHTML += value;
    }else if (value === "="){
      // eslint-disable-next-line
      document.getElementById("display").innerHTML = eval(document.getElementById("display").innerHTML);
    }else if (value === "C"){
      document.getElementById("display").innerHTML = "0";
    }else if (value ==="+/-"){
      document.getElementById("display").innerHTML += "*-1"
      // eslint-disable-next-line
      document.getElementById("display").innerHTML = eval(document.getElementById("display").innerHTML);
    }else if (value === "∞"){
      alert("meow meow")
      document.getElementById("display").innerHTML = "0";
        }else{
      alert("something went wrong");
    }
  };

  for(const[index, value] of buttonsTag.entries()) {
    buttons.push(<Button id={index} value={value} variant="outline" style={{ fontSize: '30px'}} onClick={e => handleClick(e.target.value)}>{ value }</Button>)
  }

  return (
    <div className="App">
      <header className="App-header" >
        <div id = "calc">
          <div className={classes.root}>
            <div className={classes.display}>
            <Container className="output">
              <p1 id="display">0</p1>
            </Container>
            </div>
            <Container maxWidth="sm">
              {buttons}
            </Container>
          </div>
          </div>
      </header>
    </div>
  );
}
export default App;
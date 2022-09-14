import { useState } from "react";

function App() {
 
  const [NumberArry, setNumberArry] = useState([3,9,7,0,4,8,6,2,5,1]);
  const [number, setnumber] = useState([]);

  function getNumber(ev) {
    if (number.length > 3) {
      return
    }
    else{
      // console.log(ev);
    setnumber(number + ev)
    }
    
  }
  const del = () =>{
    setnumber('')

    
  }
  function shuffle() {
    for (let index = 0; index < NumberArry.length; index++) {
      const element = NumberArry[index];
      let template;
      let RandomNo = Math.floor(Math.random() * NumberArry.length);
      let CurrentNo = element

      template = NumberArry[CurrentNo]
      NumberArry[CurrentNo] = NumberArry[RandomNo]
      NumberArry[RandomNo] = template  
    }
    // console.log(NumberArry);
    setNumberArry([...NumberArry])
  }

  return (
    <div className="App">
      <div className="main">
        <div className="frame">
          <div className="mach">POS Machine</div>
          <div className="screen">
            <div className="instruct" id=""> Input your four digit code </div>
            <div className="mainscreen">{number}</div>
          </div>
          <div className="board">
         
          {NumberArry.map((value, index) => {
            return (
               <div key={index} id="box{index}"  onClick={(e) => getNumber(e.target.innerHTML)} className="small">{value}</div>
            )            
          })}         
          <div className="small"><button className="enterbt" onClick={shuffle} >EN </button></div> <div className="small"><button className="enterbt" onClick={del}>Del</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

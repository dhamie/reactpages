import ReactDOM from 'react-dom'
import React, { useState } from 'react';

let num = 0;
/*function Preview(){
    const [count, setCount] = useState(1)
  return (
    <div>
      <p>{count}</p>
      <p onClick = {() => setCount(count * 2)} > plus </p>
     
    </div>
  )
  
}*/



class Preview extends React.Component{
    constructor(props) {
        super(props);
        this.state = { elem: document.getElementById("myAnimation")};
        this.calAdd = this.calAdd.bind(this);  
        this.state = { count: 0, rain : 1};
        
    }
    

    calAdd(){
            this.setState(({count: this.state.count + 1})); 
            /*for(let i = 0; i < this.state.count; i++){
                console.log('hey');
            }*/                 
    }

    moveanim(){
        let pos = 0;
        let id = setInterval(frame, 10);
        function frame() {
            if (pos == 350) {
            clearInterval(id);
            } else {
            pos++; 
            this.state.elem.style.top = pos + 'px'; 
            //elem.style.left = pos + 'px'; 
            }
        }
    }

    componentDidMount(){
        this.TimerID = setInterval(() => this.calAdd(), 1000);
    };

    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    
    render(){
        return <div>
            <p>{this.state.count}</p>
              
            </div>;
    }
    
};

//setInterval(Preview, 1000);
//<button onClick={this.calAdd}>Click Me </button>


/*function calSub(){
  return num--;
}

function eventchecker(props){
    if(props.action == "add"){
      calAdd();
    }else{
      calSub();
    }
}*/

export default Preview
import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
//import Input from '@material-ui/core/Input';
import TextField from'@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
//import { green, purple } from '@material-ui/core/colors';
//import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import BorderColorIcon from '@material-ui/icons/BorderColor';

import "./App.css"



function App() {
  var [sub,setstate] = useState("")
  var [amt,setamt]  = useState("")
  const [item,setitem] = useState([])
  const[status,setstatus] = useState()
  const[id,setid] = useState(0)
  const[click,setclick] = useState("ADD")
  var[total,settotal] = useState(0)
  const[list_amt,setlist] = useState([])
  const[addstatus,setadd] = useState()
  const[addstatus1,setadd1] = useState(false)

  const subject = (event)=>{
    setadd1(false)
    setstate(event.target.value)
  }
  const amount = (event)=>{
    setadd1(false)
    setamt(event.target.value)
  }
  
  const setvalue = ()=>{
    sub = sub.trim()
    amt = amt.trim()
    setadd1(true)

    if(sub.length > 0 & amt.length > 0 ) 
    {
      setadd(true)
      if (status)
      {
      
      let a = parseInt(amt)
      total = total - list_amt[id]
      list_amt[id] = a 
      total = total + a
      let list = sub.concat(" :  $",amt)
      item[id] = list
      setitem(item)
      setstate("")
      setamt("")
      setstatus(!status)
      setclick("ADD")
      settotal(total)
      setlist(list_amt)
      
      }

    else
    {
     
      let a = parseInt(amt)
      list_amt.push(a)
      total = total + a
      let list = sub.concat(" :  $",amt)
      item.push(list)
      settotal(total)
      setlist(list_amt)
      setitem(item)
      setstate("")
      setamt("")
     
      }
    } 
    else{
      setadd(false)
    }   

  }

  const Remove =(i)=>{
    item.splice(i,1)
    total = total - list_amt[i]
    list_amt.splice(i,1)
    setitem(item)
    setlist(list_amt)
    settotal(total)
    setadd1(false)
    setstatus(false)
    setclick("ADD")
  }

  const Edit =(i)=>{
    setstatus(!status)
    setadd1(false)
    setid(i)
    if (status)
    {
      setclick("ADD")
    }
    else{
      setclick("EDIT")
    }
  }

  function Alerts(){
    
    if(addstatus1 === true)
    {
    //setadd1(!addstatus1)
    if(addstatus )
    {
      console.log("alert")
      return(<Alert severity="success">Item has been successfully added</Alert>) 
    }
    if(addstatus === false)
    {
      console.log("alert1")
      return(<Alert severity="error">Please enter the values</Alert>)
    }
  }
  }

  const empty = ()=>{
    setitem([])
    settotal(0)
    setadd1(false)
    setstatus(false)
    setclick("ADD")

  }

  function GetList(){
    var arr=[]
    for(let i=0;i<item.length;i++){
      arr.push(
                <div className=" container margin2 " key ={i}>
                 <Button variant="outlined" className="margin margin1" > <strong>{item[i]}</strong></Button>
                 <Button variant="outlined" color="secondary" onClick = {()=>Remove(i)} ><strong>Remove</strong></Button>
                 <Button variant="outlined" onClick ={()=>Edit(i)} ><strong>Edit</strong></Button>
                 </div>
      )}
  return arr

  }


  return (
  <div className ="App">

   <div className = "nav">
    <Container fluid>
      <Row>
       <Col><h1 style ={{color:'tomato'}}><strong>BUDGET-CALC</strong></h1></Col>
      </Row>
    </Container>
  </div>
          
    <div>{Alerts()}</div>
    <div className="absolute1"><TextField id="standard-basic" label="Subject" onChange={subject} value={sub} /></div>
    <div className="absolute"><TextField id="standard-basic" label="Amount" onChange={amount} value={amt} /></div>
    <br/><br/><br/><br/>
  <Button variant="outlined" color="primary" onClick= {setvalue} > <strong>{click}</strong> </Button>
    <ul className="list-group">{GetList()}</ul>
    <Button variant="outlined"  > <strong>Total: {total}</strong> </Button>
    <br/><br/><br/>
    <Button variant="outlined" color="secondary" onClick = {empty}>Empty</Button>
  </div>
  );
}

export default App;

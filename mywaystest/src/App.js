import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'

const init={
  name:"",
  email:"",
  phone:""
}

function App() {

  const [data,setData]=useState([])
  const [form,setForm]=useState()

  const handleChange=(e)=>{
    const {name,value}=e.target
    setForm({
      ...form,
      [name]:value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(form)
    let arr=data.filter((e)=>form.email===e.email)
    if(arr){
      return alert("User Found ")
    }

    axios.post('https://test-api-v3.myways.ai/user',form).then((res)=>{
      console.log(res.data)
    })
  }

  function getData(){
    axios.get('https://test-api-v3.myways.ai/user').then((res)=>{
      console.log(res.data)
      setData(res.data)
    })
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="App">
      <form onSubmit={((e)=>handleSubmit(e))}>

        <input type="text" name='name' placeholder='Enter name' onChange={handleChange} />
        <input type="email" name='email' placeholder='Enter Email' onChange={handleChange} />
        <input type="text" name='phone' placeholder='Enter Phone' onChange={handleChange} />

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;

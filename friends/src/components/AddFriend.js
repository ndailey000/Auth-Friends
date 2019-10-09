


import React, {Component} from 'react'
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
class AddFriend extends Component{
   constructor(props) {
       super (props)
       this.state ={
           name:'',
           age: '',
           email:''
       }
   }
   changeHandler = (e) => {
       this.setState({[e.target.name]: e.target.value})
   }
   submitHandler = e => {
       e.preventDefault()
       console.log(this.state)
       axios.post('http://localhost:5000/friends', this.state )
       .then (response => {
           console.log(response)
       })
       .catch(error => {
           console.log(error)
       })
   }
   render() {
       const {name, age, email} = this.state
       return (
           <div>
               <form onSubmit={this.submitHandler} >
               <div>
               <input
                   type='text'
                   name='name'
                   placeholder ='Name'
                   value={name}
                   onChange = {this.changeHandler}
                   />
                   </div>
                   <div>
                   <input
                   type='text'
                   name='age'
                   placeholder ='Age'
                   value={age}
                   onChange ={this.changeHandler}
                   />
                   </div>
                   <div>
                   <input
                   type='text'
                   name='height'
                   placeholder ='Email'
                   value={email}
                   onChange ={this.changeHandler}
                   />
                   </div>
                   <button type='submit'> Add Friend! </button>
                   </form>
           </div>
       )
   }
}
export default AddFriend;
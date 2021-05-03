import React,{useEffect, useImperativeHandle, useState} from 'react'
import fire from './fire';


const Blog = ({handleLogout})=>{
    
    const [text,setText] = useState("");
    const [todoList,setTodoList] = useState([]);


   



    const handlechange = (e) =>{
        setText(e.target.value)
    
    }

   const handleSubmit = ()=>{
     
        const todRef = fire.database().ref('Login');
        const tod = {
            text,
            complete:false,
        };
       
        todRef.push(tod);
        alert("Data Added Successfully");
       
    }

    
    useEffect(()=>  {
    
        const todoRef = fire.database().ref('Login');
        todoRef.on('value',(snapshot) => {
            
            const todos = snapshot.val();
            const todoList = [];
            for(let id in todos){
                todoList.push(todos[id]);
            }
              
            setTodoList(todoList)


        });




    },[]);


  
    return (



    <section>


<div>          
        


        <nav>
            <h2>Welcome to the hell</h2>
            <button onClick = {handleLogout} >Logout</button>
        </nav> 

        <div className = "main">
            <input type = "text" onChange = {handlechange} placeholder = "se"></input>
            <button onClick = {handleSubmit}>Submit</button>
        </div>
        
       
          <div>{todoList ? todoList.map((todo)=><h1>{todo.text}</h1>):''}</div>
          
        </div>
         
          </section>
        
    )
}

export default Blog;
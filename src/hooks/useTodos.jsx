import axios from "axios";
import { useEffect, useState } from "react";

export function useTodos(n) {
    const [todos,setTodos] = useState([]);
    const [loading,setLoading] = useState(true);
  
    useEffect(() =>{
      const timer = setInterval(() => {
        axios.get(`https://sum-server.100xdevs.com/todos`)
        .then(res => {
          setTodos(res.data.todos)
          setLoading(false)
        })
      }, n*1000);
      axios.get(`https://sum-server.100xdevs.com/todos`)
      .then(res => {
        setTodos(res.data.todos)
        setLoading(false)
      })
      return () => {
        clearInterval(timer)
      }
    },[n])  
  
    return [todos,loading];
  }
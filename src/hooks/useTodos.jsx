import axios from "axios";
import { useState, useEffect } from "react";

export const useTodos = (n) => {
  const [todos,setTodos] = useState([]);
  const [loading,setLoading] = useState(true);

  const getTodos =  async () => {
    const res = await axios.get('https://sum-server.100xdevs.com/todos')
    setTodos(res.data.todos)
    setLoading(false)
  }

  useEffect(() => {
    getTodos();
    let timer = setInterval(getTodos,n*1000);
    return () => {
      //the cleanup
      clearInterval(timer)
    }
  },[n])

  return [todos,loading]
}
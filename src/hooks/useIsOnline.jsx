import { useEffect, useState } from "react"

export function useIsOnline(){
    const [online,setOnline] = useState(window.navigator.onLine)
  
    useEffect(() => {
      window.addEventListener('online',() => {
        setOnline(true)
      })
      window.addEventListener('offline',() => {
        setOnline(false)
      })
      return () => {
        window.removeEventListener('online',() => {
          setOnline(true)
        })
        window.removeEventListener('offline',() => {
          setOnline(false)
        })
      } 
    },[])
  
    return online;
  }
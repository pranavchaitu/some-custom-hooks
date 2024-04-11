import { useEffect } from "react"

export function useInterval(what,time) {
    useEffect(() => {
        const timer = setInterval(what,time)
        return () => {
            clearInterval(timer)
        }
    },[what,time])
}
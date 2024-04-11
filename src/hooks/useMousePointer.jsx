import { useEffect, useState } from "react"

export function useMousePointer() {
    const [pos,setPos] = useState({
        x : 0,
        y : 0
    })

    function handleMouseMove(e) {
        setPos({
            x : e.clientX,
            y : e.clientY
        })
    }

    useEffect(() => {
        window.addEventListener('mousemove',handleMouseMove)
        return () => {
            window.removeEventListener('mousemove',handleMouseMove)
        }
    },[])

    return pos
}
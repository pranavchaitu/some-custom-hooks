import { useEffect, useState } from "react";

export function useDebounce(what,time) {
    const [res,setRes] = useState(what);
    useEffect(() => {
        const timer = setTimeout(() => {
            setRes(what);
        },500)
        return () => {
            clearTimeout(timer)
        }
    },[what,time])
    return res;
}
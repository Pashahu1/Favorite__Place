import {useEffect, useState} from "react";

export default function ProgressBar({timer}) {
    const [remainingTime, setRemainingTime] = useState(timer)
    useEffect(() => {
        const remainTime =  setInterval(() => {
            setRemainingTime(prevTime=> prevTime - 10)
        }, 10)

        return (() => {
            clearInterval(remainTime);
        })

    },[])

    return (
        <progress value={remainingTime} max={timer}/>
    )
}
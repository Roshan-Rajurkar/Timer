import React, { useEffect, useState } from 'react'
import './Timer.css'

const Timer = () => {
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);

    var timer;
    useEffect(() => {
        timer = setInterval(() => {

            setSecond(second + 1);
            if (second === 59) {
                setMinute(minute + 1);
                setSecond(0)
            }
        }, 1000);


        return () => clearInterval(timer);
    })

    const Resume = () => {
        setSecond(0);
        setMinute(0);
    }


    const Stop = () => {
        clearInterval(timer);
    }
    return (
        <div className='timer'>
            <div className="container">
                <h1>Timer </h1>
                <h2 className='time'>{minute < 10 ? '0' + minute : minute}:{second < 10 ? '0' + second : second}</h2>
                <div className="buttons">
                    <button className='btn' onClick={Resume}>Resume</button>
                    <button className='btn' onClick={Stop}>Stop</button>
                </div>
            </div>
        </div>
    )
}

export default Timer
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { CalculateDecimal } from '../lib/CalculateDecimal';

export default function TimeConverter(){
    const [Time, setTime] = useState<string>("")
    const [result, setResult] = useState<number>(0)
    useEffect(() => {
      setResult(CalculateDecimal(Time))
    }, [Time])
    
    return (
        <div>
            <Header title='Time Converter' />
            <input type="string" placeholder="Enter time" onChange={(e) => setTime(e.target.value)}/>
            <h1>{result}</h1>
        </div>
    )
}
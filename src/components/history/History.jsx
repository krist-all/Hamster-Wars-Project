import {useState, useEffect} from 'react'
import HistoryItem from './HistoryItem'
import './History.css'

const History = () => {
    const [matches, setMatches] = useState([]);
    useEffect(() =>{
        async function get(){
            console.log('get matches')
            const response = await fetch('/matches', { method: 'GET'});
            const data = await response.json();
            setMatches(data);
        }
        get();
    }, [])

    return(
        <div className="history-list">
            <h1>RECENT MATCHES</h1>
            {matches.map((match)=>
                <HistoryItem key={match.id} match={match}/> 
            )}
        </div>
    )}

export default History;
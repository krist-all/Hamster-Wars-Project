import {useState, useEffect} from 'react'
import HistoryItem from './HistoryItem'
import './History.css'

const History = () => {
    const [matches, setMatches] = useState([]);
    useEffect(() =>{
        async function get(){
            const response = await fetch('/matches', { method: 'GET'});
            const data = await response.json();
            setMatches(data);
        }
        get();
    }, [])

    const deleteMatch = (id) =>{
        let newMatches = matches.filter(match => match.id !== id);
        setMatches(newMatches);
    }

    return(
        <div className="history-list">
            <h1>RECENT MATCHES</h1>
            {matches.map((match)=>
                <HistoryItem key={match.id} match={match} deleteMatch={deleteMatch}/> 
            )}
        </div>
    )}

export default History;
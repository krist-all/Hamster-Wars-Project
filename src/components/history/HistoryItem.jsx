import {useState, useEffect} from 'react'
import './History.css'
import DeleteIcon from '../icons/DeleteIcon'
import axios from 'axios'

const HistoryItem = ({match, deleteMatch}) =>{

    const [matchWinner, setMatchWinner] = useState([]);
    useEffect(() => {
        async function get(){
            const response = await fetch(`/hamsters/${match.winnerId}`, { method: 'GET'});
            const data = await response.json();
            setMatchWinner(data);
        }
        get();
    }, [match.winnerId])

    const [matchLoser, setMatchLoser] = useState([]);
    useEffect(() => {
        async function get(){
            const response = await fetch(`/hamsters/${match.loserId}`, { method: 'GET'});
            const data = await response.json();
            setMatchLoser(data);
        }
        get();
    }, [match.loserId])

    async function deleteM(id){
        await axios.delete(`/matches/${id}`)
        .then(response => console.log(response));
    }
    
    async function deleteEvent(){
        deleteM(match.id);
        deleteMatch(match.id);
    }

    return(
        <div className="history-container">
            <div className="winner-container">
                    <h3>Winner</h3>
                <div className="history-image">
                    <img src={`../../img/${matchWinner.imgName}`} 
                        onError={(e) =>{e.target.onerror = null; e.target.src="../../img/alt-hamster.jpg"}} 
                        alt="hamster"/> 
                </div>
                <div className="hamster-name">
                    {matchWinner.name}
                </div>
            </div>
            <div className="loser-container">
                    <h3>Loser</h3>
                <div className="history-image">
                    <img src={`../../img/${matchLoser.imgName}`} 
                        onError={(e) =>{e.target.onerror = null; e.target.src="../../img/alt-hamster.jpg"}} 
                        alt="hamster"/> 
                </div>
                <div className="hamster-name">
                    {matchLoser.name}
                </div>
            </div>
            <div className="delete-button" onClick={()=> deleteEvent()}>
                <DeleteIcon/>
            </div>
        </div>
    )
}

export default HistoryItem;
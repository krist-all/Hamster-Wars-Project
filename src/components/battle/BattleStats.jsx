import './BattleStats.css'
import {useState, useEffect} from 'react'

const BattleStats = ({battleHamster, opponentHamster, nextBattle}) => {

    const [battleHamsterById, setBattleHamsterById] = useState([]);
    useEffect(() => {
        async function get(){
            const response = await fetch(`/hamsters/${battleHamster.id}`, { method: 'GET'});
            const data = await response.json();
            setBattleHamsterById(data);
        }
        get();
    }, [battleHamster.id])

    const [opponentHamsterById, setOpponentHamsterById] = useState([]);
    useEffect(() => {
        async function get(){
            const response = await fetch(`/hamsters/${opponentHamster.id}`, { method: 'GET'});
            const data = await response.json();
            setOpponentHamsterById(data);
        }
        get();
    }, [opponentHamster.id])

    return(
        <div className="stats-container">
            <div className="hamster1-stats">
                <div>
                    <h2>
                        {battleHamsterById.name}  
                    </h2>
                </div>
                <div className="stats-image">
                    <img src={`../../img/${battleHamsterById.imgName}`} 
                        onError={(e) =>{e.target.onerror = null; e.target.src="../../img/alt-hamster.jpg"}} 
                        alt="hamster"/> 
                </div>
                <div>
                    <h4>
                       WINS: {battleHamsterById.wins} 
                    </h4>
                </div>
                <div>
                    <h4>
                       DEFEATS: {battleHamsterById.defeats}
                    </h4>
                </div>
            </div>
            <div className="hamster2-stats">
                <div>
                    <h2>
                        {opponentHamsterById.name}  
                    </h2>
                </div>
                <div className="stats-image">
                    <img src={`../../img/${opponentHamsterById.imgName}`} 
                        onError={(e) =>{e.target.onerror = null; e.target.src="../../img/alt-hamster.jpg"}} 
                        alt="hamster"/> 
                </div>
                <div>
                    <h4>
                       WINS: {opponentHamsterById.wins} 
                    </h4>
                </div>
                <div>
                    <h4>
                       DEFEATS: {opponentHamsterById.defeats}
                    </h4>
                </div>
            </div>
            <button className="next-battle" onClick={() => nextBattle()}>
                NEXT BATTLE
            </button>
        </div>
    )
}
export default BattleStats;
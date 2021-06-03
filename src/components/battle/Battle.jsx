import React from 'react'
import BattleHamster from './BattleHamster'
import OpponentHamster from './OpponentHamster'
import './Battle.css'
import axios from 'axios'
import BattleStats from './BattleStats'
import {useState, useEffect} from 'react'

const Battle = () => {

    const [battleHamster, setBattleHamster] = useState([]);
    useEffect(() => {
        async function get(){
            console.log('get randomhamster1')
            const response = await fetch('/hamsters/random', { method: 'GET'});
            const data = await response.json();
            setBattleHamster(data);
        }
        get();
    }, [])

    const [opponentHamster, setOpponentHamster] = useState([]);
    useEffect(() => {
        async function get(){
            console.log('get randomhamster2')
            const response = await fetch('/hamsters/random', { method: 'GET'});
            const data = await response.json();
            setOpponentHamster(data);
        }
        get();
    }, [])
    const [showStats, setShowStats] = useState(false);

    async function putHamsters(winnerId, loserId, hamsterWon, hamsterLost){
        axios.all([
            axios.put(`/hamsters/${winnerId}`, hamsterWon ),
            axios.put(`/hamsters/${loserId}`, hamsterLost),
            axios.post('/matches', {winnerId: winnerId, loserId: loserId})
        ])
        .then(axios.spread((object, secObject, thirdObject)=>{
            console.log(object, secObject, thirdObject);
        }))
    }

    async function winnerHamster1(){
        let winnerId = battleHamster.id;
        let loserId = opponentHamster.id;

        let hamsterWon = {
            wins: battleHamster.wins +1,
            games: battleHamster.games +1,
        }
        let hamsterLost = {
            defeats: opponentHamster.defeats +1,
            games: opponentHamster.games +1,
        }
        putHamsters(winnerId, loserId, hamsterWon, hamsterLost);
        setShowStats(true);
    }

    async function winnerHamster2(){
        let winnerId = opponentHamster.id;
        let loserId = battleHamster.id;

        let hamsterWon = {
            wins: opponentHamster.wins +1,
            games: opponentHamster.games +1,
        }
        let hamsterLost = {
            defeats: battleHamster.defeats +1,
            games: battleHamster.games +1,
        }
        putHamsters(winnerId, loserId, hamsterWon, hamsterLost);
        setShowStats(true);
    }

     function nextBattle(){
        window.location.reload(false);
    }
    
    return(
        <div className="battle-container">
            {showStats ? <div className="wins-losses">
                <BattleStats battleHamster={battleHamster} opponentHamster={opponentHamster} nextBattle={nextBattle} />
            </div> : false}
                <div className="battle-heading" >
                    <h1 >May the Cutest Hamster Win!</h1>
                </div>
                <div className="battle-hamster">
                    <BattleHamster battleHamster={battleHamster} />
                </div>
                    <button className="winner-button1" 
                            onClick={()=> winnerHamster1()}
                            disabled={showStats === true} >
                        <h4> {battleHamster.name} is Cuter</h4>
                    </button>
                <div className="battle-vs">
                    <h1>VS</h1>  
                 </div>
                <div className="opponent-hamster">
                    <OpponentHamster opponentHamster={opponentHamster} /> 
                </div>
                <button className="winner-button2" 
                        onClick={()=> winnerHamster2()}
                        disabled={showStats === true}>
                    <h3> {opponentHamster.name} is Cuter</h3>
                </button>
        </div> 
    )}

export default Battle;
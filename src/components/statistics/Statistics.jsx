import './Statistics.css'
import {useState, useEffect} from 'react'

const Statistics = () => {
    const [winners, setWinners] = useState(null);
    useEffect(()=>{
        async function get(){
            console.log('get winners')
            const response = await fetch('winners', {method: 'GET'});
            const data = await response.json();
            setWinners(data);
        }
        get();
    }, [])

    const [losers, setLosers] = useState(null);
    useEffect(()=>{
        async function get(){
            console.log('get losers')
            const response = await fetch('losers', {method: 'GET'});
            const data = await response.json();
            setLosers(data);
        }
        get();
    }, [])

    return(
        <div className="statistics-container">
            <div className="winners">
                <h1> Top 5 Cutest Hamsters</h1>
                {winners ?
                winners.map(winner => (
                    <div key={winner.id} className="container">
                         <div className="stat-image">
                            <img src={`../../img/${winner.imgName}`} 
                                onError={(e) =>{e.target.onerror = null; e.target.src="../../img/alt-hamster.jpg"}} 
                                alt="hamster"/>
                        </div>
                        <div  className="hamster-name">
                            <h2>
                                {winner.name} 
                            </h2>
                            <div className="winloss-stat">Wins: {winner.wins}</div>
                        </div>
                        <div className="hamster-data">
                            <div>Favorite food: {winner.favFood}</div>
                            <div>Loves: {winner.loves}</div>
                            <div>Age:  {winner.age}</div>
                        </div>
                    </div>
                ))
                : "Loading..." 
                }
            </div>
            <div className="losers">
                <h1>Bottom 5 Cutest Hamsters </h1>
                {losers ?
                losers.map(loser => (
                    <div key={loser.id} className="container">
                        <div className="stat-image">
                            <img src={`../../img/${loser.imgName}`} 
                                onError={(e) =>{e.target.onerror = null; e.target.src="../../img/alt-hamster.jpg"}} 
                                alt="hamster"/>
                        </div>
                        <div className="hamster-name">
                            <h2> 
                                {loser.name} 
                            </h2>
                            <div  className="winloss-stat">Losses: {loser.defeats}</div>
                        </div>
                        <div className="hamster-data">
                            <div>Favorite food: {loser.favFood}</div>
                            <div>Loves: {loser.loves}</div>
                            <div>Age: {loser.age}</div>
                           
                        </div>
                    </div>
                ))
                : "Loading..." 
                }
            </div>
        </div>
    )}

export default Statistics;
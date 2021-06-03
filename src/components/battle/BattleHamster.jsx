import './HamsterAndOpponent.css'

const BattleHamster = ({battleHamster}) => {
    return(
        <div >
        {battleHamster ?
            <section className="hamster-container">
                <div className="hamster-name">
                    <h2>{battleHamster.name}</h2> 
                </div>
                <div className="hamster-image">
                   <img src={`../../img/${battleHamster.imgName}`} 
                   onError={(e) =>{e.target.onerror = null; e.target.src="../../img/alt-hamster.jpg"}} 
                   alt="hamster" />
                </div>
                <div className="fav-food">
                    Favorite food: {battleHamster.favFood}
                </div>
                <div className="hamster-age"> 
                    Age:  {battleHamster.age} 
                </div>
                <div className="hamster-loves">
                    Loves: {battleHamster.loves} 
                </div>
            </section>
       : "Loading..."
       }
   </div>
)}

export default BattleHamster;
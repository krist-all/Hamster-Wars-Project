import './HamsterAndOpponent.css'

const OpponentHamster = ({opponentHamster}) => {
    return(
        <div>
        {opponentHamster ? 
           <section className="hamster-container">
             <div className="hamster-name">
                  <h2>{opponentHamster.name}</h2>
             </div>
             <div className="hamster-image">
                  <img src={`../../img/${opponentHamster.imgName}`} 
                  onError={(e) =>{e.target.onerror = null; e.target.src="../../img/alt-hamster.jpg"}} 
                  alt="hamster"/> 
            </div>
             <div className="fav-food">
             Favorite food: {opponentHamster.favFood}
             </div>
             <div className="hamster-age">
             Age: {opponentHamster.age} 
             </div>
             <div className="hamster-loves">
             Loves:  {opponentHamster.loves} 
             </div>
            
         </section>
     : "Loading..." 
     }
     
     </div>
)}

export default OpponentHamster;
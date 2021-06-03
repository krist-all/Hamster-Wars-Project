import './start.css'

const Start = () => {
    return(
        <div className="start-container">
            <div className="start-heading">
                <h1>
                    WELCOME TO HAMSTER WARS!
                </h1>
            </div>
                <div className="start-text">
                    <h4>
                        This is Hamster Wars! 
                        This is the place where hamsters battle each other for the great honor of becoming the CUTEST champion. 
                        You decide the fate of the hamster who will hold the title of Cutest Champion through voting on which hamster you think is cutest between two random contestants in each battle.
                        <br/>
                        <br/>
                        May the cutest hamster win!
                    </h4>
                </div>
            <div className="gif-container">
                <img src={'../../img/hamster-wheel-30.gif'} alt="hamster-wheel-30.gif"/>  
            </div>
        </div>
    )}

export default Start; 
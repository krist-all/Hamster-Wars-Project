import './HamsterItem.css'
import {useState, useEffect} from 'react'
import DeleteIcon from '../icons/DeleteIcon'
import axios from 'axios'
import WonAgainst from './WonAgainst'

const HamsterItem = ({hamster, refreshGallery}) => {
    const [getHamster, setGetHamster] = useState([]);
    useEffect(() => {
    async function get(){
        const response = await fetch(`/hamsters/${hamster.id}`, { method: 'GET'});
        const data = await response.json();
        setGetHamster(data);
    }
    get();
    }, [hamster.id])

    const [matchWinners, setMatchWinners] = useState([])
    useEffect(()=>{
        async function getMatchWinners(){
            const response = await fetch(`/matchWinners/${hamster.id}`, {method: 'GET'});
            const data = await response.json();
            setMatchWinners(data);
        }
        getMatchWinners();
    }, [hamster.id])
    
    async function deleteHamster(id){
        await axios.delete(`/hamsters/${id}`)
        .then(response => console.log(response));
        refreshGallery(id);
    }

    const [details, setDetails] = useState(false);

    let galleryClass = 'gallery-box'
    if(details === true){
        galleryClass = 'detail-gallery-box'
    }else{
        galleryClass = 'gallery-box'
    }

    let loserHamsters = matchWinners.map(match => match.loserId);
    let newList = [...new Set(loserHamsters)]

    return(
        <div >
            <div className={galleryClass} onClick={()=> setDetails(!details)} >
                <div className="image-container">
                    <img src={`../../img/${getHamster.imgName}`} 
                        onError={(e) =>{e.target.onerror = null; e.target.src="../../img/alt-hamster.jpg"}} 
                        alt="hamster"/>
            </div>
            <div className="hamster-name">
                <h3>
                    {getHamster.name}
                </h3>
            </div>
            {details ? 
            <div>
                <div className="detail-age">
                    <p>
                        I am {getHamster.age} years old.
                    </p>
                </div>
                <div className="detail-loves">
                     <p>
                        I love to {getHamster.loves}
                    </p>  
                </div>
                <div className="detail-food">
                    <p>
                        My favorite food is {getHamster.favFood}
                    </p>
                </div>
                <div className="defeated">
                    <p>{getHamster.name} has defeated</p>
                    {newList.map(loserHamster => <WonAgainst key={loserHamster} loserHamster={loserHamster}/>)}
                </div>
                <div className="delete-button" onClick={() => deleteHamster(hamster.id)}>
                    <DeleteIcon/>
                </div>
            </div> 
            : false}
            </div>
        </div>
    )
}

export default HamsterItem;

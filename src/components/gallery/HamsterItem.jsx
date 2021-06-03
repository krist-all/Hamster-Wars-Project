import './HamsterItem.css'
import {useState, useEffect} from 'react'
import DeleteIcon from '../icons/DeleteIcon'
import axios from 'axios'

const HamsterItem = ({hamster}) => {
    const [getHamster, setGetHamster] = useState([]);
    useEffect(() => {
    async function get(){
        console.log('get hamster id')
        const response = await fetch(`/hamsters/${hamster.id}`, { method: 'GET'});
        const data = await response.json();
        setGetHamster(data);
    }
    get();
}, [hamster.id])

async function deleteHamster(id){
    await axios.delete(`/hamsters/${id}`)
    .then(response => console.log(response));
    window.location.reload(false);
}

const [details, setDetails] = useState(false);

let galleryClass = 'gallery-box'
if(details === true){
    galleryClass = 'detail-gallery-box'
}else{
    galleryClass = 'gallery-box'
}
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
                <div className="detail-wins">
                    <p>
                        WINS: {getHamster.wins}
                    </p>
                </div>
                <div className="detail-loss">
                    <p>
                        DEFEATS: {getHamster.defeats}
                    </p>
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

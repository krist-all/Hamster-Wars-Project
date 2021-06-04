import {useEffect, useState} from 'react'

const WonAgainst = ({loserHamster}) => {
    const [loserName, setLoserName] = useState([])
    useEffect(()=>{
        async function get(){
            const response = await fetch(`/hamsters/${loserHamster}`, { method: 'GET'});
            const data = await response.json();
            setLoserName(data);
        }
        get();
    }, [loserHamster])
    return(
        <div>
            {loserName ? <div>
                            {loserName.name}
                         </div> : null}
        </div>
    )
}

export default WonAgainst;
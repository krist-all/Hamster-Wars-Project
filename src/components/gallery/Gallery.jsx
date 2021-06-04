import "./Gallery.css"
import { useEffect, useState} from 'react'
import HamsterItem from './HamsterItem'
import AddHamster from './AddHamster'

const Gallery = () => {
    const [hamsters, setHamsters] = useState(null);
    useEffect(() => {
        async function get(){ 
            const response = await fetch('/hamsters', { method: 'GET'});
            const data = await response.json();
            setHamsters(data);
        }
        get();
    }, [])
    
    const [viewForm, setViewForm] = useState(false);
    let buttonText = 'ADD NEW HAMSTER'
    if(viewForm === false){
        buttonText = 'ADD NEW HAMSTER'
    } else {
        buttonText = 'HIDE FORM'
    }
    
    if(hamsters === null || hamsters.length === 0){
        return (
            <p>Loading...</p>
        )
    }

    const refreshGallery = (id) => {
        let newHamsters = hamsters.filter(hamster => hamster.id !== id);
        setHamsters(newHamsters);
    }

    async function refreshForm(){
            async function get(){ 
                const response = await fetch('/hamsters', { method: 'GET'});
                const data = await response.json();
                setHamsters(data);
            }
            get();
            setHamsters([...hamsters]);
    }

         return(
             <div className="gallery-container">
                 <div className="add-hamster-button">
                    <button onClick={()=> setViewForm(!viewForm)}>{buttonText}</button>
                 </div>
                 {viewForm ? <div className="add-hamster">
                        <AddHamster setViewForm={setViewForm} refreshForm={refreshForm} />
                 </div> : false}  
                <div className="gallery-wrapper" >
                    {hamsters.map((hamster) =>
                        <HamsterItem  key={hamster.id} hamster={hamster} refreshGallery={refreshGallery} />
                    )}
                </div>       
            </div>
     )
}

export default Gallery;

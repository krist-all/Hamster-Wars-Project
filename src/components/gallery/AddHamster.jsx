import './AddHamster.css'
import {useState } from 'react'

const AddHamster = ({setViewForm}) =>{
    const [nameText, setNameText] = useState('');
    const [ageValue, setAgeValue] = useState('');
    const [favFoodText, setFavFoodText] = useState('');
    const [lovesText, setLovesText] = useState('');
    const [image, setImage] = useState('');

    const submitHandler = e => {
        e.preventDefault();
        let newBody = {
            name: nameText,
            age: ageValue,
            favFood: favFoodText,
            loves: lovesText,
            imgName: image,
            wins: 0,
            defeats: 0,
            games: 0,
        }
        async function post(){
            console.log(newBody);
            const response = await fetch('hamsters', {method: 'POST', headers:{
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(newBody)
        })
            const data = await response.json(); 
            console.log(data);  
        }
        post(); 
        setNameText('');
        setAgeValue('');
        setFavFoodText('');
        setLovesText('');
        setImage('');
        setNameTouched(false);
        setAgeTouched(false);
        setFavFoodTouched(false);
        setLovesTouched(false);
        setImageTouched(false);
        setViewForm(false);
    }

    const inputUpperCase = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const [nameTouched, setNameTouched] = useState(false);
    let isNameValid = true;
    let nameErrorMessage = '';
    if( nameText === ''){
        isNameValid = false;
        nameErrorMessage = 'Your hamster needs to have a name.';
    }
    let nameClass = "";
    if(nameTouched){
        nameClass = (isNameValid ? 'valid' : 'error');
    } else {
        nameErrorMessage = '';
    }

    const [ageTouched, setAgeTouched] = useState(false);
    let isAgeValid = true;
    let ageErrorMessage = ''
    if( ageValue === ''){
        isAgeValid = false;
        ageErrorMessage = 'How old is your hamster?';
    }
    let ageClass = "";
    if(ageTouched){
        ageClass = (isAgeValid ? 'valid' : 'error')
    } else {
        ageErrorMessage = '';
    }

    const [favFoodTouched, setFavFoodTouched] = useState(false);
    let isFavFoodValid = true;
    let favFoodErrorMessage = '';
    if( favFoodText === ''){
        isFavFoodValid = false;
        favFoodErrorMessage = 'Your hamster needs to eat something.';
    }
    let favFoodClass = "";
    if(favFoodTouched){
       favFoodClass = (isFavFoodValid ? 'valid' : 'error');
    } else {
        favFoodErrorMessage = '';
    }

    const [lovesTouched, setLovesTouched] = useState(false);
    let isLovesValid = true;
    let lovesErrorMessage = '';
    if( lovesText === ''){
        isLovesValid = false;
        lovesErrorMessage = 'Your hamster needs something to love.';
    }
    let lovesClass = "";
    if(lovesTouched){
       lovesClass = (isLovesValid ? 'valid' : 'error');
    }else{
        lovesErrorMessage = '';
    }

    const [imageTouched, setImageTouched] = useState(false);
    let isImageValid = true;
    let imageErrorMessage = '';
    if( image === ''){
        isImageValid = false;
        imageErrorMessage = 'Your hamster has to have a picture.';
    }
    let imageClass = "";
    if(imageTouched){
       imageClass = (isImageValid ? 'valid' : 'error');
    }else {
        imageErrorMessage = '';
    }

    let isFormValid = !isNameValid || !isAgeValid || !isFavFoodValid || !isLovesValid || !isImageValid

    return(
        <section className="add-hamster-form">
            <label >Name:<br/> 
                <input type="text" 
                    onChange={ event => {setNameText( inputUpperCase(event.target.value))}} 
                    value={nameText} 
                    className={nameClass} 
                    onBlur={() => setNameTouched(true)} />
                {nameTouched ? <div className="errorMessage">{nameErrorMessage}</div> : null}
            </label>
            <label >Age:<br/>
                <input type="number" 
                    onChange={ event => {setAgeValue(event.target.value)}} 
                    value={ageValue} 
                    className={ageClass} 
                    onBlur={() => setAgeTouched(true)}/>
                {ageTouched ? <div className="errorMessage">{ageErrorMessage}</div> : null}
            </label>
            <label >Favorite Food:<br/>
                <input type="text" 
                    onChange={ event => {setFavFoodText(inputUpperCase(event.target.value))}} 
                    value={favFoodText} 
                    className={favFoodClass} 
                    onBlur={() => setFavFoodTouched(true)} />
                {favFoodTouched ? <div className="errorMessage">{favFoodErrorMessage}</div> : null}
            </label>
            <label >Loves:<br/>
                <input type="text" 
                    onChange={ event => {setLovesText(inputUpperCase(event.target.value))}} 
                    value={lovesText} 
                    className={lovesClass} 
                    onBlur={() => setLovesTouched(true)}/>
                {lovesTouched ? <div className="errorMessage">{lovesErrorMessage}</div> : null}
            </label>
            <label >Upload Image:<br/>
                <div className="upload-container">
                    <input type="url" 
                        onChange={ event => {setImage(event.target.value)}} 
                        value={image} 
                        className={imageClass} 
                        onBlur={() => setImageTouched(true)}/>
                </div>    
                {imageTouched ? <div className="errorMessage">{imageErrorMessage}</div> : null}
            </label>
            <label>
                <input type="submit" 
                value="READY FOR BATTLE" 
                className="submit-button" 
                disabled={isFormValid} 
                onClick={e => submitHandler(e)}/>
            </label>
        </section>
    )
}

export default AddHamster;
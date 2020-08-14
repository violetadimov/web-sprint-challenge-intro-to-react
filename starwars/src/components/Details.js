import React, { useState, useEffect } from "react"; 
import axios from 'axios'
//import styled from 'styled-components' 


//const StylePhotos = styled.div`

//`
function Details(props) {
    const { characterId, close } = props
    const [details, setDetails] = useState(null)
    
  

    return (
        <div className='character-details' >
            <h2>Details</h2>
            {
                characterDetails &&
                <>
                    <p> Name: {characterDetails.name}</p>
                    <p>Birth Year: {characterDetails.birth_year}</p>
                    <p>Home World : {characterDetails.homeworld}</p>

                </>
            }
            <button onClick={close}>{closeCharacter}</button>
        </div>
    )
}

export default Details;
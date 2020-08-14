import React, { useState, useEffect } from "react"; 
import axios from 'axios'
//import styled from 'styled-components' 


//const StylePhotos = styled.div`

//`
function Details(props) {
    const { characterId, close } = props
    const [characterDetails, setCharacterDetails] = useState(null)
    const closeCharacter = '\u2304'
    const charactersUrl = `https://swapi.dev/api/people/`

    function fetchPerson(id) {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(value => {
            setInterval(() => {
                setCharacterDetails(value.data)
            }, 3000)
        })
        .catch(error => {
          console.log(error)
        })
    }
    useEffect(() => {
        
            for (var i = 1; i <= 10; i++) {
                
                
                fetchPerson(i)
               
            }
        
    }, [] )
  

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
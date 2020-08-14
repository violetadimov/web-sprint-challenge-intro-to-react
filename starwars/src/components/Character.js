// Write your Character component here
import React from "react"; 
//import styled from 'styled-components' 


//const StylePhotos = styled.div`

//`
function Character(props) {
    const { character, action, expandCharacter } = props
    const closeCharacter = '\u2304'

    return (
        <div className='character-container'>
            {character.name}
            <button className='expandButton' onClick={() => action(character.id) }>{expandCharacter}</button>
        </div>
    )
}

export default Character;
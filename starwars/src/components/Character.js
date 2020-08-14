// Write your Character component here
import React from "react"; 
//import styled from 'styled-components' 


//const StylePhotos = styled.div`

//`
function Character(props) {
    const { character, action, expandCharacter } = props
    console.log(character)

    return (
        <div className='character-container' >
            {character.name}
            <button className='expandButton'  onClick={() => action(character.height) }>{expandCharacter}</button>
            
        </div>
    )
}

export default Character;
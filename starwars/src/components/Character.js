// Write your Character component here
import React from "react"; 
import styled from 'styled-components' 


const StyleCharacter = styled.div`
    width: 60%;
    background-color: ${props => props.theme.secondaryColor};
    display: flex;
    /*justify-content: space-between;*/
    align-items: center;
    color: ${props => props.color || props.theme.primaryColor};
    margin: ${props => props.theme.margins.small};
    font-size: '1em';
    border-radius: 20px;

    h1{
        width: 40%;
        font-size: '1.5em';
    }
    .details{
        width: 60%;
        background-color: white;
        border-radius: 0 20px 20px 0;

    }
    @media (max-width: ${props => props.theme.tabletBreakpoint}) {
    width: 100%;
    }

`
function Character(props) {
    const { character, action, expandCharacter } = props
    console.log(character)

    return (
        <StyleCharacter className='character-container' >
            <h1>{character.name}</h1>
            <div className='details'>
                <p> Height: {character.height}</p>
                <p>Birth Year: {character.birth_year}</p>
                <p>Home World : {character.homeworld}</p>
                starships:
                <ul>
                    {
                        character.starships.map((starship, index) => <li key={index}>{starship}</li>)
                    }
                </ul>
            </div>
            
            
        </StyleCharacter>
    )
}

export default Character;
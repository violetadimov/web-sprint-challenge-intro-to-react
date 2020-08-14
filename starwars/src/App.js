import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character'
import Details from './components/Details'
import axios from 'axios'
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([])
  const [characterId, setCharacterId] = useState(null)
  

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const charactersUrl = 'https://swapi.dev/api/people/'
  useEffect(() => {
    axios.get(charactersUrl)
      .then(value => {
        setCharacters(value.data.results)
        console.log(value.data.results)
      })
      .catch(error =>{
        console.log(error)
      })
  }, [])
  const showDetails = id => {
    setCharacterId(id)
  }
  const hideDetails = id => {
    setCharacterId(null)
  }
  const expandCharacter = '\u2303'
  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map((character, id) => {
        return <Character 
            key={character.id} 
            character={character}
            action= {showDetails}
            expandCharacter = {expandCharacter}

        />
        })
      }
      {
        characterId && <Details characterId = {characterId} close={hideDetails} />
      }
    </div>
  );
}

export default App;

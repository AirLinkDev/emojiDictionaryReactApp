import React from "react";
import emojies from "./../emojipedia.js";
import Emoji from "./emoji.jsx";
//Entry level component
function CreateEmoji(emoji){
  return <Emoji //props to replace the hard coded data
  key = {emoji.id}
  emoji = {emoji.emoji}
  name = {emoji.name}
  meaning = {emoji.meaning}
  />
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

        {emojies.map(CreateEmoji)}
       
      </dl>
    </div> 
  );
}

export default App;

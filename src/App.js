import React from 'react';
import Global from "./styles/global";
import Thoughts from '../src/components/thoughts/Thoughts'

const data = [
  {
    id: Math.random(),
    title: "I need to think more what the other person is feeling",
    date: "December 9, 2018 4:22pm",
    description: "Is there any evidence your thought is true?",
    mood: "yes, Bill was very rud to me"
  },
  {
    id: Math.random(),
    title: "Another thought",
    date: "December 10, 2018 4:22pm",
    description: "lorem",
    mood: "lorem ipsum"
  },
  {
    id: Math.random(),
    title: "And yet another thought",
    date: "December 11, 2018 4:22pm",
    description: "lorem",
    mood: "lorem ipsum"
  }
];

function App() {
  return (
    <div className="App">
      <Global />
      <Thoughts thoughtsData={data} />
    </div>
  );
}

export default App;

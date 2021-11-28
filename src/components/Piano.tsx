// TODO:
// 1. Display all buttons / piano keys that play the right notes when clicked
//    (Do this by mapping through sounds to render multiple <PianoKey/> components. Also make a conditional handleKeyPress handler function?)
// 2. Make buttons play sounds when keys on keyboard are pressed
// 3. Style with CSS to look like a piano

import PianoKey from "./PianoKey";

export default function Piano(): JSX.Element {
  const notes = [
    "C4",
    "C#4",
    "D4",
    "D#4",
    "E4",
    "F4",
    "F#4",
    "G4",
    "G#4",
    "A4",
    "A#4",
    "B4",
  ];

  return (
    <>
      <h1>Piano App</h1>
      <p>Click the piano first to start using the keys</p>
      {notes.map((note) => (
        <PianoKey key={note} name={note} />
      ))}
    </>
  );
}

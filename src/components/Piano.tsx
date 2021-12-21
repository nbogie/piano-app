// TODO:
// 1. Display all buttons / piano keys that play the right notes when clicked
//    (Do this by mapping through sounds to render multiple <PianoKey/> components. Also make a conditional handleKeyPress handler function?)
// 2. Make buttons play sounds when keys on keyboard are pressed
// 3. Style with CSS to look like a piano

import PianoKey from "./PianoKey";

export default function Piano(): JSX.Element {

  const keysData = [
    { note: "C4", soundPath: "/sounds/C4.wav", keyboardKey: "z" },
    { note: "C#4", soundPath: "/sounds/Csharp4.wav", keyboardKey: "s" },
    { note: "D4", soundPath: "/sounds/D4.wav", keyboardKey: "x" },
    { note: "D#4", soundPath: "/sounds/Dsharp4.wav", keyboardKey: "d" },
    { note: "E4", soundPath: "/sounds/E4.wav", keyboardKey: "c" },
    { note: "F4", soundPath: "/sounds/F4.wav", keyboardKey: "v" },
    { note: "F#4", soundPath: "/sounds/Fsharp4.wav", keyboardKey: "g" },
    { note: "G4", soundPath: "/sounds/G4.wav", keyboardKey: "b" },
    { note: "G#4", soundPath: "/sounds/Gsharp4.wav", keyboardKey: "h" },
    { note: "A4", soundPath: "/sounds/A4.wav", keyboardKey: "n" },
    { note: "A#4", soundPath: "/sounds/Asharp4.wav", keyboardKey: "j" },
    { note: "B4", soundPath: "/sounds/B4.wav", keyboardKey: "m" }
  ];

  return (
    <>
      <h1>Piano App</h1>
      <p>Click the piano first to start using the keys</p>
      <p>Press 'z' for middle C, 's' for C#, 'x' for 'D', etc.</p>
      {keysData.map((keyData) => (
        <PianoKey
          key={keyData.note}
          name={keyData.note}
          soundPath={keyData.soundPath}
          keyboardKey={keyData.keyboardKey}
        />
      ))}
    </>
  );
}

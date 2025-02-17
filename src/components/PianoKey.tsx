import { useState } from "react";
import useSound from "use-sound";
import C4 from "../sounds/C4.wav";
import Csharp4 from "../sounds/Csharp4.wav";
import D4 from "../sounds/D4.wav";
import Dsharp4 from "../sounds/Dsharp4.wav";
import E4 from "../sounds/E4.wav";
import F4 from "../sounds/F4.wav";
import Fsharp4 from "../sounds/Fsharp4.wav";
import G4 from "../sounds/G4.wav";
import Gsharp4 from "../sounds/Gsharp4.wav";
import A4 from "../sounds/A4.wav";
import Asharp4 from "../sounds/Asharp4.wav";
import B4 from "../sounds/B4.wav";

interface PianoKeyProps {
  name: string;
}

export default function PianoKey(props: PianoKeyProps): JSX.Element {
  // need to figure out how to refactor this code so I can map through and have it more scalable
  const [playC4] = useSound(C4);
  const [playCsharp4] = useSound(Csharp4);
  const [playD4] = useSound(D4);
  const [playDsharp4] = useSound(Dsharp4);
  const [playE4] = useSound(E4);
  const [playF4] = useSound(F4);
  const [playFsharp4] = useSound(Fsharp4);
  const [playG4] = useSound(G4);
  const [playGsharp4] = useSound(Gsharp4);
  const [playA4] = useSound(A4);
  const [playAsharp4] = useSound(Asharp4);
  const [playB4] = useSound(B4);

  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  const handleClick = () => {
    switch (props.name) {
      case "C4":
        playC4();
        break;
      case "Csharp4":
        playCsharp4();
        break;
      case "D4":
        playD4();
        break;
      case "D#4":
        playDsharp4();
        break;
      case "E4":
        playE4();
        break;
      case "F4":
        playF4();
        break;
      case "F#4":
        playFsharp4();
        break;
      case "G4":
        playG4();
        break;
      case "G#4":
        playGsharp4();
        break;
      case "A4":
        playA4();
        break;
      case "A#4":
        playAsharp4();
        break;
      case "B4":
        playB4();
        break;
      default:
        playCsharp4();
    }
  };

  const handleKeyPress = (event: { key: string }) => {
    switch (event.key) {
      case "z":
        playC4();
        break;
      case "s":
        playCsharp4();
        break;
      case "x":
        playD4();
        break;
      case "d":
        playDsharp4();
        break;
      case "c":
        playE4();
        break;
      case "v":
        playF4();
        break;
      case "g":
        playFsharp4();
        break;
      case "b":
        playG4();
        break;
      case "h":
        playGsharp4();
        break;
      case "n":
        playA4();
        break;
      case "j":
        playAsharp4();
        break;
      case "m":
        playB4();
        break;
    }
  };

  return (
    <>
      <button
        className={
          (props.name.includes("#") ? "sharp" : "natural") +
          (active ? " active" : "")
        }
        onKeyPress={handleKeyPress}
        onClick={handleClick}
        onKeyDown={handleActive}
        onKeyUp={handleActive}
      ></button>
    </>
  );
}

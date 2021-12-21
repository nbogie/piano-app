import { useState } from "react";
import useSound from "use-sound";

interface PianoKeyProps {
  name: string;
  keyboardKey: string;
  soundPath: string;
}

export default function PianoKey(props: PianoKeyProps): JSX.Element {
  const [playFn] = useSound(props.soundPath);

  const [active, setActive] = useState(false);

  function playNamedNote(noteName: string) {
    playFn();
  }

  const handleClick = () => {
    playNamedNote(props.name);
  };

  const handleActive = () => {
    setActive(!active);
  };


  const handleKeyPress = (event: { key: string }) => {
    playNamedNote(event.key);
  };

  return (
    <>
      <button
        className={
          (props.name.includes("#") ? "sharp" : "natural") +
          (active ? " active" : "")
        }
        onKeyPress={handleKeyPress}
        onKeyDown={handleActive}
        onKeyUp={handleActive}
        onClick={handleClick}
      >{props.keyboardKey}</button>
    </>
  );
}

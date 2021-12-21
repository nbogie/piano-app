import { useEffect } from "react";
import useSound from "use-sound";

interface PianoKeyProps {
  name: string;
  keyboardKey: string;
  soundPath: string;
  isPlaying: boolean;
}

export default function PianoKey(props: PianoKeyProps): JSX.Element {
  const [playFn, { stop }] = useSound(props.soundPath);
  const isPlaying = props.isPlaying;

  useEffect(() => {
    if (isPlaying) {
      playFn();
    } else {
      //We could stop the sound now, on key up.  But we don't!
      false && stop();
    }
  }, [isPlaying, playFn, stop]);

  const handleClick = () => {
    playFn();
  };



  return (
    <>
      <button
        className={
          (props.name.includes("#") ? "sharp" : "natural") +
          (isPlaying ? " active" : "")
        }
        onClick={handleClick}
      >{props.keyboardKey}</button>
    </>
  );
}

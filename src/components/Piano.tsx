import useSound from "use-sound";
import D4 from "../sounds/D4.wav";

export default function Piano(): JSX.Element {
  const [play] = useSound(D4);

  return (
    <>
      <h1>Piano App</h1>
      <button onClick={() => play()}> D4 note on the Piano</button>
    </>
  );
}

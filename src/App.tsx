import { useRef } from 'react';

import { FaYoutube } from 'react-icons/fa';

import SquaresContainer from './components/SquaresContainer'
import useSave from './hooks';
import './App.scss'

function App() {
  const currentYear = (new Date()).getFullYear();
  const frame = useRef<HTMLElement>(null);
  const [saveImage] = useSave();

  return <>
    <main>
      <h3><span className="hashtag">#artvsartist{currentYear}</span> Generator (<a href="https://youtu.be/UhW0ufMM3Pk" target='_blank'>How to use <FaYoutube /></a>)</h3>
      <SquaresContainer ref={frame} />
      <button onClick={(e) => saveImage(e, frame.current!)}>Download your #artvsartist{currentYear}</button>
    </main>
    <footer>
      &copy; {currentYear} - Made with 🧠 by <a href="https://github.com/tbgracy" target='_blank'>@tbgracy</a> aka <a href="https://www.instagram.com/graa.uus/" target='_blank'>@graa.uus</a>
    </footer>
  </>
}

export default App
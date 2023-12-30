import html2canvas from 'html2canvas';
import './App.scss'
import SquaresContainer from './components/SquaresContainer'
import { useRef } from 'react';

function App() {
  const currentYear = (new Date()).getFullYear();
  const frame = useRef<HTMLElement>(null);

  function saveImage(e: React.MouseEvent) {
    e.preventDefault();
    html2canvas(frame.current!).then((canvas) => {
      const downloadImageLink = document.createElement("a");
      document.body.appendChild(downloadImageLink);
      downloadImageLink.setAttribute("download", `artvsartist${(new Date).getFullYear()}`);
      downloadImageLink.href = canvas.toDataURL('image/png');
      downloadImageLink.click();
      downloadImageLink.remove();
    })
  }

  return <>
    <main>
      <h3><span className="hashtag">#artvsartist{currentYear}</span> Generator</h3>
      <SquaresContainer ref={frame} />
      <button onClick={saveImage}>Download your #artvsartist{currentYear}</button>
      <a href="https://youtu.be/UhW0ufMM3Pk" target='_blank'>How to use</a>
    </main>
    <footer>
      &copy; {currentYear} - Made with 🧠 by <a href="https://github.com/tbgracy" target='_blank'>@tbgracy</a> aka <a href="https://www.instagram.com/graa.uus/" target='_blank'>@graa.uus</a>
    </footer>
  </>
}

export default App
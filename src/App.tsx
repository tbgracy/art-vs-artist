import html2canvas from 'html2canvas';
import './App.scss'
import SquaresContainer from './components/SquaresContainer'
import { useRef } from 'react';

function App() {
  const currentYear = (new Date()).getFullYear();
  const frame = useRef<HTMLElement>(null);

  function saveImage(e) {
    e.preventDefault();
    html2canvas(frame.current!).then((canvas) => {
      const downloadImage = document.createElement("a");
      document.body.appendChild(downloadImage);
      downloadImage.setAttribute("download", "image");
      downloadImage.href = canvas.toDataURL('image/png');
      downloadImage.click();
      downloadImage.remove();
    })
  }

  return <main>
    <h3>#artvsartist{currentYear} Generator</h3>
    <SquaresContainer ref={frame} />
    <button onClick={saveImage}>Get your #artvsartist{currentYear}</button>
  </main>
}

export default App

import { useRef, useState } from "react"

export default function CustomSquare() {
    const imageInput = useRef<HTMLInputElement>(null);
    const imagePreview = useRef<HTMLImageElement>(null);
    
    const maxZoom = 10;
    const minZoom = 1;
    
    const [scale, setScale] = useState(1);

    function showImage() {
        const file = imageInput.current!.files;
        if (file && file.length > 0) {
            imagePreview.current!.src = URL.createObjectURL(file[0]);
        }

    }

    function moveImage(){}

    function zoomImage(e) {
        const dY = e.deltaY;
        console.log(dY < 0 ? 'zoom+' : 'zoom-');

        if (dY < 0) {
            if (scale + .1 < maxZoom)
                setScale(scale + .1)
        } else {
            if (scale - .1 > minZoom)
                setScale(scale - .1)
        }
        imagePreview.current!.setAttribute('style', `scale: ${scale}`)
    }

    return <article className="square">
        <input ref={imageInput} type="file" name="image" id="image" accept="image/*" onChange={showImage} />
        <img ref={imagePreview} src="" alt="" onWheel={zoomImage} />
    </article>
}
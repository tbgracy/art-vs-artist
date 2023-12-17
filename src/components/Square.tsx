import { useRef, useState } from "react"

export default function Square() {
    const imageInput = useRef<HTMLInputElement>(null);
    const imagePreview = useRef<HTMLImageElement>(null);

    const minZoom = 1;
    const maxZoom = 10;

    const [scale, setScale] = useState(1);
    const [translation, setTranslation] = useState({ x: 0, y: 0 });
    const [mouseIsDown, setMouseIsDown] = useState(false);

    function showImage() {
        const file = imageInput.current!.files;
        if (file && file.length > 0)
            imagePreview.current!.src = URL.createObjectURL(file[0]);

    }

    function startMovement(e) {
        e.preventDefault();
        setMouseIsDown(true);
    }

    function endMovement(e) {
        e.preventDefault();
        setMouseIsDown(false);
    }

    function moveImage(e) {
        e.preventDefault();

        if (mouseIsDown) {
            const newX = translation.x + e.movementX;
            const newY = translation.y + e.movementY;
            if (newX)
            setTranslation({ x: newX, y: newY })
            const scaleValue = imagePreview.current!.style.scale;
            imagePreview.current!.setAttribute('style', `scale: ${scaleValue}; translate: ${translation.x}px ${translation.y}px`)
        }
    }

    function zoomImage(e) {
        const dY = e.deltaY;

        if (dY < 0) {
            if (scale + .1 < maxZoom)
                setScale(scale + .1)
        } else {
            if (scale - .1 > minZoom)
                setScale(scale - .1)
        }
        const translationValue = imagePreview.current!.style.translate;
        imagePreview.current!.setAttribute('style', `scale: ${scale}; translate: ${translationValue}`)
    }

    return <article className="square">
        <input ref={imageInput} type="file" name="image" id="image" accept="image/*" onChange={showImage} />
        <img ref={imagePreview} src="" alt=""
            onWheel={zoomImage}
            onMouseDown={startMovement}
            onMouseUp={endMovement}
            onMouseLeave={endMovement}
            onMouseMove={moveImage}
        />
    </article>
}
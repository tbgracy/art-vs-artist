import { useRef, useState } from "react";

import { MdAddAPhoto, MdChangeCircle } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

import useCropper from "./hooks";

export default function Square() {
    const id = uuidv4();

    const imageInput = useRef<HTMLInputElement>(null);
    const imagePreview = useRef<HTMLImageElement>(null);

    const { startMovement, endMovement, moveImage, zoomImage } = useCropper(imagePreview.current!);

    const [imagePresent, setImagePresent] = useState(false);

    function showImage() {
        const file = imageInput.current!.files;
        if (file && file.length > 0)
            imagePreview.current!.src = URL.createObjectURL(file[0]);
        setImagePresent(true);
    }

    return <article className="square">
        <label htmlFor={id}> {imagePresent ? <MdChangeCircle /> : <MdAddAPhoto />}</label>
        <input ref={imageInput} type="file" name="image" id={id} accept="image/*" onChange={showImage} />
        <img ref={imagePreview} alt="one of the nine challenge images" className={imagePresent ? '' : 'hide'}
            onWheel={zoomImage}
            onMouseDown={startMovement}
            onMouseUp={endMovement}
            onMouseLeave={endMovement}
            onMouseMove={moveImage}
        />
    </article>
}
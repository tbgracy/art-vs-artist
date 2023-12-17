import { useState } from "react";
import Cropper from "react-easy-crop";
import img from '../assets/test.jpg';

export default function Square() {
    const [crop, setCrop] = useState({ x: 0, y: 0 })

    const [zoom, setZoom] = useState(1)
    return <article className="square">
        <Cropper
            image={img}
            crop={crop}
            zoom={zoom}
            aspect={1 / 1}
            showGrid={false}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            classes={{
                cropAreaClassName: 'square-crop-area'
            }}
        />
    </article>
}
import { useState } from "react";

export default function useCropper(imagePreview: HTMLImageElement) {
    const minZoom = 1;
    const maxZoom = 10;

    const [scale, setScale] = useState(1);
    const [mouseIsDown, setMouseIsDown] = useState(false);
    const [translation, setTranslation] = useState({ x: 0, y: 0 });

    function startMovement(e: React.MouseEvent) {
        e.preventDefault();
        setMouseIsDown(true);
    }

    function endMovement(e: React.MouseEvent) {
        e.preventDefault();
        setMouseIsDown(false);
    }

    function moveImage(e: React.MouseEvent) {
        e.preventDefault();

        if (mouseIsDown) {
            const newX = translation.x + e.movementX;
            const newY = translation.y + e.movementY;
            if (newX)
                setTranslation({ x: newX, y: newY })
            const scaleValue = imagePreview.style.scale;
            imagePreview.setAttribute('style', `scale: ${scaleValue}; translate: ${translation.x}px ${translation.y}px`)
        }
    }

    function zoomImage(e: React.WheelEvent) {
        const dY = e.deltaY;

        if (dY < 0) {
            if (scale + .1 < maxZoom)
                setScale(scale + .1)
        } else {
            if (scale - .1 > minZoom)
                setScale(scale - .1)
        }
        const translationValue = imagePreview.style.translate;
        imagePreview.setAttribute('style', `scale: ${scale}; translate: ${translationValue}`)
    }

    return {startMovement, endMovement, moveImage, zoomImage};
}
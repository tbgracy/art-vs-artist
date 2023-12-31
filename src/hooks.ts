import html2canvas from "html2canvas";

export default function useSave() {
    function saveImage(e: React.MouseEvent, frame: HTMLElement) {
        e.preventDefault();
        html2canvas(frame).then((canvas) => {
            const downloadImageLink = document.createElement("a");
            document.body.appendChild(downloadImageLink);
            downloadImageLink.setAttribute("download", `artvsartist${(new Date).getFullYear()}`);
            downloadImageLink.href = canvas.toDataURL('image/png');
            downloadImageLink.click();
            downloadImageLink.remove();
        })
    }

    return [saveImage];
}
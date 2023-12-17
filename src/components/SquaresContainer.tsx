import { forwardRef } from "react";
import Square from "./Square";

const SquaresContainer = forwardRef<HTMLElement>((_, ref) => {
    return <section ref={ref} className="frame">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
    </section>
})

export default SquaresContainer;
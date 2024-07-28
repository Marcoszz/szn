import { MouseEvent, useState } from "react"
import { EHomeButtonAction, TDot } from "../../../types"

const useHome = () => {
    const [dots, setDots] = useState<TDot[]>([])
    const [prevDots, setPrevDots] = useState<TDot[]>([])

    const handleHomeButtonAction = (action: EHomeButtonAction) => {
        let lastPrevDot;

        if (action === EHomeButtonAction.REMAKE) {
            lastPrevDot = prevDots.pop()

            setPrevDots(prevDots)
            setDots(lastPrevDot ? [...dots, lastPrevDot] : [...dots])
        } else if (action === EHomeButtonAction.UNDO) {
            lastPrevDot = dots.pop()

            setPrevDots(lastPrevDot ? [...prevDots, lastPrevDot] : [...prevDots])
            setDots(dots)
        }
    }

    const handleDivClick = (e: MouseEvent) => {
        setDots([...dots, {x: e.clientX, y: e.clientY}])
    }

    return {
        handleHomeButtonAction,
        handleDivClick,
        dots,
    }
}

export default useHome
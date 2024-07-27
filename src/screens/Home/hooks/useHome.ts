import { MouseEvent, useState } from "react"
import { TDot } from "../../../types"

const useApp = () => {
    const [dots, setDots] = useState<TDot[]>([])
    const [lastDot, setLastDot] = useState<TDot[]>([])

    const handleRefazer = () => {
        const cLastDot = lastDot.pop()

        if (!cLastDot) return 
        
        setLastDot(lastDot)
        setDots([...dots, cLastDot ])
    }

    const handleDesfazer = () => {
        const cLastDot = dots.pop()

        if (!cLastDot) return 

        setLastDot([...lastDot, cLastDot ])
        setDots(dots)
    }

    const handleClickDiv = (e: MouseEvent) => {
        setDots([...dots, {x: e.clientX, y: e.clientY}])
    }

    return {
        handleRefazer,
        handleDesfazer,
        handleClickDiv,
        dots,
        lastDot
    }
}

export default useApp
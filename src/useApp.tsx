import { MouseEvent, useState } from "react"

export type Dot = {
    x: number,
    y: number
}

const useApp = () => {
    const [dots, setDots] = useState<Dot[]>([])
    const [lastDot, setLastDot] = useState<Dot[]>([])

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
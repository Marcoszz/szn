type Dot = {
    x: number,
    y: number
}

const Dot = ({x, y}: Dot) => {
    return <div className="dot" style={{left: x, top: y}}></div>
}

export default Dot
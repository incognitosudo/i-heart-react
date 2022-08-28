import HeartSVG from "./HeartSVG";

const colors = [
    '#b8e3f5',
    '#f5b8e4',
    '#b8f5b9',
    '#f5f3b8',
    '#e3b8f5',
    '#fffcf2'
];

//Math.floor(Math.random() * colors.length) integer between 0 to 6

const CandyColoredHeart = (props) => {
    const randomCol = colors[Math.floor(Math.random() * colors.length)]//holds random selection from our array of color Math.random() return 0 or 1 float
    return (
        <div className='heart'>
            <div className='heart-img'>
                <HeartSVG col={randomCol} />
            </div>
            <p className='heart-message'>{props.msg}</p>
        </div>
    )
}

export default CandyColoredHeart;
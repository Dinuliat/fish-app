type FishImageProp = {
    text: string;
    src: string;
    onClick: () => void;
}

export const FishImage = (props: FishImageProp) => {
    return <div onClick={props.onClick} className='Chapter'>
        <img src={props.src} width="350" height="250" />
        <div className="Chapter_text">{props.text}</div>
    </div>
}
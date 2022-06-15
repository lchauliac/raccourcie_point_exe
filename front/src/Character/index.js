import './style.css';
const Character = props => {
    return (<div>
        <div className="character" style={{
            left: props.x,
            top: props.y,
        }}>

        </div>
        <p>x:{props.x}, y:{props.y}</p>
    </div>)
}
export default Character
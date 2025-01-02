import './Toggle.css'
import { Link } from 'react-router-dom'

function Toggle(props) {
    return (
        <div>
            <Link to={props.link}> <button style={props.position} className='props-btn'>{props.icon}</button></Link>
        </div>
    )
}

export default Toggle

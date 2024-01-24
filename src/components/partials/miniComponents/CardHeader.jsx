import React from 'react'
import { Link } from 'react-router-dom'

const CardHeader = (props) => {
    return (
        <>
            <div className="card-header d-flex justify-content-between">
                <h4>{props.title}</h4>
                <button className='btn btn-sm btn-primary'>
                    <Link to={props.link} className='text-light text-decoration-none'> <i className={props.icon} ></i> 
                    {props.btn_text}
                    </Link>
                </button>
            </div>
        </>
    )
}

export default CardHeader
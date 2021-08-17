import React from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../actions'

const Buttons = () => {
    const dispatch = useDispatch();
    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex">
                <a id="tweet-quote" className="btn btn-primary m-1" href="https://twitter.com/intent/tweet" target="_blank"><i class="fab fa-twitter"></i></a>
                <a className="btn btn-primary m-1"><i class="fab fa-tumblr"></i></a>
            </div>
            
            <a className="btn btn-primary m-1" id="new-quote"
            onClick={() => dispatch(actions.aleatorio())}
            >New quote</a>
        </div>
    )
}

export default Buttons

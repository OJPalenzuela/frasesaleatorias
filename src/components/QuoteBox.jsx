import React from 'react'
import Buttons from './Buttons'
import { useSelector } from 'react-redux'

const QuoteBox = () => {
    const store = useSelector(store => store)
    return (
        <div id="quote-box" className="m-2">
            <div>
                <div className="d-flex display-5 justify-content-center">
                    <i class="fas fa-quote-left"></i>
                    <p id="text" className="text-center"> {" " + store.frase}</p>
                </div>

                <div>
                    <p style={{ textAlign: "end" }} id="author"><span>- </span> {store.autor}</p>
                </div>
            </div>

            <Buttons />
        </div>
    )
}

export default QuoteBox

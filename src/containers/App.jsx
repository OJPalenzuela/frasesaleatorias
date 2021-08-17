import React from 'react'
import QuoteBox from '../components/QuoteBox'

const App = () => {
    return (
        <div className="bg-primary vh-100 d-flex flex-column align-items-center justify-content-center">
            <div className="bg-light w-50 p-5">
                <QuoteBox />
            </div>
            <p className="font-weight-bold text-center m-3">
                By OJPalenzuela
            </p>

        </div>
    )
}

export default App

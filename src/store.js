import { createStore } from "redux";
import { frases } from "./frases";

const initialState = frases;

const frasesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ALEATORIO':
            return frases.frases[Math.floor(Math.random() * frases.frases.length)]
        default:
            return frases.frases[0]
    }
}

export default createStore(frasesReducer);
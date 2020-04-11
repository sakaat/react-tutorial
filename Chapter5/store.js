import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

const initial = {
    message: "START",
    data: [],
    number: [],
    result: 0,
};

function calcReducer(state = initial, action) {
    switch (action.type) {
        case "ENTER":
            const data2 = state.data.slice();
            const s = action.value;
            data2.unshift(s);
            const num = s.replace(/[^0-9]/g, "");
            const number2 = state.number.slice();
            number2.unshift(num);
            const result = state.result * 1 + num * 1;
            return {
                message: "ENTER",
                data: data2,
                number: number2,
                result: result,
            };
        case "RESET":
            return {
                message: "RESET",
                data: [],
                number: [],
                result: 0,
            };
        default:
            return state;
    }
}

export function initStore(state = initial) {
    return createStore(calcReducer, state, applyMiddleware(thunkMiddleware));
}

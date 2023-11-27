import { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type === "buy") {return {money: state.money - 10}};
    if (action.type === "sell") {return {money: state.money + 10 }};
    if (action.type === "celeb_visit") {return {money: state.money + 1000}};
};

function UseReducerHook () {

    const initialState = {money: 100};
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Wallet: {state.money}</h1>
            <div>
                <button onClick={() => dispatch({type: "buy"})}>
                    Buy a meal
                </button>
                <button onClick={() => dispatch({type: "sell"})}>
                    Serve a meal to customer
                </button>
                <button onClick={() => dispatch({type: "celeb_visit"})}>
                    Serve a meal to a celebrity
                </button>
            </div>
        </div>
    )
}

export default UseReducerHook;
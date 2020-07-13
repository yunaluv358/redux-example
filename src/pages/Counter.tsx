import React from "react";
import {CountDown} from "../components";

const Counter = () => <div>
    <CountDown count={0} reset={10} tick={1000}/>
            </div>
export default Counter
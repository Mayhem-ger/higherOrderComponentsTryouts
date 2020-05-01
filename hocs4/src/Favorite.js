import React, {Component} from "react"
import {withToggler} from "./HOCs/withToggler"

function Favorite (props) {
    return (
        <div>
            <h3>Click heart to favorite</h3>
            <h1>
                <span 
                    onClick={props.toggle}
                >
                    {props.on ? "❤️" : "♡"}
                </span>
            </h1>
        </div>
    ) 
}

const SuperchargedFavorite = withToggler(Favorite, {defaultOnValue: false})
export default SuperchargedFavorite
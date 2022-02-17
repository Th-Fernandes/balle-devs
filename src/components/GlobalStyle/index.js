import React from "react";
import pallet from "../../colors/pallet.json";

export class GlobalStyle extends React.Component {
    render() {
        return (
            <style global jsx> 
            {`
                * {
                   padding: 0;
                   margin: 0;
                   box-sizing: border-box; 
                }

                html {
                    font-size: 62.5%;
                }

                body {
                    min-height: 100vh;
                    background-color: ${pallet.neutral.black};
                    font-family: 'Overpass', sans-serif;
                    color: ${pallet.neutral.white};
                }

                ul {
                    list-style:none
                }

                li {
                    list-style-type: none;
                }
            `}
            </style>
        )
    }
}
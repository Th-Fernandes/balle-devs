import React from "react";
import { Button } from "@skynexui/components";

export default class defaultButton extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        {console.log(this.props)}
        return (
            <Button 
                label={this.props.textContent}  
                styleSheet={{
                    width: this.props.width,
                    height: "5.8rem",
                    backgroundColor: this.props.color,
                    borderRadius: "3.2rem",
                    fontWeight: 'bold',
                    marginTop: '6.9rem'
                }}
            />
        )
    }
}
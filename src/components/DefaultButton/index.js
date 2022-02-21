import React from "react";
import { Button } from "@skynexui/components";

export default function defaultButton(props) {  
    return (
        <Button
            onClick={props.onClick}
            label={props.textContent}
            styleSheet={{
                width: props.width,
                height: props.height,
                backgroundColor: props.color,
                borderRadius: "3.2rem",
                fontWeight: "bold",
                marginTop: props.marginTop,
            }}
        />
    );
    }

//

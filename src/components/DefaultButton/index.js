import React from "react";
import { Button } from "@skynexui/components";
import { useRouter } from "next/router";

export default function defaultButton(props) {
    const router = useRouter()

    const handleRouter = () => {
        router.push('./devs')
    }
  
    return (
        <Button
            onClick={handleRouter}
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

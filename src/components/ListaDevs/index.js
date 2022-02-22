import { Box, Button } from "@skynexui/components"
import CardDevs from "./CardDevs"
import returnIcon from "../../img/return-icon.svg"
import advanceIcon from "../../img/advance-icon.svg"
import { supabase } from "../../utils/supabaseClient"
import React from 'react'

export default function CardList(props) { 
    const [devs, setDevs] = React.useState([])

    React.useEffect(() => {
        supabase
             .from('devs')
             .select()
             .then((response) => {
                setDevs(response.data)
             })
             .finally(console.log('dados de devs coletados com sucesso')) 
              
    }, [])

    return(
        <Box 
            as="ul"
            styleSheet={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: '144rem',
                margin: "13.5rem auto 0"
            }}
        >

            <img src={returnIcon.src} />
            
            { 
                devs.map((el, index) => {
                    return (
                    <CardDevs
                      userData={devs}
                      index={index}
                      key={index}
                      buttonTypes={props.buttonsType}
                      openModal={props.openModal} 
                    />)
                })
            }

            <img src={advanceIcon.src} />
            
        </Box>
    )
}
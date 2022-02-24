import React from 'react';
import { supabase } from "../../../utils/supabaseClient";
import { Box, Button } from "@skynexui/components";
import pallet  from "../../../colors/pallet.json"


export default function defaultDelete(props) {
    const [deleteDev, setDeleteDev] = React.useState()
    return (
        <Box
            styleSheet={{
                textAlign: 'center',
                backgroundColor: pallet.neutral.black,
                width: 'min(90%, 46.3rem)',
                padding: '3.4rem 4.5rem 1.6rem'
            }}    
        >
            <article>
                <h2 style={{font: "3.5rem 'Maven Pro', sans-serif", fontWeight: 500}}>Deletar desenvolvedor</h2>

                <p style={{font: "2.5rem 'Maven Pro', sans-serif", fontWeight: 400, marginTop: '2rem'}}>
                Tem certeza que deseja deletar este desenvolvedor?
                </p>
            </article>
            {/* button actions */}
            <Box
                styleSheet={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '4rem'
                }}
            >
                <Button
                 colorVariant="light"
                 label="Cancelar"
                 styleSheet={{
                   width:"12.5rem",
                   height:"4rem",
                   color: pallet.neutral.black,
                   fontWeight: 500
                 }} 
                 onClick={() => {
                    props.cancelDelete(false)  
                }}
                  />

                <Button
                  label="Deletar"
                  styleSheet={{
                    width:"12.5rem",
                    height:"4rem",
                    backgroundColor: pallet.primary.red,
                    color: pallet.neutral.black,
                    fontWeight: 500
                  }} 
                  onClick={()=> {
                    props.cancelDelete(false)
                    props.clickEvent(true)
                    setInterval(() => document.location.reload(true), 100)
                  }}
                />
            </Box>
        </Box>
    )
}
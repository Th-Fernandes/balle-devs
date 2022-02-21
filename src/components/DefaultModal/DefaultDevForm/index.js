import { Box, Text} from "@skynexui/components";
import DefaultButton from "../../DefaultButton";
import FormItem from "../../formItem";
import pallet from "../../../colors/pallet.json"

export default function DevForm(props) {
  console.log(props)
  return (
    <Box
      as="form"
      onSubmit={(event) => event.preventDefault()}
      styleSheet={{
        width: "min(90%, 46rem)",
        height: "min(90%, 65rem)",
        padding: "3.5rem 0",
        fontFamily: "'Maven Pro', sans-serif",     
        backgroundColor: "#303030",
      }}
    >
      <Text as="h2" styleSheet={{ fontSize: "3.5rem", fontWeight: 500, textAlign: "center", }}>
        {props.title}
      </Text>

      <Box
        as="fieldset"
        styleSheet={{
            border: 'none',
            padding: '0 7rem 0 8.3rem'
        }}
      >
          <FormItem  label="nome:"/>
          <FormItem  label="Avatar:"/>
          <FormItem  label="Cargo:"/>
          <FormItem  label="GitHub:"/>
          <FormItem  label="LinkedIn:"/>
      </Box>
      {/* action buttons */}  
      <Box
        styleSheet={{
          maxWidth: '28.9rem',
          margin: "5.8rem auto 0",
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <DefaultButton 
          width='12.5rem' 
          height="4rem" 
          color={pallet.neutral.white} 
          textContent="cancelar"
          onClick={() => {
            props.cancelSubmit(false)
          }} 
        />
        <DefaultButton width='12.5rem' height="4rem" color={pallet.primary.green} textContent="Adicionar" />
      </Box>
    </Box>
  );
}

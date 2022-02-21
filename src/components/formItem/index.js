import { Box } from "@skynexui/components";

export default function FormItem(props) {
  return (
    <Box
      styleSheet={{
        margin: "2rem 0",
        maxHeight: "6.6rem"
      }}
    >
      <label 
        for="devNameInput" 
        style={{ 
            fontSize: "22px", 
            marginBottom: '1rem',
            display: 'inline-block' 
            }}
            >
        {props.label}
      </label>
      <input 
        id="devNameInput" 
        style={{ 
          display: "block", 
          width: "100%", 
          borderRadius: '0.5rem',
          height: '3rem' 
          }} 
          />
    </Box>
  );
}

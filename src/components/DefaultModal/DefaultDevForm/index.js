import { Box, Text } from "@skynexui/components";
import ButtonActions from "../../ButtonActions";
import React from "react";
import { supabase } from "../../../utils/supabaseClient";
import { Formik, Field, Form } from "formik";

export default function DevForm(props) {
  const [inputValue, SetInputValue] = React.useState();
  const [supabaseAction, setSupabaseAction] = React.useState();

  const handleCreateDev = async (userData) => {
    if(supabaseAction == 'insert') {
      console.log('estou chegando aqui')
      await supabase.from("devs").insert([userData])
    } else if(supabaseAction == 'update') {
      console.log('update está sendo feito')
      await supabase
        .from("devs")
        .update(userData)
        .match(props.selectedCard)
    }
  };

  return (
    <Formik
      initialValues={{
        nome: "",
        avatar: "",
        cargo: "não informado",
        github: "",
        linkedin: "",
      }}
      onSubmit={async (values) => {
        /* 
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
        console.log(values)
        */
        handleCreateDev(values);
        setInterval(() => document.location.reload(true), 2000);
      }}
    >
      <Form
        style={{
          width: "min(90%, 46rem)",
          height: "min(90%, 65rem)",
          padding: "3.5rem 0",
          fontFamily: "'Maven Pro', sans-serif",
          backgroundColor: "#303030",
        }}
      >
        <Text
          as="h2"
          styleSheet={{
            fontSize: "3.5rem",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          {props.title}
        </Text>

        <Box
          as="fieldset"
          styleSheet={{
            border: "none",
            padding: "0 7rem 0 8.3rem",
            marginTop: '2rem'
          }}
        >
          <label
            style={{
              fontSize: "22px",
              marginBottom: "1rem",
              display: "block",
            }}
            htmlFor="nome"
          >
            nome:
          </label>
          <Field id="nome" name="nome" style={{
            display: "block",
            width: "100%",
            marginBottom: '2rem',
            borderRadius: '0.5rem',
            height: '3rem'
          }} />

          <label
            style={{
              fontSize: "22px",
              marginBottom: "1rem",
              display: "block",
            }}
            htmlFor="avatar"
          >
            Avatar:
          </label>
          <Field id="avatar" name="avatar" style={{
            display: "block",
            width: "100%",
            borderRadius: '0.5rem',
            height: '3rem',
            marginBottom: '2rem',
          }} />

          <label
            style={{
              fontSize: "22px",
              marginBottom: "1rem",
              display: "block",
            }}
            htmlFor="cargo"
          >
            Cargo:
          </label>
          <Field id="cargo" name="cargo" style={{
            display: "block",
            width: "100%",
            borderRadius: '0.5rem',
            height: '3rem',
            marginBottom: '2rem',
          }} />

          <label
            style={{
              fontSize: "22px",
              marginBottom: "1rem",
              display: "block",
            }}
            htmlFor="github"
          >
            github:
          </label>
          <Field id="github" name="github" style={{
            display: "block",
            width: "100%",
            borderRadius: '0.5rem',
            marginBottom: '2rem',
            height: '3rem'
          }} />

          <label
            style={{
              fontSize: "22px",
              marginBottom: "1rem",
              display: "block",
            }}
            htmlFor="linkedin"
          >
            linkedin:
          </label>
          <Field id="linkedin" name="linkedin" style={{
            display: "block",
            width: "100%",
            borderRadius: '0.5rem',
            height: '3rem'
          }} />
        </Box>
        {/* action buttons */}
        <ButtonActions type={props.type} cancelSubmit={props.cancelSubmit} supabaseAction={setSupabaseAction} />
      </Form>
    </Formik>
  );
}

import { Box, Button, Image, Text } from "@skynexui/components";
import pallet from "../../../colors/pallet.json";
import whiteGitHub from "../../../img/white-gitHub.svg";
import whitelinkedin from "../../../img/white-linkedin.svg";
import DefaultButton from "../../DefaultButton";
import DefaultPhoto from "../../../img/dev-example.svg"

export default function Cards(props) {
  const handleUserData = () => {
    return props.userData[props.index]
  }

  console.log(handleUserData())

  return (
    <Box 
      as="li"
      onClick={()=> {
        props.selectedCard(props.userData[props.index])
      }}
      >
      {/* inside card content */}
      <Box
        styleSheet={{
          width: "30rem",
          height: "40rem",
          padding: "3rem",
          backgroundColor: `rgba(169, 169, 169, 0.1)`,
        }}
      >
        {/* programmer photo */}
        <Image src={handleUserData().avatar } styleSheet={{ margin: "auto", borderRadius: "50%",  }} />
        {/* programer description */}
        <Box
          as="article"
          styleSheet={{ textAlign: "center", marginBottom: "2.7rem" }}
        >
          <h2 style={{ fontSize: "2.5rem", marginTop: "1rem" }}>
            {handleUserData().nome}
          </h2>
          <Text> {handleUserData().cargo} </Text>
        </Box>
        {/* programmer social medias */}
        <Box styleSheet={{ display: "flex" }}>
          {/* social medias group */}
          <Box as="ul" styleSheet={{ display: "flex", alignItems: "center" }}>
            <li>
              <a href={handleUserData().github}>
                <Image src={whiteGitHub.src} />
              </a>
            </li>
            <li>
              <Image
                src={whitelinkedin.src}
                styleSheet={{ margin: "0 1.2rem" }}
              />{" "}
            </li>
          </Box>

          <DefaultButton
            width="15rem"
            color={pallet.primary.green}
            textContent="Ver Mais"
          />
        </Box>
      </Box>
      {/* CARD STATE */}  
      <Box
        styleSheet={{
            width: '100%',
            display: 'flex',
            justifyContent: "space-between",
            marginTop: '5.3rem'
        }}
      >
          <DefaultButton
            onClick={() => {
              props.buttonTypes('edit')
              props.openModal(true)
            }}
            width="12.5rem"
            height="4rem"
            textContent="Editar"
            color={pallet.primary.yellow}
          />

          <DefaultButton
            onClick={() => {
              props.openModal(true)
              props.setModalType('delete')
              props.deleteCard(handleUserData().id)

              
            }}
            width="12.5rem"
            height="4rem"
            textContent="Deletar"
            color={pallet.primary.red} 
          />
      </Box>
    </Box>
  );
}

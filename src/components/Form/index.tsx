import { TouchableOpacityProps, TextInput, TextInputProps } from 'react-native'
import { ButtonsDietOut, ButtonsDietin, ButtonsOption, Container, Input, InputDescription, Text, TextButton } from "./styles";


export function Form({ isActive = false }){
  return(
    <Container>
        <Text>Nome</Text>
        <Input
          
        />

        <Text>Descrição</Text>
        <InputDescription
            
        />

        <Text>Está dentro da dieta?</Text>

        <ButtonsOption>

          <ButtonsDietin isActive={true} >
            <TextButton>Sim</TextButton>
          </ButtonsDietin>

          <ButtonsDietOut isActive={false} >
            <TextButton>Não</TextButton>
          </ButtonsDietOut>
          
        </ButtonsOption>


        
    </Container>
  )
}
import { ButtonsDietOut, ButtonsDietin, ButtonsOption, Container, Input, InputDescription, Text, TextButton, InputProps } from "./styles";

export function Form({ ...rest }: InputProps ){
  return(
    <Container {...rest} >
        <Text>Nome</Text>
        <Input/>
 
        <Text>Descrição</Text>
        <InputDescription
          style={{ height: 150, textAlignVertical: 'top' }}
          multiline
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
import { Container, Label, InputText, InputProps } from "./styles";
import { TextInputProps } from 'react-native';

type Props = TextInputProps &  {
  name: string;
  heightInput: InputProps;
}

export function Input({name, heightInput, ...rest }: Props){
  return(
    <Container {...rest} >
        <Label>{name}</Label>
        <InputText
          heightInput={heightInput}
          style={{ textAlignVertical: 'top',}}
        />
    </Container>
  )
}
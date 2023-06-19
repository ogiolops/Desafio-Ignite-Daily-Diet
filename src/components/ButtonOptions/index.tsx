import { useState } from 'react'
import { ButtonOptionsContainer, Container, OptionIcon, OptionText, OptionWrapper, Title } from "./styles";

type Props = {
  title: string;
  options: string[];
  onSelect: (option: string) => void;
}

export function ButtonOptions({title, options, onSelect}: Props){

  const [userOption, setUserOption] = useState<string | null>(null);
  function handleUserOption(option: string) {
    onSelect(option);
    setUserOption(option);
  }

  return(
    <Container>
      <Title>{title}</Title>
      <ButtonOptionsContainer>
        {options.map((option, i) => (
          <OptionWrapper
            key={option}
            variant={option === 'Sim' ? 'inDiet' : 'outDiet'}
            withMarginLeft={i > 0}
            isSelected={option === userOption}
            onPress={() => handleUserOption(option)}
          >
            <OptionIcon variant={option === 'Sim' ? 'inDiet' : 'outDiet'} />
            <OptionText>{option}</OptionText>
          </OptionWrapper>
        ))}
      </ButtonOptionsContainer>
    </Container>
  )
}
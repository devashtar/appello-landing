import React from 'react'
import * as Styled from './styled'
import { Container } from '@components/Container'
import { Title } from '@components/Title'
import { SubTitle } from '@components/SubTitle'

export const SectionFAQ: React.FC<{}> = () => {
  return (
    <Styled.Section>
      <Container>
        <Title marginTop={0}>FAQ</Title>
        <SubTitle>
          Below is a list of frequently asked questions. If you can't find what
          you’re looking for then feel free to ask us directly via
        </SubTitle>
        <Styled.List>
          <Styled.Item>
            <Styled.Title>
              1. What is your privacy and security policy?
            </Styled.Title>
            <Styled.Btn>+</Styled.Btn>
          </Styled.Item>
          <Styled.Item>
            <Styled.Title>
              2. How long is the development timeline?
            </Styled.Title>
            <Styled.Btn>+</Styled.Btn>
          </Styled.Item>
          <Styled.Item>
            <Styled.Title>
              3. What type of companies do you work with?
            </Styled.Title>
            <Styled.Btn>+</Styled.Btn>
          </Styled.Item>
          <Styled.Item>
            <Styled.Title>4. How many team members for a project?</Styled.Title>
            <Styled.Btn>+</Styled.Btn>
          </Styled.Item>
          <Styled.Item>
            <Styled.Title>
              5. What warranties are to ensure deliverables are met?
            </Styled.Title>
            <Styled.Btn>+</Styled.Btn>
          </Styled.Item>
          <Styled.Item>
            <Styled.Title>6. Do you outsource work?</Styled.Title>
            <Styled.Btn>+</Styled.Btn>
          </Styled.Item>
        </Styled.List>
      </Container>
    </Styled.Section>
  )
}

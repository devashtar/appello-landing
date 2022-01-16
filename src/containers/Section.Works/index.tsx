import React from 'react'
import * as Styled from './styled'
import { Container } from '@components/Container'
import { Title } from '@components/Title'
import { Button } from '@components/Button'

export const SectionWorks: React.FC<{}> = () => {
  return (
    <Styled.Section>
      <Container>
        <Title textColor='white'>We’re proud of our work</Title>
        <Styled.FlexWrapper>
          <Styled.FlexItem>
            <Styled.FlexItemTitle>50+</Styled.FlexItemTitle>
            <Styled.FlexItemSubTitle>
              Successfully completed projects
            </Styled.FlexItemSubTitle>
          </Styled.FlexItem>
          <Styled.FlexItem>
            <Styled.FlexItemTitle>35+</Styled.FlexItemTitle>
            <Styled.FlexItemSubTitle>
              Happy and appreciative customers
            </Styled.FlexItemSubTitle>
          </Styled.FlexItem>
          <Styled.FlexItem>
            <Styled.FlexItemTitle>10</Styled.FlexItemTitle>
            <Styled.FlexItemSubTitle>
              Combined years of experience
            </Styled.FlexItemSubTitle>
          </Styled.FlexItem>
          <Styled.FlexItem>
            <Styled.FlexItemTitle>23</Styled.FlexItemTitle>
            <Styled.FlexItemSubTitle>
              Experienced and talented workers
            </Styled.FlexItemSubTitle>
          </Styled.FlexItem>
        </Styled.FlexWrapper>
        <Styled.FlexCardsWrapper>
          <Styled.CardItem>
            <Styled.Img
              src={process.env.PUBLIC_URL + '/images/cards/card1.jpg'}
              alt='work card'
            />
            <Styled.CardContent>
              <Styled.CardTitle>
                Eyetelligence – AI-based Eye Health
              </Styled.CardTitle>
              <Styled.CardSubTitle>
                Eyetelligence is a medtech company using AI based software to
                recognise eye diseases. Appello software developed their website
                which has just been released.
              </Styled.CardSubTitle>
            </Styled.CardContent>
          </Styled.CardItem>
          <Styled.CardItem>
            <Styled.Img
              src={process.env.PUBLIC_URL + '/images/cards/card2.jpg'}
              alt='work card'
            />
            <Styled.CardContent>
              <Styled.CardTitle>
                Give + Get – Charity Challenger App
              </Styled.CardTitle>
              <Styled.CardSubTitle>
                Give + Get is a modern charity app. “Give”, while joining a
                community of active people who complete challenges and reap the
                rewards they offer; “Get”.
              </Styled.CardSubTitle>
            </Styled.CardContent>
          </Styled.CardItem>
          <Styled.CardItem>
            <Styled.Img
              src={process.env.PUBLIC_URL + '/images/cards/card3.jpg'}
              alt='work card'
            />
            <Styled.CardContent>
              <Styled.CardTitle>Voken – Shared Childcare App</Styled.CardTitle>
              <Styled.CardSubTitle>
                Voken lets people arrange childcare with families they trust,
                earn tokens and use for your own requests.
              </Styled.CardSubTitle>
            </Styled.CardContent>
          </Styled.CardItem>
          <Styled.CardItem>
            <Styled.Img
              src={process.env.PUBLIC_URL + '/images/cards/card4.jpg'}
              alt='work card'
            />
            <Styled.CardContent>
              <Styled.CardTitle>
                Chattii – Disability Dating App
              </Styled.CardTitle>
              <Styled.CardSubTitle>
                Chattii is born from the need to provide a space for people
                living with disabilities to connect, chat, and explore their
                love life.
              </Styled.CardSubTitle>
            </Styled.CardContent>
          </Styled.CardItem>
        </Styled.FlexCardsWrapper>
        <Styled.WrapperBtn>
          <Button value='See more' />
        </Styled.WrapperBtn>
      </Container>
    </Styled.Section>
  )
}

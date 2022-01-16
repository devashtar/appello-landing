import React from 'react'
import * as Styled from './styled'
import { Container } from '@components/Container'

export const Footer: React.FC<{}> = () => {
  return (
    <Styled.Footer>
      <Container>
        <Styled.TitleBlock>
          <Styled.InnerTitleFlex>
            <Styled.Title>Trusted by businesses worldwide.</Styled.Title>
            <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt='logo' />
          </Styled.InnerTitleFlex>
        </Styled.TitleBlock>

        <Styled.WrapperContentBlock>
          {list.map((item) => {
            return (
              <Styled.ItemContentBlock>
                <Styled.ItemTitle>{item.name}</Styled.ItemTitle>
                <Styled.ItemList>
                  {item.items.map((el, idx) => {
                    return (
                      <Styled.ItemElem key={idx}>
                        <Styled.ItemText>{el}</Styled.ItemText>
                      </Styled.ItemElem>
                    )
                  })}
                </Styled.ItemList>
              </Styled.ItemContentBlock>
            )
          })}
        </Styled.WrapperContentBlock>

        <Styled.SocialBlock>
          <Styled.Text>© Appello Pty. Ltd.2021</Styled.Text>
          <Styled.SocialList>
            <Styled.Text>Facebook</Styled.Text>
            <Styled.Text>Instagram</Styled.Text>
            <Styled.Text>Dribbble</Styled.Text>
            <Styled.Text>Linkedin</Styled.Text>
          </Styled.SocialList>
          <Styled.Text>Sitemap</Styled.Text>
        </Styled.SocialBlock>
      </Container>
    </Styled.Footer>
  )
}

const list = [
  {
    name: 'Our services',
    items: [
      'iOS App Development',
      'Android App Development',
      'UX/UI App Design',
      'Custom Software Development',
      'Healthcare Software Development',
      'Education Software Development',
      'FinTech Software Development'
    ]
  },
  {
    name: 'Our offices',
    items: [
      'WeWork - George St, Sydney, Australia',
      'Sydney Startup Hub - Sydney, Australia',
      'WeWork - Edward St, Brisbane, Australia',
      '40 Bank St, Canary Wharf, London, UK',
      'WeWork - Paddington, West London, UK',
      'WeWork - Mission St, San Francisco, US'
    ]
  },
  {
    name: 'Contact us',
    items: [
      'Email: hello@appello.com.au',
      'Sidney: (+61) 027 202 5164',
      'London: (+44) 203 608 3126',
      'San Francisco: (+1) 628 280 6518'
    ]
  }
]

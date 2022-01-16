import React from 'react'
import * as Styled from './styled'
import { Container } from '@components/Container'
import { Button } from '@components/Button'

export const Header: React.FC<{}> = () => {
  return (
    <Styled.Header bgURL={process.env.PUBLIC_URL + '/images/bg-image.jpg'}>
      <Container>
        <Styled.NavMenu>
          <Styled.Logo src={process.env.PUBLIC_URL + '/images/logo.svg'} />

          <Styled.InnerNavBlock>
            <Styled.Nav>
              {links.map((item, idx) => {
                return (
                  <li key={idx}>
                    <Styled.ItemLink href={item.url}>
                      {item.name}
                    </Styled.ItemLink>
                  </li>
                )
              })}
            </Styled.Nav>

            <Styled.Burger>
              <span />
            </Styled.Burger>

            <Styled.NavButton>Get project quote</Styled.NavButton>
          </Styled.InnerNavBlock>
        </Styled.NavMenu>
        <Styled.TitleBlock>
          <Styled.Title>Leaders in Software Design & Development</Styled.Title>
          <Styled.SubTitle>
            Establishing a technology company takes a strong software team to
            deliver on what needs to be done.
          </Styled.SubTitle>
          <Styled.BtnWrapper>
            <Button value={'View our work'} />
          </Styled.BtnWrapper>
        </Styled.TitleBlock>
      </Container>
    </Styled.Header>
  )
}

const links = [
  {
    name: 'Home',
    url: '#'
  },
  {
    name: 'Portfolio',
    url: '#'
  },
  {
    name: 'Process',
    url: '#'
  },
  {
    name: 'Team',
    url: '#'
  },
  {
    name: 'Resources',
    url: '#'
  }
]

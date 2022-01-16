import React, { useState } from 'react'
import * as Styled from './styled'
import { Container } from '@components/Container'
import { Title } from '@components/Title'
import { SubTitle } from '@components/SubTitle'

export const SectionKickstart: React.FC<{}> = () => {
  const [leftCoords, setLeftCoords] = useState(0)
  const [access, setAccess] = useState(0)

  const moveToLeft = () => {
    if (access === -(list.length - 4)) return
    setLeftCoords((item) => item - 220)
    setAccess((item) => item - 1)
  }

  const moveToRight = () => {
    if (access === 0) return
    setLeftCoords((item) => item + 220)
    setAccess((item) => item + 1)
  }

  return (
    <Styled.Section>
      <Container>
        <Title>kickstart your tech career</Title>
        <SubTitle>
          We're always on the lookout for bright strategic minds, creative
          superstars and coding gurus. Select one of our current opportunities
          below to apply.
        </SubTitle>
        <Styled.WrapperList>
          <Styled.Btn direction={false} onClick={() => moveToLeft()} />
          <Styled.ListOverflow>
            <Styled.ListRelative leftCoords={leftCoords}>
              {list.map((name) => {
                return <Styled.ItemBtn>{name}</Styled.ItemBtn>
              })}
            </Styled.ListRelative>
          </Styled.ListOverflow>
          <Styled.Btn direction={true} onClick={() => moveToRight()} />
        </Styled.WrapperList>
      </Container>
    </Styled.Section>
  )
}

const list = [
  'Product Designer',
  'Frontend Engineer',
  'Project Manager',
  'Finance Director',
  'Backend Engineer',
  'Product Designer',
  'Frontend Engineer',
  'Project Manager',
  'Finance Director',
  'Backend Engineer'
]

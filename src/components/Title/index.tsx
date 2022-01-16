import React from 'react'
import * as Styled from './styled'

interface IProps {
  children: any
  textColor?: string
  marginTop?: number
}

export const Title: React.FC<IProps> = ({ children, textColor, marginTop }) => {
  return (
    <Styled.Title
      marginTop={typeof marginTop === 'number' ? marginTop : 150}
      textColor={textColor || 'black'}
    >
      {children}
    </Styled.Title>
  )
}

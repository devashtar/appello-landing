import React from 'react'
import * as Styled from './styled'

interface IProps {
  value: string
  onClick?: () => void
}

export const Button: React.FC<IProps> = ({ value, onClick }) => {
  return <Styled.Btn onClick={onClick}>{value}</Styled.Btn>
}

import styled from 'styled-components'
import { device } from '@breakpoints/device'

export const Title = styled.h1<{ textColor: string; marginTop: number }>`
  margin-top: ${(props) => (props.marginTop !== 0 ? props.marginTop / 2 : 0)}px;
  text-align: center;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 41px;
  color: ${(props) => props.textColor};

  @media ${device.laptop} {
    margin-top: ${(props) => props.marginTop}px;
  }
`

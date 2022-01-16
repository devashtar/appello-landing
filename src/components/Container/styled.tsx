import styled from 'styled-components'
import { device } from '@breakpoints/device'

export const Container = styled.div`
  background-color: transparent;
  padding: 0px 10px;
  margin: 0 auto;
  max-width: 1190px;
  width: 100%;
  height: 100%;

  @media ${device.laptopM} {
    padding: 0px;
  }
`

import styled from 'styled-components'
import { device } from '@breakpoints/device'

export const Section = styled.section`
  width: 100%;
  padding-bottom: 60px;

  @media ${device.tablet} {
    padding-bottom: 120px;
  }
`

export const WrapperCards = styled.div`
  margin-top: 75px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const CardItem = styled.div`
  max-width: 360px;
  width: 100%;
  padding: 10px;

  box-shadow: 0px 0px 3px 1px rgba(80, 80, 80, 0.1);
`

export const Img = styled.img`
  width: 100%;
  height: 250px;
`

export const ContentBlock = styled.div`
  margin-top: 10px;
  padding: 40px 30px;
`

export const Title = styled.h1`
  font-family: inherit;
  font-weight: normal;
  font-size: 24px;
  line-height: 38px;
  color: black;
`

export const SubTitle = styled.h1`
  font-family: inherit;
  font-weight: normal;
  font-size: 12px;
  line-height: 30px;
  color: var(--light-color);
`

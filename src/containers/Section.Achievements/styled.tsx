import styled from 'styled-components'
import { device } from '@breakpoints/device'

export const Section = styled.section`
  margin-top: 70px;
  background-color: #fafafa;
  width: 100%;
  height: 660px;

  @media ${device.laptop} {
    margin-top: 150px;
  }
`

export const ContentBlock = styled.div`
  padding-top: 70px;

  width: 100%;

  text-align: center;

  @media ${device.laptop} {
    padding-top: 150px;
    padding-left: 50px;

    max-width: 490px;

    text-align: left;
  }
`

export const Title = styled.h1`
  font-family: inherit;
  font-weight: normal;
  font-size: 41px;
  line-height: 50px;
  color: black;
`

export const SubTitle = styled.p`
  margin-top: 35px;

  font-family: inherit;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: var(--light-color);
`

export const WrapperAwards = styled.div`
  margin-top: 45px;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  & > img {
    margin: 10px;
  }

  @media ${device.tablet} {
    & > img {
      margin: 0px;
    }
  }
`

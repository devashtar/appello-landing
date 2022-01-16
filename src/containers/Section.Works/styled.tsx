import styled from 'styled-components'
import { device } from '@breakpoints/device'

export const Section = styled.section`
  margin-top: 150px;
  padding-top: 1px;

  background: linear-gradient(
    to bottom,
    var(--darkblue-color) 880px,
    transparent 880px
  );
`

export const FlexWrapper = styled.div`
  margin-top: 50px;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media ${device.tablet} {
    margin-top: 100px;
    padding: 0px;
    flex-wrap: no-wrap;
  }
`

export const FlexItem = styled.div`
  margin: 20px 10px;

  width: 170px;
  height: 120px;

  text-align: center;

  border-bottom: 1px solid white;

  @media ${device.laptop} {
    margin-top: 0px;
    padding: 0px;

    text-align: left;

    border-bottom: none;
  }
`

export const FlexItemTitle = styled.h1`
  font-family: inherit;
  font-weight: normal;
  font-size: 42px;
  line-height: 50px;
  color: white;
`

export const FlexItemSubTitle = styled.p`
  margin-top: 15px;

  font-family: inherit;
  font-weight: normal;
  font-size: 11px;
  line-height: 30px;
  color: white;
`

export const FlexCardsWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const CardItem = styled.div`
  max-width: 545px;
  margin-top: 30px;
  padding: 10px;
  background-color: white;
  box-shadow: 0px 1px 3px 1px rgba(80, 80, 80, 0.1);
`

export const Img = styled.img`
  width: 100%;
  max-height: 402px;
`

export const CardContent = styled.div`
  padding: 0px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const CardTitle = styled.h3`
  font-family: inherit;
  font-weight: normal;
  font-size: 24px;
  line-height: 38px;
  color: black;
`

export const CardSubTitle = styled.p`
  margin-top: 25px;

  font-family: inherit;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: var(--light-color);
`

export const WrapperBtn = styled.div`
  text-align: center;
  margin-top: 40px;
`

import styled from 'styled-components'
import { device } from '@breakpoints/device'

export const Section = styled.section``

export const BrandsWrapper = styled.div`
  background-color: #fafafa;
  margin-top: 70px;
  width: 100%;
  min-height: 380px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

export const BrandItem = styled.div`
  padding: 10px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    display: block;
    width: 100%;
  }

  @media ${device.tablet} {
    width: 25%;
    & > img {
      display: inline;
      width: auto;
    }
  }
`

export const FlexCitiesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const ItemCityCard = styled.div<{ imageURL: string }>`
  margin-top: 30px;
  max-width: 365px;
  width: 100%;
  height: 237px;

  padding: 29px 20px;

  background: url(${(props) => props.imageURL}) no-repeat;
  background-position: top 106px right 24px;

  box-shadow: 0px 0px 3px 1px rgba(80, 80, 80, 0.3);
`

export const CardDescription = styled.p`
  font-family: inherit;
  font-weight: normal;
  font-size: 15px;
  line-height: 30px;
  color: var(--light-color);
`

export const NameCity = styled.p`
  font-family: inherit;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: black;
`

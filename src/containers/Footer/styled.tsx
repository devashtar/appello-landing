import { device } from '@breakpoints/device'
import styled from 'styled-components'

export const Footer = styled.footer`
  background-color: var(--darkblue-color);
  margin-top: 70px;
  padding-top: 50px;

  @media ${device.tablet} {
    margin-top: 150px;
    padding-top: 100px;
  }
`

export const TitleBlock = styled.div`
  width: 100%;
  height: 110px;

  border-bottom: 1px solid #868699;
`

export const InnerTitleFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.p`
  font-family: inherit;
  font-weight: normal;
  font-size: 15px;
  line-height: 30px;
  color: white;
`

export const WrapperContentBlock = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media ${device.tablet} {
    margin-top: 100px;
  }
`

export const ItemContentBlock = styled.div`
  margin-top: 40px;
  max-width: 320px;
  width: 100%;

  margin-left: 10px;
`

export const ItemTitle = styled.p`
  font-family: inherit;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: white;
`

export const ItemList = styled.ul`
  margin-top: 20px;
  list-style-type: none;
`

export const ItemElem = styled.li`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;

  border-bottom: 1px solid #868699;
`

export const ItemText = styled.p`
  font-family: inherit;
  font-weight: normal;
  font-size: 15px;
  line-height: 28px;
  color: white;
`

export const SocialBlock = styled.div`
  margin-top: 60px;
  width: 100%;
  min-height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  border-top: 1px solid #868699;

  @media ${device.mobileM} {
    justify-content: space-between;
  }

  @media ${device.tablet} {
    margin-top: 100px;
  }
`

export const Text = styled.p`
  font-family: inherit;
  font-weight: normal;
  font-size: 15px;
  line-height: 30px;
  color: white;
  &:last-child {
    margin-left: 10px;
  }
`

export const SocialList = styled.ul`
  list-style-type: none;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  & > *:not(:first-child) {
    margin-left: 20px;
  }
`

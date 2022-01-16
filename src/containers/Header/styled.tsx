import styled from 'styled-components'
import { device } from '@breakpoints/device'

export const Header = styled.header<{ bgURL: string }>`
  background: center / cover no-repeat #0e0e33 url(${(props) => props.bgURL});
  padding-top: 55px;

  width: 100%;
  height: 100vh;
`

export const NavMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  display: none;
  width: 91px;
  height: 30px;

  @media ${device.mobileM} {
    display: block;
  }
`

export const Burger = styled.div`
  position: relative;
  width: 60px;
  height: 40px;

  border: 2px solid white;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 6px 1px rgba(255, 255, 255, 0.4);
  }

  @media ${device.laptop} {
    display: none;
  }

  & > span {
    --height: 2px;
    --width: 30px;

    position: relative;
    background-color: white;
    width: var(--width);
    height: var(--height);

    &:before,
    &:after {
      position: absolute;
      content: '';
      background-color: white;
      display: block;
      width: var(--width);
      height: var(--height);
    }

    &:before {
      top: -10px;
    }

    &:after {
      top: 10px;
    }
  }
`

export const Nav = styled.nav`
  list-style-type: none;

  max-width: 490px;
  width: 100%;

  display: none;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;

  @media ${device.laptop} {
    display: flex;
  }
`

export const InnerNavBlock = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
`

export const ItemLink = styled.a`
  font-family: inherit;
  font-size: 13px;
  font-weight: normal;
  line-height: 30px;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const NavButton = styled.button`
  background-color: transparent;
  margin-left: 26px;
  padding: 12px 15px;

  white-space: nowrap;
  font-family: inherit;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: white;

  border: 1px solid white;
  border-radius: 3px;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 6px 1px rgba(255, 255, 255, 0.4);
  }
`

export const TitleBlock = styled.div`
  margin-top: 145px;
  max-width: 100%;

  text-align: center;

  @media ${device.tablet} {
    text-align: left;
    max-width: 440px;
  }
`

export const Title = styled.h1`
  font-family: inherit;
  font-weight: normal;
  font-size: 42px;
  line-height: 50px;
  color: white;
`

export const SubTitle = styled.p`
  margin-top: 35px;

  font-family: inherit;
  font-weight: normal;
  font-size: 11px;
  line-height: 30px;
  color: white;
`

export const BtnWrapper = styled.div`
  margin-top: 35px;
`

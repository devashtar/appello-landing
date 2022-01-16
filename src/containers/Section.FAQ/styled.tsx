import styled from 'styled-components'
import { device } from '@breakpoints/device'

export const Section = styled.section`
  background-color: #fafafa;
  padding-top: 70px;
  padding-bottom: 70px;

  @media ${device.tablet} {
    padding-top: 150px;
    padding-bottom: 150px;
  }
`

export const List = styled.ul`
  list-style-type: none;
  margin-top: 75px;
  width: 100%;
`

export const Item = styled.li`
  min-height: 100px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid var(--lighter-color);
`

export const Title = styled.p`
  font-family: inherit;
  font-weight: normal;
  font-size: 19px;
  line-height: 24px;
  color: black;
`

export const Btn = styled.button`
  background-color: transparent;
  margin-left: 20px;

  width: 30px;
  height: 30px;

  text-align: center;
  font-family: inherit;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;

  border: 1px solid var(--lighter-color);
  border-radius: 50%;

  cursor: pointer;
`

import styled from 'styled-components'
import { device } from '@breakpoints/device'

export const Section = styled.section`
  background-color: transparent;
  width: 100%;
`

/* ============= Surface Block ============= */
export const SurfaceBlock = styled.div`
  background-color: white;
  position: relative;
  top: -70px;

  padding: 50px 25px;
  width: 100%;

  height: 600px;

  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 2px 2px 1px rgba(80, 80, 80, 0.05);

  @media ${device.laptop} {
    height: 350px;
  }
`

export const InnerSurfaceBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: row;
  }
`

export const InnerLeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  @media ${device.laptop} {
    padding: 0px 15px;
    width: 403px;

    align-items: flex-start;

    text-align: left;

    border-right: 1px solid #e8e8e8;
  }
`

export const ILBTitle = styled.h2`
  max-width: 320px;

  font-family: inherit;
  font-weight: normal;
  font-size: 26px;
  line-height: 38px;
  color: black;
`

export const ILBSubTitle = styled.p`
  max-width: 335px;

  font-family: inherit;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: var(--light-color);
`

export const InnerRightBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px 20px;

  @media ${device.mobileM} {
    gap: 30px 60px;
  }

  @media ${device.mobileM} {
    gap: 40px 80px;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media ${device.laptop} {
    margin-left: 80px;
    gap: 50px 100px;
  }
`

export const IRBGridItem = styled.p`
  align-self: center;

  font-family: inherit;
  font-weight: normal;
  font-size: 11px;
  line-height: 30px;
  color: var(--light-color);
`

/* ============= Content Block ============= */
export const Menu = styled.div`
  margin-top: 85px;

  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;
  gap: 20px;

  @media ${device.tablet} {
    gap: 100px;
  }

  justify-content: center;
`

export const ItemMenu = styled.p`
  font-family: inherit;
  font-weight: normal;
  font-size: 20px;
  line-height: 38px;

  cursor: pointer;

  &.active {
    color: var(--blue-color);
  }

  @media ${device.tablet} {
    font-size: 24px;
  }
`

export const ListItemsWrapper = styled.div`
  margin-top: 50px;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 50px;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 260px 260px;
    gap: 50px;
  }
`

export const Item = styled.div`
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  border: 1px solid #e8e8e8;
`

export const ItemTitle = styled.h3`
  font-family: inherit;
  font-weight: normal;
  font-size: 19px;
  line-height: 28px;
  color: black;
`

export const ItemSubTitle = styled.p`
  margin-top: 23px;

  font-family: inherit;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: var(--light-color);
`

export const WrapperBtn = styled.div`
  margin-top: 50px;
  text-align: center;
`

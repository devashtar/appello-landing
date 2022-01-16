import styled from 'styled-components'

export const Section = styled.section``

export const WrapperList = styled.div`
  margin-top: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ListOverflow = styled.div`
  position: relative;
  width: 80%;
  height: 60px;

  overflow: hidden;
`

export const ListRelative = styled.div<{ leftCoords: number }>`
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  top: 0;
  left: ${(props) => props.leftCoords}px;
  transition: all ease-in-out 0.3s;
`

export const ItemBtn = styled.button`
  background-color: transparent;
  margin: 0 10px;
  width: 200px;
  height: 60px;

  text-align: center;
  font-family: inherit;
  font-weight: normal;
  font-size: 15px;
  line-height: 30px;
  color: var(--blue-color);

  border: 1px solid var(--light-color);
  border-radius: 50px;

  cursor: pointer;
`

/* left: false, right: true */
export const Btn = styled.button<{ direction: boolean }>`
  position: relative;
  background-color: transparent;
  width: 60px;
  height: 60px;

  border: 1px solid var(--lighter-color);
  border-radius: 50%;

  cursor: pointer;

  &::after {
    position: absolute;
    top: calc(50% - 5px);
    left: calc(50% - 5px);

    display: block;
    content: '';

    width: 10px;
    height: 10px;

    border-left: 1px solid black;
    border-bottom: 1px solid black;

    transform: rotate(${(props) => (props.direction ? '-135' : '45')}deg);
  }
`

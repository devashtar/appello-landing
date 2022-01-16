import styled from 'styled-components'

export const Section = styled.section`
  padding: 80px 0px;
  width: 100%;
  max-height: 1036px;
  height: 100%;
`

export const BGBLock = styled.div<{ bgURL: string }>`
  background: center / cover no-repeat url(${(props) => props.bgURL});
  height: 870px;
`

export const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const Form = styled.form`
  background-color: white;
  position: relative;
  bottom: -30px;

  padding: 30px 50px;

  max-width: 600px;
  width: 100%;

  box-shadow: 0px 0px 3px 1px rgba(80, 80, 80, 0.1);
`

export const FormTitle = styled.h1`
  max-width: 325px;

  font-family: inherit;
  font-weight: normal;
  font-size: 25px;
  line-height: 38px;
  color: black;
`

export const Input = styled.input`
  background-color: white;
  margin-top: 125px;
  padding-left: 15px;

  width: 100%;
  height: 50px;

  border: 1px solid #e8e8e8;
  border-radius: 4px;

  font-family: inherit;
  font-weight: normal;
  color: #333333;

  &:focus {
    border: 1px solid var(--blue-color);
  }

  outline: none;
`

export const TextArea = styled.textarea`
  background-color: white;
  margin-top: 30px;
  padding-top: 10px;
  padding-left: 15px;

  width: 100%;
  height: 120px;

  border: 1px solid #e8e8e8;
  border-radius: 4px;

  font-family: inherit;
  font-weight: normal;
  color: #333333;

  &:focus {
    border: 1px solid var(--blue-color);
  }

  outline: none;
  resize: none;
`

export const WrapperBtn = styled.div`
  margin-top: 40px;
  text-align: center;
`

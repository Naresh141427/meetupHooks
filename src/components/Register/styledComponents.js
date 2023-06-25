import styled from 'styled-components'

export const MainSection = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FormContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
`

export const RegisterImg = styled.img``

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 510px;
  flex: 1;

  padding: 40px;
`

export const FormHeader = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 30px;
`
export const Label = styled.label`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 15px;
  margin-bottom: 5px;
`
export const Input = styled.input`
  padding: 8px;

  color: #7b8794;
  font-family: 'Roboto';
  font-size: 15px;
  width: 60%;
  border: 2px solid #cbd5e1;
  margin-bottom: 20px;

  outline: none;
`

export const Select = styled.select`
  padding: 10px;
  width: 60%;
  border: 2px solid #cbd5e1;
  font-weight: 500;
  outline: none;

  font-size: 15px;
`

export const Option = styled.option`
  font-family: 'Roboto';
  font-size: 15px;
`

export const RegisterNowButton = styled.button`
  color: #fff;
  font-family: 'Roboto';
  font-size: 15px;

  background-color: #3b82f6;
  border: none;
  border-radius: 8px;

  cursor: pointer;
  outline: none;
  padding: 10px 20px;
  margin-top: 30px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 16px;
`

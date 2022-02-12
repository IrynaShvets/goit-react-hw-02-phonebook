import styled from 'styled-components';

export const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  width: 500px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  border: 0;
  border-radius: 7px;
  margin-bottom: 40px;
  padding: 20px;
  box-shadow: 5px 6px 4px #57071e;
  background-color: rgb(240, 214, 221);
  &:hover {
    box-shadow: 1px 2px 1px #b4526e, 3px 5px 4px #b63257, 5px 11px 8px #bb0b3d,
      10px 20px 15px #57071e;
    transition: all 400ms cubic-bezier(0.4, 0, 0.3, 1);
  }
`;

export const Label = styled.label`
  display: inline-flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  color: #57071e;
  font-size: 25px;
  font-weight: 500;
  text-shadow: 1px 1px 2px #57071e;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 30px;
  outline: none;
  border: 0;
  border-radius: 4px;
  margin-bottom: 20px;
  color: #57071e;
  font-size: 20px;
  box-shadow: 5px 6px 4px #57071e;

  &:hover,
  &:focus {
    outline: 1px solid #bb0b3d;
    transition: outline 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const InputBottom = styled(Input)`
  margin-bottom: 40px;
`;

export const Button = styled.button`
  display: block;
  width: 50%;
  border-radius: 10px;
  border: 1px solid transparent;
  padding: 5px 10px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: #57071e;
  background-color: #fff;
  box-shadow: 5px 6px 4px #57071e;
  text-shadow: 2px 1px 2px #57071e;

  &:hover {
    color: #fff;
    background-color: #bb0b3d;
    box-shadow: 1px 2px 1px #b4526e, 3px 5px 4px #b63257, 5px 11px 8px #bb0b3d,
      10px 20px 15px #57071e;
    transition: all 400ms cubic-bezier(0.4, 0, 0.3, 1);
  }
`;

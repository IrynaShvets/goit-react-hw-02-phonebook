import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  width: 500px;
  height: auto;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border: 0;
  border-radius: 7px;
  background-color: rgb(240, 214, 221);
  box-shadow: 5px 6px 4px #57071e;

  &:hover {
    box-shadow: 1px 2px 1px #b4526e, 3px 5px 4px #b63257, 5px 11px 8px #bb0b3d,
      10px 20px 15px #57071e;
    transition: all 400ms cubic-bezier(0.4, 0, 0.3, 1);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #57071e;
  font-size: 30px;
  font-weight: 600;
  text-shadow: 2px 1px 2px #57071e;
`;

export const Input = styled.input`
  width: 460px;
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

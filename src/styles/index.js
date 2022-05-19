import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rosybrown;
  padding: 10px;
`;

export const Input = styled.input`
  padding: 5px;
  outline: none;
  border: 1px solid white;
  border-radius: 5px;
  
  :focus {
    outline: none;
  }
`;

export const Label = styled.div`
  font-family: monospace;
  font-size: 14px;
  margin-bottom: 4px;
`;

export const Button = styled.button`
  padding: 8px;
  outline: none;
  border: 1px solid white;
  border-radius: 5px;
  transition: 0.5s;
  
  &:focus {
    outline: none;
  }
  
  &:hover {
    background-color: darkgrey;
  }
`;

export const InputSection = styled.div`

`;

export const Overlay = styled.div`
  position: fixed;
  background-color: #e5e5e5;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  background-color: white;
  border: 2px solid gainsboro;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 96px;
`;

export const Text = styled.div`
  font-family: monospace;
  font-size: 42px;
  margin-bottom: 10px;
`;

export const Select = styled.select`
  padding: 20px;
  border: 1px solid gainsboro;
  border-radius: 5px;
  
  :focus {
    outline: none;
  }
`;

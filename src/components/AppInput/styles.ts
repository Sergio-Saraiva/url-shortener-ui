import styled from "styled-components";

export const Styles = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  margin-bottom: 1rem;

  label {
    margin-bottom: 0.5rem;
  }

  input {
    font-family: "Roboto", sans-serif;
    border: 1px solid #e4e4e7;
    border-radius: 4px;
    padding-right: 12px;
    padding-left: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  input:focus {
    outline: 1px solid #a1a1aa;
    outline-offset: 1px;
  }
`;

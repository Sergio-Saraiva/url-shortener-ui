import styled from "styled-components";

export const Styles = styled.div`
  width: 400px;
  background-color: #f3f4f6;
  border-radius: 10px;
  padding: 24px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .benefit-item {
    display: flex;
    flex-direction: row;
    align-items: self-start;
    justify-content: space-between;
    gap: 14px;
    margin-top: 1rem;

    .benefit-item-header {
      svg {
        fill: #3ccb71;
      }
    }

    .benefit-item-body {
      h3 {
        font-weight: 500;
        margin-bottom: 0.2rem;
      }
    }
  }
`;

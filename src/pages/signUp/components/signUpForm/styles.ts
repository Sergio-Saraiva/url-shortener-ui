import styled from "styled-components";

export const Styles = styled.div`
  margin-right: 3rem;
  width: 400px;
  .signup-form {
    background-color: #fff;
    padding: 1rem;
    border-radius: 10px;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    .form-header {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        font-weight: bold;
        margin-bottom: 2rem;
      }

      span {
        color: #6b7280;
      }

      span:nth-child(3) {
        text-decoration: underline;
        margin-bottom: 2rem;
      }
    }

    .form-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
      span {
        color: #6b7280;
      }

      .singin-link {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

import styled from "styled-components";

export const Component = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  input {
    background-color: ${({ theme }) => theme.colors.gray500};
    color: ${({ theme }) => theme.colors.gray300};
    width: 100%;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.gray700};
    border-radius: 8px;
  }

  button {
    background-color: ${({ theme }) => theme.colors.blueDark};
    padding: 0 1rem;
    border: 0;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    line-height: 1.6;

    transition: background-color ${({ theme }) => theme.transitions.fast};

    &:hover:not([disabled]) {
      background-color: ${({ theme }) => theme.colors.blue};
    }
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

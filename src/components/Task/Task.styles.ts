import styled from "styled-components";

type TaskStyleProps = {
  taskComplete: boolean;
};

export const Wrapper = styled.li<TaskStyleProps>`
  background-color: ${({ theme }) => theme.colors.gray500};
  margin: 0.5rem auto;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  button {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.gray300};
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 0.2rem;
    box-sizing: initial;
    line-height: 0;
    cursor: pointer;
  }

  span {
    flex: 1;
    color: ${({ theme, taskComplete }) =>
      taskComplete ? theme.colors.gray300 : theme.colors.gray100};
    font-size: 1rem;
    line-height: 1.6;
    text-decoration: ${({ taskComplete }) => taskComplete && "line-through"};
  }

  svg {
    width: 24px;
    height: 24px;
  }

  .complete-icon {
    color: ${({ theme, taskComplete }) =>
      taskComplete ? theme.colors.purpleDark : theme.colors.blue};
  }

  .delete-icon:hover,
  .delete-icon:focus {
    background-color: ${({ theme }) => theme.colors.gray400};
    color: ${({ theme }) => theme.colors.danger};
    transition: all ${({ theme }) => theme.transitions.fast};
  }
`;

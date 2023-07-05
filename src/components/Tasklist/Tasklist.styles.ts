import styled from "styled-components";

export const Component = styled.div``;

export const Wrapper = styled.div`
  margin-top: 4rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.blue};
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }

  div + div p {
    color: ${({ theme }) => theme.colors.purple};
  }

  span {
    background-color: ${({ theme }) => theme.colors.gray400};
    padding: 2px 8px;
    border-radius: 12px;
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    font-size: 0.75rem;
  }
`;

export const Display = styled.div`
  height: 18rem;
  padding-right: 1rem;
  margin-top: 1.5rem;
  overflow-y: scroll;

  ul {
    list-style-type: none;
  }
`;

export const EmptyDisplay = styled(Display)`
  color: ${({ theme }) => theme.colors.gray300};
  border: 1px solid transparent;
  border-radius: 8px;
  border-top-color: ${({ theme }) => theme.colors.gray400};
  overflow-y: hidden;

  padding-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  /* gap: 0.5rem; */

  svg {
    width: 64px;
    height: 64px;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fonts.weight.normal};
    line-height: 1.6;
  }
`;

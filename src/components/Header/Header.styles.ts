import styled from "styled-components";

export const Component = styled.div``;

export const Wrapper = styled.div``;

export const Heading = styled.header`
  background-color: ${({ theme }) => theme.colors.gray700};
  height: 10rem;
  padding: 1.25rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  img {
    width: 32px;
    height: 32px;
  }

  span {
    color: ${({ theme }) => theme.colors.blue};
    font-size: 2rem;
    line-height: 1.6;
    font-weight: ${({ theme }) => theme.fonts.weight.extraBold};

    & ~ span {
      color: ${({ theme }) => theme.colors.purpleDark};
    }
  }
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  };

  html {
    @media (max-width: 768px) {
      font-size: 87.5%;
      transition: all ${({ theme }) => theme.transitions.fast} linear;
    };
  };

  body {
    background: ${({ theme }) => theme.colors.gray600};
		color: ${({ theme }) => theme.colors.gray100};
    -webkit-font-smoothing: antialiased;
  };

	body, input, textarea, button {
    font-family: ${({ theme }) => theme.fonts.family.inter && "sans-serif"};
    font-weight: ${({ theme }) => theme.fonts.weight.normal};
    font-size: 1rem;
  };

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  };

  button {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gray100};
  };

  a {
    color: unset;
    text-decoration: none;
  };

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.purpleDark};
  };

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  };
`;

import rocketLogo from "../../common/assets/svgs/rocket-logo.svg";

import { Component, Wrapper, Heading } from "./Header.styles";

export const Header: React.FC = () => {
  return (
    <>
      <Component>
        <Wrapper>
          <Heading>
            <img src={rocketLogo} alt="todo" />
            <div>
              <span>to</span>
              <span>do</span>
            </div>
          </Heading>
        </Wrapper>
      </Component>
    </>
  );
};

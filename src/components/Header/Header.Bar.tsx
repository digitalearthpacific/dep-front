import { useSession } from "components/auth/hooks/SessionContext";
import HeaderLink from "./components/HeaderLink";
import Feature from "components/Feature";
import Login from "components/auth/Login";
import Logout from "components/auth/Logout";
import {
  headerPipeStyle,
  innerHeaderStyle,
  logoImageStyle,
  logoLinkStyle,
  productNameStyle,
  rightAligned,
} from "./styles";
import { Stack, Text } from "@fluentui/react";

export const HeaderBar: React.FC = () => {
  const { status } = useSession();
  return (
    <Stack
      className={innerHeaderStyle}
      horizontal
      wrap
      verticalAlign="center"
      tokens={headerTokens}
    >
      <a
        className={logoLinkStyle}
        href="https://www.digitalearthpacific.org"
        aria-label="DEP"
      >
        <img
          alt=""
          className={logoImageStyle}
          src="images/dep_square.png"
          role="presentation"
          aria-hidden="true"
        />
      </a>
      <div className={headerPipeStyle}>|</div>

      <HeaderLink to="/">
        <Text block variant="large" className={productNameStyle}>
          Digital Earth Pacific
        </Text>
      </HeaderLink>

      <HeaderLink isNav to="/applications">
        Regional Products
      </HeaderLink>

      <HeaderLink isNav to="/explore">
        Global Data Explorer
      </HeaderLink>

       
      <HeaderLink isNav to="/library">
        Library
      </HeaderLink>
      

      <HeaderLink external to="https://dep-staging.westeurope.cloudapp.azure.com/">
        Analytical Hub
      </HeaderLink>

      {/* 
      <HeaderLink isNav to="/applications">
        Applications
      </HeaderLink>
      */}

       {/*
      <HeaderLink external to="https://github.com/digitalearthpacific/depal">
        Trainings & Workshop
      </HeaderLink>
      */}

      <HeaderLink isNav to="/community">
        Community
      </HeaderLink>

      <HeaderLink isNav to="/news">
        Press
      </HeaderLink>

      <HeaderLink isNav to="/governance">
        Governance
      </HeaderLink>
      

      <div className={rightAligned}>
        <Stack horizontal verticalAlign="center">
          Pacific Community (SPC)
        </Stack>
      </div>


      {/*
      <div className={rightAligned}>
        <Stack horizontal verticalAlign="center" tokens={authSectionTokens}>
          {!status.isLoggedIn && (
            <HeaderLink asButton to="/account/request">
              Request access
            </HeaderLink>
          )}
          <Feature name="login">
            <Login />
            <Logout />
          </Feature>
        </Stack>
      </div>
    */}

    </Stack>
  );
};

const headerTokens = { childrenGap: "10px 21px" };
const authSectionTokens = { childrenGap: 4 };

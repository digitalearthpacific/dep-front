import {
  getTheme,
  IconButton,
  Panel,
  PanelType,
  Stack,
  StackItem,
  Text,
} from "@fluentui/react";
import { useBoolean } from "@fluentui/react-hooks";
import HeaderLink from "./components/HeaderLink";
import {
  headerPipeStyle,
  logoImageStyle,
  logoLinkStyle,
  productNameStyle,
  smallHeaderStyle,
} from "./styles";

export const HeaderOverflow: React.FC = () => {
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);

  return (
    <Stack
      className={smallHeaderStyle}
      horizontal
      tokens={headerTokens}
      horizontalAlign="space-between"
    >
      <Stack horizontal>
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
      </Stack>
      <StackItem>
        <IconButton
          ariaLabel="Navigation overflow menu"
          iconProps={overflowIconProps}
          onClick={openPanel}
        />
        <Panel
          isLightDismiss
          isOpen={isOpen}
          onDismiss={dismissPanel}
          type={PanelType.custom}
          customWidth="200px"
        >
          <Stack tokens={panelLinkTokens} verticalAlign="start">
            <HeaderLink align="start" isNav to="/applications">
              Regional Products
            </HeaderLink>
            <HeaderLink align="start" isNav to="/explore">
              Global Data Explorer
            </HeaderLink>
            <HeaderLink align="start" isNav to="/library">
              Library
            </HeaderLink>
            <HeaderLink align="start" isNav external to="https://dep-staging.westeurope.cloudapp.azure.com/">
              Analytical Hub
            </HeaderLink>
            <HeaderLink align="start" isNav to="/community">
              Community
            </HeaderLink>
            <HeaderLink align="start" isNav to="/news">
              Press
            </HeaderLink>
            <HeaderLink align="start" isNav to="/governance">
              Governance
            </HeaderLink>
          </Stack>
        </Panel>
      </StackItem>
    </Stack>
  );
};

const theme = getTheme();

const overflowIconProps = {
  iconName: "GlobalNavButton",
  styles: {
    root: {
      fontSize: 20,
      height: 20,
      lineHeight: 20,
      color: theme.semanticColors.bodyText,
    },
  },
};
const panelLinkTokens = { childrenGap: 15 };
const headerTokens = { childrenGap: "10px 21px" };

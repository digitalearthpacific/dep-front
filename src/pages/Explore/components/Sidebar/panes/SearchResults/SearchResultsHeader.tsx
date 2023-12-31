import {
  FontSizes,
  FontWeights,
  IStackTokens,
  Spinner,
  SpinnerSize,
  Stack,
  Text,
} from "@fluentui/react";

import { IStacSearchResult } from "types/stac";
import { useExploreSelector } from "pages/Explore/state/hooks";
import { loadingStyle } from "./SearchResultsPane";
import { selectCurrentMosaic } from "pages/Explore/state/mosaicSlice";
import PinLayer from "../../PinLayer";
import { SearchResultHeaderMenu } from "./SearchResultHeaderMenu";

interface SearchResultsHeaderProps {
  results: IStacSearchResult | undefined;
  isLoading: boolean;
}

const SearchResultsHeader = ({ results, isLoading }: SearchResultsHeaderProps) => {
  const { collection } = useExploreSelector(selectCurrentMosaic);

  if (results === undefined) return null;

  const returned = results.features.length;
  const hasNextLink = results.links.find(l => l.rel === "next");
  const plural = returned === 1 ? "item" : "items";
  const preamble = hasNextLink ? "the first" : "";

  const style = {
    root: {
      fontSize: "12px",
      ...loadingStyle(isLoading),
    },
  };

  const withResults = (
    <Text styles={style}>
      Showing {preamble} {returned} {plural} that matched your filter.
    </Text>
  );
  const withoutResults = (
    <Text styles={style}>
      Sorry, no items matched your filter. Try adjusting the query parameters or
      expand the map area.
    </Text>
  );
  const resultsText = returned !== 0 ? withResults : withoutResults;

  return (
    <Stack
      horizontal
      horizontalAlign="space-between"
      tokens={tokens}
      styles={styles}
    >
      <Stack tokens={tokens}>
        <Text styles={headerStyles}>{collection?.title}</Text>
        <Stack
          horizontal
          tokens={tokens}
          horizontalAlign="space-between"
          verticalAlign="center"
        >
          {resultsText}
          {isLoading && <Spinner size={SpinnerSize.xSmall} />}
        </Stack>
      </Stack>
      <Stack horizontal verticalAlign="start">
        <PinLayer />
        <SearchResultHeaderMenu />
      </Stack>
    </Stack>
  );
};

export default SearchResultsHeader;

const tokens: IStackTokens = {
  childrenGap: 5,
};

const styles = {
  root: { padding: "14px 5px 14px 5px" },
};

const headerStyles = {
  root: { fontSize: FontSizes.medium, fontWeight: FontWeights.bold },
};

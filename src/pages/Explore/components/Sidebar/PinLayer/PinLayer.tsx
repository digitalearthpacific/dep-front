import { IconButton } from "@fluentui/react";
import { useExploreDispatch, useExploreSelector } from "pages/Explore/state/hooks";
import {
  pinCurrentMosaic,
  selectCurrentMosaic,
} from "pages/Explore/state/mosaicSlice";

export const PinLayer = () => {
  const dispatch = useExploreDispatch();
  const { isPinned } = useExploreSelector(selectCurrentMosaic);
  const { previewMode } = useExploreSelector(s => s.detail);

  const handleClick = () => {
    dispatch(pinCurrentMosaic());
  };

  const title = isPinned
    ? "Stop editing and return to pinned layers"
    : "Pin this layer to the map and perform a new search";

  const disabled = previewMode.enabled;
  return (
    <IconButton
      title={title}
      aria-label={title}
      iconProps={{ iconName: isPinned ? "PencilReply" : "FluentPinOutline" }}
      onClick={handleClick}
      disabled={disabled}
      data-cy="pin-layer-header-button"
    />
  );
};

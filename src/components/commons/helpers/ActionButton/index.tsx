import { Tooltip, Menu, IconButton, MenuItem } from '@material-ui/core';
import { BaseCSSProperties } from '@material-ui/styles';
import { MouseEvent, MouseEventHandler, useState } from 'react';
import { actions } from './constants';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ActionIcon from './ActionIcon';

type ActionButton = {
  name: keyof typeof actions;
  action: MouseEventHandler<unknown>;
  disabled?: boolean;
  info?: string;
  icon?: string;
  style?: BaseCSSProperties | null;
  position?:
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'bottom-end'
    | 'bottom-start'
    | 'left-end'
    | 'left-start'
    | 'right-end'
    | 'right-start'
    | 'top-end'
    | 'top-start'
    | undefined;
  value?: string;
  iconComponent?: string;
};

type Props = {
  buttonsArray: Array<ActionButton>;
  limit: number;
};
const ActionButtons = (props: Props): JSX.Element => {
  const { buttonsArray, limit = null } = props;
  const [showOptions, setShowOptions] = useState<null | HTMLElement>(null);

  const handleClose = () => {
    setShowOptions(null);
  };

  const onClickMenuItem = (
    event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
    action: MouseEventHandler<unknown>
  ) => {
    action(event);
    setShowOptions(null);
  };

  const handleClickOptions = (event: MouseEvent<HTMLButtonElement>) => {
    setShowOptions(event.currentTarget);
  };

  const initDefaults = (button: ActionButton): ActionButton => {
    const tempButton = { ...button };
    const action = actions[button.name];
    if (action) {
      if (!button.info) {
        tempButton.info = action.info;
      }
      if (!button.icon) {
        tempButton.iconComponent = action.icon;
      }
    }

    return tempButton;
  };

  const items: JSX.Element[] | null = [];
  const buttons: JSX.Element[] | null = [];

  // limit length = 2
  let limitIcons = limit;
  if (!limitIcons) {
    limitIcons = 2;
  }

  let moreButton;
  let tempButton;

  buttonsArray.forEach((button, index) => {
    tempButton = initDefaults(button);

    const { action, info, position } = tempButton;
    if (limitIcons && index + 1 > limitIcons) {
      items.push(
        <MenuItem key={index} onClick={(e) => onClickMenuItem(e, action)}>
          {info}
        </MenuItem>
      );
    } else {
      buttons.push(
        <Tooltip title={info ? info : ''} key={info} placement={position}>
          <IconButton aria-label="info" onClick={action}>
            <ActionIcon icon={tempButton.iconComponent} />
          </IconButton>
        </Tooltip>
      );
    }
  });

  if (buttonsArray.length > limitIcons) {
    moreButton = (
      <>
        <Tooltip title={'Opciones'} placement={'bottom'}>
          <IconButton aria-label="info" onClick={handleClickOptions}>
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
        <Menu
          id="simple-menu"
          anchorEl={showOptions}
          keepMounted
          open={Boolean(showOptions)}
          onClose={handleClose}
        >
          {items}
        </Menu>
      </>
    );
  }

  return (
    <div>
      {buttons}
      {moreButton}
    </div>
  );
};

export default ActionButtons;

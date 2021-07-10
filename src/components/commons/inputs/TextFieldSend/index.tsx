import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { ChangeEvent, KeyboardEvent } from 'react';

type Props = {
  label?: string;
  value?: string;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
  onSubmit?(): void;
};

const TextFieldSend = (props: Props): JSX.Element => {
  const submit = () => {
    if (props.onSubmit) {
      props.onSubmit();
    }
  };
  const onKeyPress = (ev: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (ev.key === 'Enter' && props.value !== '') {
      submit();
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="text-field-input">{props.label}</InputLabel>
      <Input
        id="text-field-input"
        value={props.value}
        onChange={props.onChange}
        onKeyDown={onKeyPress}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={() => submit()} disabled={props.value === ''} edge="end">
              <SendIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
export default TextFieldSend;

import { styled, TextField, TextFieldProps } from '@mui/material';
import { rem } from './helpers';

export const LargeTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  '& .MuiOutlinedInput-input': {
    fontSize: rem(16),
    lineHeight: 26 / 16,
    padding: '8px 14px',
  },
  '& .MuiOutlinedInput-notchedOutline > legend > span': {
    fontSize: rem(16 * 0.8),
  },
  '& .MuiInputLabel-root': {
    fontSize: rem(16),
  },
}));

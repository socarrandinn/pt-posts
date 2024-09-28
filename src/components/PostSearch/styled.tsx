import { Button, IconButton, TextField, styled } from '@mui/material';

export const SearchInput = styled(TextField)(({ theme }) => ({
  position: 'relative',
  background: theme.palette.background.paper,
  fieldset: {
    borderStyle: 'none',
  },
  borderRadius: 4,
  [theme.breakpoints.up('md')]: {
    backgroundColor: theme.palette.background.paper,
    fieldset: {
      borderStyle: 'none',
    },
    borderRadius: 8,
  },
  width: '100%',
  '.MuiInputBase-input': {
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 16,
  },
  '.MuiOutlinedInput-root': {
    paddingLeft: 0,
    paddingRight: 0,
    background: theme.palette.background.paper,
  },
  '.MuiInputAdornment-root:first-of-type': {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'inline-flex',
    },
  },
  '.MuiInputAdornment-root': {
    marginLeft: 0,
    marginRight: 0,
  },
  '.MuiButton-root': {
    padding: '5px 10px',
  },
}));

export const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  flexGrow: 1,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(3),
    margin: 'auto',
  },
}));

export const SmallIconButton = styled(IconButton)(() => ({
  width: 16,
  height: 16,
  fontWeight: 'bold',
  marginRight: 8,
  svg: {
    with: 15,
    height: 15,
  },
}));

export const SearchButton = styled(Button)(() => ({
  minHeight: 40,
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  minWidth: 50,
  paddingLeft: 10,
  paddingRight: 10,
}));

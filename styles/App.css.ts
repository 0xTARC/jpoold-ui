import { style } from '@vanilla-extract/css';
import { violetDark, violetDarkA } from '@radix-ui/colors';
import { typography } from './typography.css';

export const Main = style({
  minHeight: '100vh',
  backgroundColor: violetDark.violet1,
});

export const Header = style({
  display: 'flex',
  height: '69px',
  width: '100%',
  paddingLeft: '4rem',
  paddingRight: '4rem',
  backgroundColor: violetDark.violet1,
});

export const SeparatorRoot = style({
  height: '2px',
  width: '100%',
  backgroundColor: violetDarkA.violetA5,
});

export const Nav = style({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const LeftNavbar = style({
  color: 'white',
});

export const BodyContainer = style({
  color: 'white',
});

export const Section = style({
  paddingLeft: '4rem',
  paddingRight: '4rem',
  paddingBottom: '1rem',
});

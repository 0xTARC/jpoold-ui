// This is a cool blog post https://garden.bradwoods.io/notes/css/typography-setup#addfontfiles
import {
  globalFontFace,
  style
} from '@vanilla-extract/css';

const VT323 = 'VT323';

export const fontFilePath =  'url("/fonts/VT323-Regular.ttf")';

globalFontFace(VT323, {
  src: fontFilePath,
});

export const font = style({
  fontFamily: VT323
});

// typescale based on tailwind https://tailwindcss.com/docs/font-size
export const typography = {
  VT323_Xs: style({
    fontFamily: VT323,
    fontSize: '0.75rem', // 12 px
    lineHeight: '1rem', // 16 px
  }),
  VT323_Sm: style({
    fontFamily: VT323,
    fontSize: '0.875rem', // 14 px
    lineHeight: '1.25rem', // 20 px
  }),
  VT323_Base: style({
    fontFamily: VT323,
    fontSize: '1rem', // 16px
    lineHeight: '1.5rem', // 24px
  }),
  VT323_Lg: style({
    fontFamily: VT323,
    fontSize: '1.125rem', // 18px
    lineHeight: '1.75rem', // 28px
  }),
  VT323_Xl: style({
    fontFamily: VT323,
    fontSize: '1.25rem', // 20px
    lineHeight: '1.75rem', // 28px
  }),
  VT323_2Xl: style({
    fontFamily: VT323,
    fontSize: '1.5rem', // 24px
    lineHeight: '2rem', // 32px
  }),
  VT323_3Xl: style({
    fontFamily: VT323,
    fontSize: '1.875rem', // 30px
    lineHeight: '2.25rem', // 36px
  }),
  VT323_4Xl: style({
    fontFamily: VT323,
    fontSize: '2.25rem', // 36px
    lineHeight: '2.5rem', // 40px
  }),
  VT323_5Xl: style({
    fontFamily: VT323,
    fontSize: '3rem', // 48px,
    lineHeight: 1,
  }),
  VT323_6Xl: style({
    fontFamily: VT323,
    fontSize: '3.75rem', // 60px,
    lineHeight: 1,
  }),
  VT323_7Xl: style({
    fontFamily: VT323,
    fontSize: '4.5rem', // 72px,
    lineHeight: 1,
  }),
  VT323_8Xl: style({
    fontFamily: VT323,
    fontSize: '6rem', // 96px,
    lineHeight: 1,
  }),
  VT323_9Xl: style({
    fontFamily: VT323,
    fontSize: '8rem', // 128px,
    lineHeight: 1,
  }),
};

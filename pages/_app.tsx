import { violetDark } from '@radix-ui/colors';
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
  Theme,
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { goerli, mainnet } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import '../styles/globals.css';

const { chains, provider, webSocketProvider } = configureChains(
  [
    mainnet,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [
    alchemyProvider({
      // This is Alchemy's default API key.
      // You can get your own at https://dashboard.alchemyapi.io
      apiKey:
        process.env.NEXT_PUBLIC_ALCHEMY_API_KEY ??
        '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC',
    }),
    publicProvider(),
  ]
);

const customTheme = {
  ...darkTheme(),
  colors: {
    modalBackground: violetDark.violet3,
    modalText: 'white',
    modalTextSecondary: 'white',
    modalTextDim: 'white',
    closeButton: 'white',
    connectButtonText: 'white',
    connectButtonBackground: violetDark.violet6,
  },
  fonts: {
    body: 'VT323', // wtf rainbow let me set font size
  },
} as Theme;

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={customTheme}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;

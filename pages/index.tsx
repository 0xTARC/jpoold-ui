import * as Separator from '@radix-ui/react-separator';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import aestheticPoolGif from '../public/imgs/aesthetic-pool-pixel.gif';
import {
  BodyContainer,
  Header,
  LeftNavbar,
  Main,
  Nav,
  Section,
  SeparatorRoot,
} from '../styles/App.css';
import { fontFilePath, typography } from '../styles/typography.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>RainbowKit App</title>
        <meta name='description' content='content' />
        {/*<link rel='icon' href='/favicon.ico' key='favicon' />*/}
      </Head>

      <main className={Main}>
        <header className={Header}>
          <nav className={Nav}>
            <div className={LeftNavbar}>
              <h1 className={typography.VT323_2Xl}>JPOOL&apos;d</h1>
            </div>
            <div>
              <ConnectButton />
            </div>
          </nav>
        </header>

        <Separator.Root
          decorative
          orientation='horizontal'
          className={SeparatorRoot}
        />

        <div className={`${BodyContainer} ${typography.VT323_2Xl}`}>
          <section className={Section}>
            <h2 className={typography.VT323_4Xl}>How work?</h2>
            <ol>
              <li>
                <h3>Contributors crowdfund an NFT 👬</h3>
                <p>Contribute ETH to a crowdfunding contract to buy NFT.</p>
                <p>
                  When we win, contributors get tokens representing fractions of
                  the NFT depending on how much of their ETH was used in the
                  purchase. You can reclaim whatever ETH was not spent.
                </p>
              </li>
              <li>
                <h3>
                  Yield is farmed by depositing the NFT into JPEG&apos;d 🌾
                </h3>
                <p>
                  A safe loan (15% LTV) of pETH is taken out against the NFT and
                  used to farm in the citadel.
                </p>
                <p>
                  You are able to claim your share of accumulated yield whenever
                  you want, but you must pay gas. Also, only 98% of your share
                  of earned yield will be paid out, with 2% left in the
                  strategy. This is to disincentivize early or frequent claims,
                  allowing the magic of compounding to do its thing.
                </p>
              </li>

              <li>
                <h3>Receive proceeds when the NFT is sold in the future 💰</h3>
                <p>
                  After the sale, all remaining yield can be claimed - just pay
                  gas.
                </p>
                <p>
                  If the NFT was sold for a profit (denominated in ETH), the
                  initial contributors can claim 80% of the profits, with the
                  remaining 20% of going to the JPOOL&apos;d DAO. If no ETH
                  profit, no fee. Buy together, baghold together.
                </p>
              </li>
            </ol>

            <p>In the future, the yield-bearing NFT fractions could be used to create a REIT-like instrument, used in Option vaults like Dopex SSOVs, used to unlock access to 3D avatars via Hologram, and many more cases</p>
          </section>

          <Separator.Root
            decorative
            orientation='horizontal'
            className={SeparatorRoot}
          />

          <section className={Section}>
            <h2>
              TODO: DAPP HERE... (follow{' '}
              <a href={'https://twitter.com/0xTARC'}>0xTARC</a> on twatter for
              updates)
            </h2>
            <h4>Check your <a href='https://discord.com/channels/906554976178933840/906915103809605752'>weenis</a> kid, you&apos;re gonna need it</h4>
          </section>

          <section className={Section}>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Image
                alt='ur mom kek'
                src={aestheticPoolGif}
                style={{
                  width: '100%',
                }}
              />
            </div>
          </section>
          <h4>p.s. bears r fuk</h4>
          <h4>p.p.s. inspired by masterworks, jpeg&apos;d & ur mom</h4>
          <h4>p.p.p.s. haha 🅱️eenis</h4>
        </div>
      </main>
    </div>
  );
};

export default Home;

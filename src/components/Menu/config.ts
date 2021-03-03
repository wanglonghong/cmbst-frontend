import { MenuEntry } from '@zealous4467/cmbstswapuikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.combust.finance',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.combust.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.combust.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/combustswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.combustswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://combustswap.medium.com',
      },
    ],
  },
]

export default config

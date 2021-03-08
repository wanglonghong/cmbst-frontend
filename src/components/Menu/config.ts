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
        label: 'Github',
        href: 'https://github.com/CombustFinance',
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@combust_finance',
      },
    ],
  },
]

export default config

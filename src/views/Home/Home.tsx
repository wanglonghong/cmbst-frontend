import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@zealous4467/cmbstswapuikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CombustStats from 'views/Home/components/CombustStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPYCard from 'views/Home/components/EarnAPYCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/pan-bg2.png'), url('/images/pan-bg.png');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const HeaderText = styled.div`
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="primary">
          {TranslateString(576, 'CombustSwap')}
        </Heading>
        <HeaderText>{TranslateString(578, 'A fair launch, more efficient, and sustainable PancakeSwap clone ')}</HeaderText>
        <HeaderText>{TranslateString(578, 'with optimized burn features to prevent token dillution.')}</HeaderText>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <CombustStats />
        </Cards>
        <CTACards>
          <EarnAPYCard />
          <EarnAssetCard />
          <TotalValueLockedCard />
        </CTACards>
      </div>
    </Page>
  )
}

export default Home

import React from 'react'
import * as Styled from './styled'
import { Container } from '@components/Container'
import { Title } from '@components/Title'
import { SubTitle } from '@components/SubTitle'

export const SectionPartners: React.FC<{}> = () => {
  return (
    <Styled.Section>
      <Container>
        <Title>We value our relationships</Title>
        <SubTitle>
          Over the past decade, Appello has established itself as a leader in
          the IT industry. Along the way, we have formed a number of valued
          relationships with both clients and business partners.
        </SubTitle>
        <Styled.BrandsWrapper>
          <Styled.BrandItem>
            <img
              src={process.env.PUBLIC_URL + '/images/brands/IMAGE.svg'}
              alt='brand logo'
            />
          </Styled.BrandItem>
          <Styled.BrandItem>
            <img
              src={process.env.PUBLIC_URL + '/images/brands/IMAGE-1.svg'}
              alt='brand logo'
            />
          </Styled.BrandItem>
          <Styled.BrandItem>
            <img
              src={process.env.PUBLIC_URL + '/images/brands/IMAGE-2.svg'}
              alt='brand logo'
            />
          </Styled.BrandItem>
          <Styled.BrandItem>
            <img
              src={process.env.PUBLIC_URL + '/images/brands/IMAGE-3.svg'}
              alt='brand logo'
            />
          </Styled.BrandItem>
          <Styled.BrandItem>
            <img
              src={process.env.PUBLIC_URL + '/images/brands/IMAGE-4.svg'}
              alt='brand logo'
            />
          </Styled.BrandItem>
          <Styled.BrandItem>
            <img
              src={process.env.PUBLIC_URL + '/images/brands/IMAGE-5.svg'}
              alt='brand logo'
            />
          </Styled.BrandItem>
          <Styled.BrandItem>
            <img
              src={process.env.PUBLIC_URL + '/images/brands/IMAGE-6.svg'}
              alt='brand logo'
            />
          </Styled.BrandItem>
          <Styled.BrandItem>
            <img
              src={process.env.PUBLIC_URL + '/images/brands/IMAGE-7.svg'}
              alt='brand logo'
            />
          </Styled.BrandItem>
        </Styled.BrandsWrapper>
        <Title marginTop={60}>Regional partnership</Title>

        <Styled.FlexCitiesWrapper>
          <Styled.ItemCityCard
            imageURL={process.env.PUBLIC_URL + 'images/partners/city.svg'}
          >
            <Styled.CardDescription>App Development</Styled.CardDescription>
            <Styled.NameCity>Sydney</Styled.NameCity>
          </Styled.ItemCityCard>
          <Styled.ItemCityCard
            imageURL={process.env.PUBLIC_URL + 'images/partners/city1.svg'}
          >
            <Styled.CardDescription>App Development</Styled.CardDescription>
            <Styled.NameCity>Brisbane</Styled.NameCity>
          </Styled.ItemCityCard>
          <Styled.ItemCityCard
            imageURL={process.env.PUBLIC_URL + 'images/partners/city2.svg'}
          >
            <Styled.CardDescription>App Development</Styled.CardDescription>
            <Styled.NameCity>Goldcoast</Styled.NameCity>
          </Styled.ItemCityCard>
          <Styled.ItemCityCard
            imageURL={process.env.PUBLIC_URL + 'images/partners/city3.svg'}
          >
            <Styled.CardDescription>App Development</Styled.CardDescription>
            <Styled.NameCity>Adelaide</Styled.NameCity>
          </Styled.ItemCityCard>
          <Styled.ItemCityCard
            imageURL={process.env.PUBLIC_URL + 'images/partners/city4.svg'}
          >
            <Styled.CardDescription>App Development</Styled.CardDescription>
            <Styled.NameCity>Melbourne</Styled.NameCity>
          </Styled.ItemCityCard>
          <Styled.ItemCityCard
            imageURL={process.env.PUBLIC_URL + 'images/partners/city5.svg'}
          >
            <Styled.CardDescription>App Development</Styled.CardDescription>
            <Styled.NameCity>Canberra</Styled.NameCity>
          </Styled.ItemCityCard>
        </Styled.FlexCitiesWrapper>
      </Container>
    </Styled.Section>
  )
}

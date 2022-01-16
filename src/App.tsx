import React from 'react'
import * as Styled from './App.styled'
import { Header } from '@containers/Header'
import { SectionAbilities } from '@containers/Section.Abilities'
import { SectionWorks } from '@containers/Section.Works'
import { SectionPartners } from '@containers/Section.Partners'
import { SectionForm } from '@containers/Section.Form'
import { SectionAchievements } from '@containers/Section.Achievements'
import { SectionResources } from '@containers/Section.Resources'
import { SectionFAQ } from '@containers/Section.FAQ'
import { SectionKickstart } from '@containers/Section.Kickstart'
import { Footer } from '@containers/Footer'

export const App: React.FC<{}> = () => {
  return (
    <Styled.Main>
      <Header />
      <SectionAbilities />
      <SectionWorks />
      <SectionPartners />
      <SectionForm />
      <SectionAchievements />
      <SectionResources />
      <SectionFAQ />
      <SectionKickstart />
      <Footer />
    </Styled.Main>
  )
}

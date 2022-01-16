import React from 'react'
import * as Styled from './styled'
import { Container } from '@components/Container'
import { Button } from '@components/Button'

export const SectionForm: React.FC<{}> = () => {
  return (
    <Styled.Section>
      <Styled.BGBLock
        bgURL={process.env.PUBLIC_URL + '/images/office-image.jpg'}
      >
        <Container>
          <Styled.FormWrapper>
            <Styled.Form>
              <Styled.FormTitle>
                Request a callback from our expert team
              </Styled.FormTitle>
              <Styled.Input value={'Required service*'} />
              <Styled.TextArea value={'Details*'} />
              <Styled.WrapperBtn>
                <Button value='Send request' />
              </Styled.WrapperBtn>
            </Styled.Form>
          </Styled.FormWrapper>
        </Container>
      </Styled.BGBLock>
    </Styled.Section>
  )
}

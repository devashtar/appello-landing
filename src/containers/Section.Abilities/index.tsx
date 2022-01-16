import React, { useState } from 'react'
import * as Styled from './styled'
import { Container } from '@components/Container'
import { Title } from '@components/Title'
import { SubTitle } from '@components/SubTitle'
import { Button } from '@components/Button'

interface IState {
  design?: boolean
  develop?: boolean
  launch?: boolean
}

export const SectionAbilities: React.FC<{}> = () => {
  const [active, setActive] = useState<IState>({
    design: true,
    develop: false,
    launch: false
  })

  return (
    <Styled.Section>
      <Container>
        <Styled.SurfaceBlock>
          <Styled.InnerSurfaceBlock>
            <Styled.InnerLeftBlock>
              <Styled.ILBTitle>
                Your reliable web and app development partner
              </Styled.ILBTitle>
              <Styled.ILBSubTitle>
                We make successful products that turn great ideas into
                user-friendly solutions for consumers and businesses.
              </Styled.ILBSubTitle>
            </Styled.InnerLeftBlock>
            <Styled.InnerRightBlock>
              <Styled.IRBGridItem>
                Completely tailored software.
              </Styled.IRBGridItem>
              <Styled.IRBGridItem>
                Daily support with project manager.
              </Styled.IRBGridItem>
              <Styled.IRBGridItem>
                Projects delivered on time, always.
              </Styled.IRBGridItem>
              <Styled.IRBGridItem>
                Testing and quality assurance.
              </Styled.IRBGridItem>
              <Styled.IRBGridItem>
                Professional marketing expertise.
              </Styled.IRBGridItem>
              <Styled.IRBGridItem>
                Transparent costs and support.
              </Styled.IRBGridItem>
            </Styled.InnerRightBlock>
          </Styled.InnerSurfaceBlock>
        </Styled.SurfaceBlock>

        <Title>Where are you now?</Title>
        <SubTitle>
          Use the tabs below to identify what stage you’re at so we can help you
          to move on to the next phase of your project.
        </SubTitle>

        <Styled.Menu>
          <Styled.ItemMenu
            className={active.design ? 'active' : ''}
            onClick={() => setActive({ design: true })}
          >
            Design
          </Styled.ItemMenu>
          <Styled.ItemMenu
            className={active.develop ? 'active' : ''}
            onClick={() => setActive({ develop: true })}
          >
            Develop
          </Styled.ItemMenu>
          <Styled.ItemMenu
            className={active.launch ? 'active' : ''}
            onClick={() => setActive({ launch: true })}
          >
            Launch
          </Styled.ItemMenu>
        </Styled.Menu>
        <Styled.ListItemsWrapper>
          <Styled.Item>
            <Styled.ItemTitle>1. Research</Styled.ItemTitle>
            <Styled.ItemSubTitle>
              We can help you to better understand your target audience,
              enabling you to create a more powerful value proposition for your
              business.
            </Styled.ItemSubTitle>
          </Styled.Item>
          <Styled.Item>
            <Styled.ItemTitle>2. Requirements</Styled.ItemTitle>
            <Styled.ItemSubTitle>
              Based on research insights, we can help you to determine how your
              product and service should function.
            </Styled.ItemSubTitle>
          </Styled.Item>
          <Styled.Item>
            <Styled.ItemTitle>3. UI Design</Styled.ItemTitle>
            <Styled.ItemSubTitle>
              We’re able to create unique and aesthetically pleasing visual
              design solutions that fulfil both your user needs and business
              goals.
            </Styled.ItemSubTitle>
          </Styled.Item>
          <Styled.Item>
            <Styled.ItemTitle>4. Prototyping</Styled.ItemTitle>
            <Styled.ItemSubTitle>
              We can provide you with a clickable prototype so you can test and
              play with your product; allowing you to get a better feel for the
              user experience.
            </Styled.ItemSubTitle>
          </Styled.Item>
        </Styled.ListItemsWrapper>
        <Styled.WrapperBtn>
          <Button value={'Contact us'} />
        </Styled.WrapperBtn>
      </Container>
    </Styled.Section>
  )
}

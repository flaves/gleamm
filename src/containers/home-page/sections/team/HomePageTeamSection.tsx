import React from 'react';
import { graphql } from 'gatsby';
import { DefaultProps } from '../../../../types/DefaultProps';
import { factory } from '../../../../theme/factory';
import { Container } from '../../../../components/container/Container';
import { _HomePageTeam } from '../../entities/_HomePage';
import { Heading } from '../../../../components/heading/Heading';
import { ColouredText } from '../../../../components/coloured-text/ColouredText';
import { Star } from '../../../../components/star/Star';
import { TeamMember } from './components/team-member/TeamMember';

export type HomePageTeamSectionData = _HomePageTeam;

type Props = DefaultProps<HomePageTeamSectionData>;

export function HomePageTeamSection(props: Props) {
  const { data } = props;

  return (
    <factory.div id="team" bg="gray.25" py={20}>
      <Container>
        <factory.div
          display="flex"
          justifyContent={[`center`, null, `flex-start`]}
          mb={20}
        >
          <factory.div width="max-content" position="relative">
            <Heading variant="section" color="text.secondary">
              <ColouredText>{data.heading}</ColouredText>
            </Heading>
            <factory.div position="absolute" top={-8} left={[140, null, 20]}>
              <Star />
            </factory.div>
            <factory.div
              position="absolute"
              bottom={[-5, null, 0]}
              right={[-2, -10]}
            >
              <Star />
            </factory.div>
            <factory.div
              position="absolute"
              bottom={[-12, null, -8]}
              left={[0, null, 40]}
            >
              <Star />
            </factory.div>
          </factory.div>
        </factory.div>
        <factory.div
          display="flex"
          flexDirection={[`column`, null, `row`]}
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap={10}
        >
          {data.team.map((member, key) => (
            <TeamMember key={key} member={member} />
          ))}
        </factory.div>
      </Container>
    </factory.div>
  );
}

export const homePageTeamSectionFragment = graphql`
  fragment HomePageTeamSectionFragment on PrismicHomePageData {
    team_heading {
      richText
    }
    team_members {
      team_member_name {
        text
      }
      team_member_job {
        text
      }
      team_member_image {
        gatsbyImageData(placeholder: BLURRED, width: 240, height: 280)
        alt
      }
    }
  }
`;

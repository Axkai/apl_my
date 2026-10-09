import React from "react";
import ContentSection from "@/components/ui/ContentSection";
import SectionHeader from "@/components/ui/SectionHeader";
import BodyText from "@/components/ui/BodyText";
import { SubSectionGroup, SubSection } from "@/components/ui/SubSection";

export default function PeerMediationAboutSection() {
  return (
    <ContentSection id="so-what-is-peer-mediation?" bgColor="bg-white">
      <SectionHeader title="So what is peer mediation?" align="left" showPill={true}>
        <BodyText>
          Peer mediation involves teaching the peers of students with special needs (i.e., their classmates) how to communicate with and include students who may need support with communication or participation. It helps all students learn to help their classmates join in.
        </BodyText>
      </SectionHeader>

      <SubSectionGroup layout="stack">
        <SubSection
          id="support-everyone"
          title="Peer mediation can support everyone."
          level="h3"
        >
          <BodyText>
            Peer mediation may be especially useful for children with special needs who are receiving individual communication support, but it can be used with all children. You do not need to identify a child with special needs to use peer mediation, so avoid doing this in case they do not want it shared with others. Peer mediation can be used with the whole class to teach children simple ways to communicate, help others join in and make sure everyone feels included. This means no child needs to be singled out.
          </BodyText>
        </SubSection>

        <SubSection
          id="impact-on-peers"
          title="Could peer mediation negatively impact peers?"
          level="h3"
        >
          <BodyText>
            When done with training and supports in place, research suggests there is no negative impact on the friendships and perceived ‘social status’ of peer mediators (i.e., the classmates). In fact, research suggests that classmates are more likely to identify a child with special needs as a friend after being a peer mediator! Classmates may benefit from learning how to adapt their own communication and social approaches to be inclusive of others.
          </BodyText>
        </SubSection>
      </SubSectionGroup>
    </ContentSection>
  );
}

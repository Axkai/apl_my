import { Metadata } from "next";
import PageContainer from "@/components/ui/PageContainer";
import PageHero from "@/components/ui/PageHero";
import TeacherGuideBullyingAboutSection from "@/components/social-inclusion/teacher-guide-to-bullying-and-exclusion/TeacherGuideBullyingAboutSection";
import TeacherGuideBullyingTeacherActionsSection from "@/components/social-inclusion/teacher-guide-to-bullying-and-exclusion/TeacherGuideBullyingTeacherActionsSection";
import TeacherGuideBullyingConcernSection from "@/components/social-inclusion/teacher-guide-to-bullying-and-exclusion/TeacherGuideBullyingConcernSection";
import TeacherGuideBullyingResourcesSection from "@/components/social-inclusion/teacher-guide-to-bullying-and-exclusion/TeacherGuideBullyingResourcesSection";

export const metadata: Metadata = {
  title: "Teacher Guide to Bullying and Exclusion | Social Inclusion | AllPlay Learn",
  description: "Practical guidance, strategies, and resources for primary school teachers to address bullying and support student inclusion.",
};

const jumpLinks = [
  { label: "What is bullying?", href: "#what-is-bullying?" },
  { label: "What can teachers do?", href: "#what-can-teachers-do?" },
  { label: "What to do if you are concerned", href: "#what-to-do-if-you-are-concerned" },
  { label: "Helping students to speak up", href: "#helping-students-to-speak-up" },
];

export default function TeacherGuideBullyingPage() {
  return (
    <PageContainer>
      <PageHero
        title="Teacher Guide to Bullying and Exclusion"
        heroGraphicSrc="/hero-bg.svg"
        jumpLinks={jumpLinks}
      />
      <TeacherGuideBullyingAboutSection />
      <TeacherGuideBullyingTeacherActionsSection />
      <TeacherGuideBullyingConcernSection />
      <TeacherGuideBullyingResourcesSection />
    </PageContainer>
  );
}

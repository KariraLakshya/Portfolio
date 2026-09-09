import { Book } from "@/components/notebook/Book";
import { Cover } from "@/components/notebook/pages/Cover";
import { IndexPage } from "@/components/notebook/pages/IndexPage";
import { ExperiencePage } from "@/components/notebook/pages/ExperiencePage";
import { ProjectsPage } from "@/components/notebook/pages/ProjectsPage";
import { SkillsEducationPage } from "@/components/notebook/pages/SkillsEducationPage";
import { ContactPage } from "@/components/notebook/pages/ContactPage";

/**
 * Order here has to match `lib/notebook.ts`'s `pages` array exactly — that
 * list is what the Index page jumps against, and a mismatch would make a
 * direct jump land on the wrong sheet.
 */
export default function Home() {
  return (
    <Book
      pages={[
        <Cover key="cover" />,
        <IndexPage key="index" />,
        <ExperiencePage key="experience" />,
        <ProjectsPage key="projects" />,
        <SkillsEducationPage key="skills" />,
        <ContactPage key="contact" />,
      ]}
    />
  );
}

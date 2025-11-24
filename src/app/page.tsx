import { getGithubActivity } from "@/actions/get-github-activity";
import { getGithubPullRequest } from "@/actions/get-github-pull-request";
import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Experience } from "@/components/experience/experience";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Learnings } from "@/components/learnings/learnings";
import { OpenSource } from "@/components/open-source/open-source";
import { Projects } from "@/components/projects/projects";

export default async function Home() {
  const [activities, pullRequest] = await Promise.all([
    getGithubActivity(),
    getGithubPullRequest(),
  ]);

  return (
    <div className="flex flex-col gap-8">
      <Header />
      <About />
      <Experience />
      <Projects />
      <OpenSource pullRequest={pullRequest} activities={activities} />
      <Learnings />
      <Contact />
      <Footer />
    </div>
  );
}

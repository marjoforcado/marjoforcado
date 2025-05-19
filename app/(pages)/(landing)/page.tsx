"use client";

import { ExperienceCard } from "@/app/components/ExperienceCard";
import { Header } from "@/client_only/Header";

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto space-y-4">
      <Header />
      <h2 className="text-lg font-bold">Experience</h2>
      <div className="space-y-4">
        <ExperienceCard
          role="Sr. Fullstack Engineer"
          companyName="Beensprout"
          duration="2024 - Present"
          skills={[
            "AWS",
            "Front End",
            "Back End",
            "System Architect",
            "AI Engineer",
            "Microservice",
          ]}
        >
          I have worked as a full stack developer and system architect
        </ExperienceCard>
        <ExperienceCard
          role="Sr., Fullstack Engineer"
          companyName="Micoworks PH"
          duration="2023 - Present"
          skills={["AWS", "Front End", "Back End", "Database"]}
        >
          My role as a full stack developer for the company
        </ExperienceCard>
        <ExperienceCard
          role="Frontend Engineer"
          companyName="Samsung Research PH"
          duration="2022 - 2023"
          skills={["Front End", "Microservice"]}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          hic ex temporibus inventore magni accusamus doloremque in itaque
          distinctio vitae.
        </ExperienceCard>
      </div>
    </div>
  );
}

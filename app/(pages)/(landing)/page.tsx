"use client";

import { ExperienceCard } from "@/app/components/ExperienceCard";
import { Header } from "@/client_only/Header";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from "@/shadcn/components/ui/button";

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto space-y-4 px-6">
      <Header />
      <h2 className="text-lg font-bold">Experience</h2>
      <div className="space-y-4 container">
        <ExperienceCard
          role={
            <>
              Sr. Software Architect | <AuroraText>Founder</AuroraText>
            </>
          }
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
          shineBorder
        >
          Design and Architected the cloud services of the application ensuring
          scalability, reliability, and security. Led the development of both
          frontend and backend systems, integrated
          <span className="bg-black text-white p-1 font-semibold mx-1 text-sm">
            AI-driven features
          </span>
          , and implemented microservice architectures to optimize performance
          and maintainability.
        </ExperienceCard>
        <ExperienceCard
          role="Sr., Fullstack Engineer"
          companyName="Micoworks PH"
          duration="2023 - Present"
          skills={["AWS", "Front End", "Back End", "Database"]}
        >
          Worked as a Full Stack Engineer, focusing on the development of the
          company&apos;s product as well as providing industry level standards
          and best practices and contributed to architectural decisions to
          enhance system performance and reliability.
        </ExperienceCard>
        <ExperienceCard
          role="Frontend Engineer"
          companyName="Samsung Research PH"
          duration="2022 - 2023"
          skills={["Front End", "Microservice"]}
        >
          Researcher, Developer, Maintainer of key features of the product.
          Using microservice approach to build scalable and maintainable
          frontend modules, collaborated closely with cross-functional teams to
          deliver high-quality features.
        </ExperienceCard>
        <div className="border border-dashed rounded-lg h-14 p-4 flex items-center justify-between">
          <span>3 more experiences</span>
          <Button variant="link">Why is this hidden?</Button>
        </div>
        <ExperienceCard
          role="Batchelors Degree"
          companyName="FEU Institute of Technology"
          duration="2012 - 2016"
        >
          Graduated with a degree in Computer Science, specializing in
          Information Technology. Gained a solid foundation in software
          development, algorithms, and data structures, and participated in
          various projects that honed my programming skills.
        </ExperienceCard>
      </div>
    </div>
  );
}

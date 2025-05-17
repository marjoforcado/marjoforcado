"use client";

import { ExperienceCard } from "@/app/components/ExperienceCard";
import { Header } from "@/client_only/Header";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/shadcn/components/ui/context-menu";
import { SmoothCursor } from "@/shadcn/components/ui/smooth-cursor";
import { generateRandomString } from "@/utils/generateRandomString";
import { Fragment, useEffect, useState } from "react";

export default function Page() {
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    setRandomString(generateRandomString());
  }, []);

  return (
    <Fragment>
      <ContextMenu>
        <div className="h-[calc(100vh_-_4rem)] w-full relative">
          <ContextMenuTrigger className="absolute h-full w-full p-6 py-10">
            <div className="max-w-5xl mx-auto space-y-4">
              <Header />
              <div className="space-y-4">
                <ExperienceCard
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
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis hic ex temporibus inventore magni accusamus
                  doloremque in itaque distinctio vitae.
                </ExperienceCard>
                <ExperienceCard
                  companyName="Micoworks PH"
                  duration="2023 - Present"
                  skills={["AWS", "Front End", "Back End"]}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis hic ex temporibus inventore magni accusamus
                  doloremque in itaque distinctio vitae.
                </ExperienceCard>
                <ExperienceCard
                  companyName="Samsung Research PH"
                  duration="2022 - 2023"
                  skills={["Front End", "Microservice"]}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis hic ex temporibus inventore magni accusamus
                  doloremque in itaque distinctio vitae.
                </ExperienceCard>
              </div>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuItem
              onClick={() => setRandomString(generateRandomString())}
            >
              Generate cursor name
            </ContextMenuItem>
          </ContextMenuContent>
        </div>
      </ContextMenu>
      <SmoothCursor
        cursor={
          <div className="size-5 rounded-full bg-primary relative">
            <span className="absolute top-5 text-center left-1/2 transform -translate-x-1/2">
              {randomString}
            </span>
          </div>
        }
      />
    </Fragment>
  );
}

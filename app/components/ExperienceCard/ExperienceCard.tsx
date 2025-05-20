import { ShineBorder } from "@/components/magicui/shine-border";
import { Badge } from "@/shadcn/components/ui/badge";
import { ReactNode } from "react";

type TProps = {
  companyName: string;
  duration: string;
  skills?: string[];
  children: string | ReactNode;
  role: string;
  shineBorder?: boolean;
};

export function ExperienceCard({
  children,
  companyName,
  duration,
  skills,
  role,
  shineBorder,
}: TProps) {
  const renderSkills = () => {
    if (!skills) {
      return null;
    }

    return (
      <div className="space-x-2">
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    );
  };

  return (
    <div className="relative p-4 space-y-2 rounded-lg border">
      {shineBorder && (
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      )}
      <p className="font-bold text-3xl">{companyName}</p>
      <p className="font-bold text-sm">{role}</p>
      <p className="font-semibold text-sm text-muted-foreground">{duration}</p>
      <p className="text-muted-foreground">{children}</p>
      <div className="space-x-2">{renderSkills()}</div>
    </div>
  );
}

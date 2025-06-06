"use client";

import { Calendar } from "@/shadcn/components/ui/calendar";
import { add } from "date-fns";

export function AppCalendar() {
  return (
    <Calendar
      disabled={(date) =>
        date <
        add(new Date(), {
          weeks: 1,
        })
      }
    />
  );
}

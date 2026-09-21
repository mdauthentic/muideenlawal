"use client";

import { useEffect, useState } from "react";

const parisTime = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Paris",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

export function LocalTime() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    const initialTick = window.setTimeout(tick, 0);
    const interval = window.setInterval(tick, 1000);
    return () => {
      window.clearTimeout(initialTick);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <span className="hidden text-xs text-subtle lg:block">
      Paris · <time dateTime={now?.toISOString()} className="tabular-nums" aria-label="Local time in Paris">{now ? parisTime.format(now) : "--:--:--"}</time>
    </span>
  );
}

"use client";

import { useEffect, useState } from "react";

export function LiveTime() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());

    tick();
    const interval = window.setInterval(tick, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const time = now
    ? new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Paris",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now)
    : "--:--:--";

  return (
    <time
      dateTime={now?.toISOString()}
      suppressHydrationWarning
      className="inline-flex w-fit items-center gap-2 border border-line px-2.5 py-1 text-xs text-dim"
    >
      <span className="size-1.5 rounded-full bg-hot animate-led" />
      {time} CET
    </time>
  );
}

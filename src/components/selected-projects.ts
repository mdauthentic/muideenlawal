export const selectedProjects = [
  {
    id: "recurden",
    number: "01",
    name: "Recurden",
    platform: "iOS / SwiftUI",
    status: "Pending App Store release",
    title: "Decide before the next charge.",
    description:
      "A private subscription renewal assistant. See upcoming charges, trial endings, and price changes, then decide what to keep, defer, or cancel.",
    approach:
      "Native SwiftUI, local SwiftData persistence, recurrence-aware reminders, and on-device screenshot capture. No bank connection or account required.",
    detail:
      "The Today screen puts renewal decisions first. A timeline and spend insights provide the context behind those decisions.",
    image: "/projects/recurden-today.png",
    alt: "Recurden Today screen with seeded subscription data and Keep, Later, and Cancel decisions",
    caption: "Today screen · seeded demonstration data",
    artifact: "APP SCREENSHOT",
  },
  {
    id: "aftermark",
    number: "02",
    name: "Aftermark",
    platform: "iOS / SwiftUI",
    status: "In development",
    title: "Find it the way you remember it.",
    description:
      "A note app focused on recall. Capture something quickly, find it later through the details you remember, and bring it back when it becomes relevant.",
    approach:
      "A native iPhone app with text, audio, and link capture; search; return conditions; and a view of unanswered questions. Built with first-party Apple frameworks.",
    detail:
      "This search screen uses the query “Emma” and shows the matching context alongside notes. The capture comes from the app’s sample-data fixture.",
    image: "/projects/aftermark-search.png",
    alt: "Aftermark search screen showing the query Emma and notes from its sample-data fixture",
    caption: "Search screen · seeded demonstration data",
    artifact: "APP SCREENSHOT",
  },
  {
    id: "leaf",
    number: "03",
    name: "Leaf",
    platform: "macOS / SwiftUI & AppKit",
    status: "In development",
    title: "Read without leaving your workspace.",
    description:
      "A read-only Markdown layer for macOS. Open a reference, keep it beside your work, and dismiss it without changing the source file.",
    approach:
      "A menu-bar app with passive and interactive focus states, window modes, live reload, and Finder and command-line integration.",
    detail:
      "The bundled leaf command opens a document, places it beside your work, or reads Markdown from standard input. These examples come from the project's documentation.",
    image: null,
    alt: "",
    caption: "Documented CLI usage · not an app screenshot",
    artifact: "WORKFLOW EXAMPLE",
  },
] as const;

export type SelectedProject = (typeof selectedProjects)[number];

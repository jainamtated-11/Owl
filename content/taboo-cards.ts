import type { TabooCard } from "@/lib/types";

/**
 * "Taboo or Not" cards. To add a card, copy a block and edit the three fields.
 * `id` just needs to be unique. No code changes needed anywhere else.
 */
export const tabooCards: TabooCard[] = [
  {
    id: "nap-lazy",
    myth: "Napping before a night shift means you're lazy.",
    truth: "A pre-shift nap is a performance tool, not a weakness.",
    science:
      "A 90-minute nap before a night shift improves alertness and reaction time through the early-morning hours, when accidents peak.",
  },
  {
    id: "just-coffee",
    myth: "You just need more coffee to handle nights.",
    truth: "Caffeine helps, but timing and light matter far more.",
    science:
      "Caffeine has a ~5-hour half-life — a coffee at 4am can wreck your morning sleep. Strategic light exposure shifts your body clock more reliably.",
  },
  {
    id: "weekend-catchup",
    myth: "I can just catch up on sleep on my days off.",
    truth: "You can repay some sleep debt, but not all of it.",
    science:
      "Recovery sleep restores alertness but doesn't fully reverse the metabolic and attention costs of chronic short sleep. Consistency beats binge-recovery.",
  },
  {
    id: "antisocial",
    myth: "Night workers are antisocial or unfriendly.",
    truth: "They're on a different clock, not a different planet.",
    science:
      "Social withdrawal among shift workers is usually circadian misalignment and fatigue — not personality. Protected social time helps more than willpower.",
  },
  {
    id: "tough-it-out",
    myth: "If you're tired on shift, just tough it out.",
    truth: "Pushing through severe fatigue is a safety risk, not grit.",
    science:
      "After ~17 hours awake, performance impairment is comparable to a 0.05% blood-alcohol level. Managing fatigue is a safety practice, not a comfort.",
  },
  {
    id: "no-rights",
    myth: "Night shift is just part of the job — you have no say.",
    truth: "Night workers have specific protections and entitlements.",
    science:
      "Many jurisdictions mandate night-shift allowances, health checks, rest breaks, and caps on consecutive nights. Knowing them is the first step to using them.",
  },
];

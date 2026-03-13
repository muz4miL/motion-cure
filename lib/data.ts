export const navigationLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#conditions" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  clinicName: "The Motion Cure Physiotherapy Clinic - Peshawar",
  heading: ["Expert Care.", "Pain-Free Life.", "No Surgery Required."],
  description:
    "Personalized physiotherapy by Dr. Sadeeq Ur Rehman, DPT, with evidence-based plans, measurable recovery, and trusted privacy support including dedicated female staff for female patients.",
  primaryCta: "Book Appointment",
  secondaryCta: "WhatsApp Us",
};

export const trustBadges = ["PPTA", "AHPC", "KP Health Care Commission"];

export const trustStats = {
  patientsRecoveredDaily: "5-10",
};

export type Condition = {
  title: string;
  description: string;
  icon: "waves" | "activity" | "dumbbell" | "brain" | "accessibility";
  iconTone: string;
};

export const conditions: Condition[] = [
  {
    title: "Low Back Pain & Sciatica",
    description: "Targeted manual therapy and movement rehab to relieve pain and restore mobility.",
    icon: "waves",
    iconTone: "from-indigo-200 to-blue-100",
  },
  {
    title: "Neck & Shoulder Pain",
    description: "Posture-focused care to reduce stiffness, tension, and recurring discomfort.",
    icon: "activity",
    iconTone: "from-sky-200 to-cyan-100",
  },
  {
    title: "Sports Injuries",
    description: "Performance-led recovery plans for sprains, strains, and return-to-play readiness.",
    icon: "dumbbell",
    iconTone: "from-violet-200 to-fuchsia-100",
  },
  {
    title: "Stroke & Neurological Rehab",
    description: "Evidence-based neuro-physio to rebuild strength, balance, and daily function.",
    icon: "brain",
    iconTone: "from-rose-200 to-orange-100",
  },
  {
    title: "Post-Surgical Rehab",
    description: "Guided rehabilitation to improve healing outcomes and regain confidence in movement.",
    icon: "accessibility",
    iconTone: "from-emerald-200 to-lime-100",
  },
];

export const clinicVideos = [
  {
    title: "Patient Recovery Walkthrough",
    description: "A short look into guided movement sessions and supervised progress checks.",
    src: "/clinic-video.mp4",
  },
  {
    title: "Inside The Motion Cure",
    description: "Take a quick tour of the treatment setup and rehabilitation workflow.",
    src: "/clinic-video.mp4",
  },
];

export const doctorInfo = {
  name: "Dr. Sadeeq Ur Rehman, DPT",
  credentialLine: "Evidence-based physiotherapy and long-term movement restoration",
};

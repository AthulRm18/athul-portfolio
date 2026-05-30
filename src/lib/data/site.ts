/** Site-wide links — update here when contact info changes */
export const site = {
  name: "Athul R Mohan",
  email: "athumrm518@gmail.com",
  github: "https://github.com/AthulRm18",
  linkedin: "https://www.linkedin.com/in/athul-r-mohan-1abb87368",
} as const;

/** Opens Gmail compose in the browser */
export function gmailComposeUrl(to: string = site.email): string {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`;
}

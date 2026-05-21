import { resume } from "@/shared/config/resume";

export const Footer = () => (
  <footer className="border-t border-border">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 font-mono text-xs text-fg-muted sm:flex-row">
      <span>© 2026 {resume.name}</span>
      <a
        href={resume.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-fg"
      >
        source on github
      </a>
    </div>
  </footer>
);

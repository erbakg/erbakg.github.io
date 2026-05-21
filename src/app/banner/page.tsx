import type { Metadata } from "next";
import { resume } from "@/shared/config/resume";

export const metadata: Metadata = {
  title: "Erbol Mederbekov — LinkedIn Banner",
  robots: { index: false, follow: false },
};

// LinkedIn cover dimensions: 1584 × 396 (4:1).
// Avatar overlays the bottom-left ~280px area — content is offset to clear it.

const BannerPage = () => (
  <div className="flex min-h-screen items-center justify-center bg-bg-elevated p-6">
    <div
      style={{ width: 1584, height: 396 }}
      className="relative flex items-center bg-bg text-fg"
    >
      <div className="grid h-full w-full grid-cols-[440px_1fr_auto] items-center px-16">
        <div aria-hidden />
        <div className="space-y-5">
          <p className="font-mono text-base uppercase tracking-[0.2em] text-accent">
            &gt; frontend.engineer
          </p>
          <h1 className="text-7xl font-semibold leading-[0.95] tracking-tight">{resume.name}</h1>
          <p className="max-w-3xl text-2xl leading-snug text-fg-muted">
            Senior Frontend &amp; React Native Engineer — 5+ years shipping iOS, Android, and web
            for 100K+ users.
          </p>
        </div>
        <aside className="flex h-[260px] items-center border-l border-border pl-10 font-mono text-sm leading-relaxed text-fg-muted">
          <dl className="space-y-4">
            <div>
              <dt className="text-fg-muted/60">LOC</dt>
              <dd className="text-fg">
                {resume.location.city}, {resume.location.country}
              </dd>
            </div>
            <div>
              <dt className="text-fg-muted/60">EXP</dt>
              <dd className="text-fg">5+ years</dd>
            </div>
            <div>
              <dt className="text-fg-muted/60">STATUS</dt>
              <dd className="text-positive">Open to relocation</dd>
            </div>
            <div>
              <dt className="text-fg-muted/60">URL</dt>
              <dd className="text-fg">erbakg.github.io</dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  </div>
);

export default BannerPage;

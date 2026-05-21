type Props = {
  index: string;
  label: string;
};

export const SectionHeading = ({ index, label }: Props) => (
  <div className="mb-12 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
    <span>{index}</span>
    <span className="h-px flex-1 bg-border" />
    <span>{label}</span>
  </div>
);

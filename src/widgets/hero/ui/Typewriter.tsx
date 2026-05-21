"use client";
import { useEffect, useState } from "react";

type Props = { words: string[]; pauseMs?: number; typeMs?: number };

export const Typewriter = ({ words, pauseMs = 1500, typeMs = 90 }: Props) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => {
        setText(
          deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1),
        );
      },
      deleting ? typeMs / 2 : typeMs,
    );
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, pauseMs, typeMs]);

  return (
    <span className="font-mono text-accent">
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] -translate-y-[2px] animate-pulse bg-accent" />
    </span>
  );
};

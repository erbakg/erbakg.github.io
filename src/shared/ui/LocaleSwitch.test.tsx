import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { LocaleSwitch } from "./LocaleSwitch";

vi.mock("next/navigation", () => ({
  usePathname: () => "/en",
}));

describe("LocaleSwitch", () => {
  it("renders both locale links", () => {
    render(<LocaleSwitch currentLocale="en" />);
    expect(screen.getByText("EN")).toBeInTheDocument();
    expect(screen.getByText("RU")).toBeInTheDocument();
  });

  it("highlights the active locale", () => {
    render(<LocaleSwitch currentLocale="ru" />);
    expect(screen.getByText("RU").className).toMatch(/text-fg/);
  });
});

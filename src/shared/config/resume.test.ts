import { describe, it, expect } from "vitest";
import { resume } from "./resume";

describe("resume", () => {
  it("has all required top-level fields", () => {
    expect(resume.name).toBe("Erbol Mederbekov");
    expect(resume.email).toMatch(/@/);
    expect(resume.cvPdfUrl).toBe("/resume/Erbol_Mederbekov_CV_EN.pdf");
  });

  it("has exactly 4 impact stats", () => {
    expect(resume.stats).toHaveLength(4);
    resume.stats.forEach((s) => {
      expect(s.value).toBeTruthy();
      expect(s.label).toBeTruthy();
    });
  });

  it("has 6 experience entries with Cointelegraph as featured", () => {
    expect(resume.experience).toHaveLength(6);
    const featured = resume.experience.filter((e) => e.featured);
    expect(featured).toHaveLength(1);
    expect(featured[0].company).toBe("Cointelegraph");
    expect(featured[0].period).toMatch(/Aug 2022/);
  });

  it("orders experience newest first", () => {
    expect(resume.experience[0].company).toBe("Cointelegraph");
    expect(resume.experience[resume.experience.length - 1].company).toBe("It-hub");
  });

  it("has dedicated Android skill card", () => {
    const android = resume.skills.find((s) => s.category === "Android");
    expect(android).toBeDefined();
    expect(android!.items).toContain("Java");
    expect(android!.items).toContain("Kotlin");
  });
});

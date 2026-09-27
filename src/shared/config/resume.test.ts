import { describe, it, expect } from "vitest";
import { resume } from "./resume";

describe("resume", () => {
  it("has all required top-level fields", () => {
    expect(resume.name).toBe("Erbol Mederbekov");
    expect(resume.email).toMatch(/@/);
    expect(resume.cvPdfUrl).toBe("/resume/Erbol_Mederbekov_CV_EN.pdf");
    expect(resume.cvPdfUrlRu).toBe("/resume/Erbol_Mederbekov_CV_RU.pdf");
  });

  it("has exactly 4 impact stats", () => {
    expect(resume.stats).toHaveLength(4);
    resume.stats.forEach((s) => {
      expect(s.value).toBeTruthy();
      expect(s.label).toBeTruthy();
    });
  });

  it("has the current experience timeline with MDigital as featured", () => {
    expect(resume.experience).toHaveLength(3);
    const featured = resume.experience.filter((e) => e.featured);
    expect(featured).toHaveLength(1);
    expect(featured[0].company).toBe("MDigital");
    expect(featured[0].period).toMatch(/Aug 2025/);
  });

  it("orders experience newest first", () => {
    expect(resume.experience[0].company).toBe("MDigital");
    expect(resume.experience.at(-1)?.company).toContain("Freelance");
  });

  it("freelance entry includes React Native and spans Jan 2019-Jul 2022", () => {
    const freelance = resume.experience.find((e) => e.company.includes("Freelance"));
    expect(freelance).toBeDefined();
    expect(freelance!.period).toBe("Jan 2019 – Jul 2022");
    expect(freelance!.stack).toContain("React Native");
  });

  it("has dedicated Android skill card", () => {
    const android = resume.skills.find((s) => s.category === "Android");
    expect(android).toBeDefined();
    expect(android!.items).toContain("Java");
    expect(android!.items).toContain("Kotlin");
  });
});

import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useScrollReveal } from "./useScrollReveal";

class MockIntersectionObserver {
  constructor(public cb: IntersectionObserverCallback) {}
  observe = vi.fn();
  disconnect = vi.fn();
  trigger(isIntersecting: boolean) {
    this.cb(
      [{ isIntersecting } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver,
    );
  }
}

beforeEach(() => {
  // @ts-expect-error - test stub
  globalThis.IntersectionObserver = MockIntersectionObserver;
});

describe("useScrollReveal", () => {
  it("starts hidden (visible=false)", () => {
    const { result } = renderHook(() => useScrollReveal<HTMLDivElement>());
    expect(result.current.visible).toBe(false);
  });
});

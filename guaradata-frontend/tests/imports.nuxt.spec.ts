/* eslint-disable quotes */
import { describe, test, expect } from "vitest";

describe("import vue components", () => {
  test("normal import as expected", async () => {
    const cmp = await import("../components/NavBar.vue");
    expect(cmp).toBeDefined();
  });
  test("normal import as expected", async () => {
    const cmp = await import("../components/BlogCard.vue");
    expect(cmp).toBeDefined();
  });
});

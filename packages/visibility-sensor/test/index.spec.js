/**
 * @jest-environment jsdom
 */
import React from "react";
import useVisibilitySensor from "..";

describe("useVisibilitySensor", () => {
  it("should be defined", () => {
    expect(useVisibilitySensor).toBeDefined();
  });
});

// figure out tests

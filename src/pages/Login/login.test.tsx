import Login from "./Login";
import renderer from "react-test-renderer";
import React from "react";

describe("App Component Test suit", () => {
  test("snapshot should be render", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

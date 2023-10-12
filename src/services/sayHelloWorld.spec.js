sayHelloWorld = require("./sayHelloWorld");

describe("Say Hello tests", () => {
  it("Shoud say Hello World", () => {
    const response = sayHelloWorld.sayHello();
    expect(response).toBe("Hello World!");
  });
  it("Shoud say Hello Rodrigo", () => {
    const response = sayHelloWorld.sayHello("Rodrigo");
    expect(response).toBe("Hello Rodrigo!");
  });
});

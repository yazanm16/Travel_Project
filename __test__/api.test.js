//  Import the formHandler function from the formHandler module
import { formHandler } from "../src/client/js/formHandler";

// Describe block for grouping related tests
describe('Validation: "handleSubmit" must be a valid function', () => {

//    Individual test case
  it("should be correctly defined as a function", async () => {

// Expect formHandler to be of type "function"
    expect(typeof formHandler).toEqual("function");
  });
});

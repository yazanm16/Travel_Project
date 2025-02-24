
const request = require('supertest');
 const app = require('../src/server/server'); // Adjust the path as needed

let serverInstance;
let assignedPort;

// Setup and Teardown
beforeAll((done) => {
  serverInstance = app.listen(8081, () => {
    assignedPort = serverInstance.address().port;
    done();
  });
});

afterAll((done) => {
  serverInstance.close(done);
});

// Example Test
describe('Server Functionality Validation', () => {

  // Test if the server is running on the correct port
  test('Server should listen on port 8081', () => {
    expect(assignedPort).toEqual(8081);
  });

  // Test for an endpoint
  test('GET /some-endpoint should respond with status 200', async () => {
    console.log('Verifying response from /some-endpoint'); // Debug log
    const res = await request(app).get('/some-endpoint');
    console.log('Returned status code:', res.statusCode); // Debug log
    expect(res.statusCode).toBe(200);
  });

});

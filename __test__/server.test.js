// const request = require('supertest');
// const app = require('../src/server/server'); // Adjust the path as needed
//
// let server;
// let port;
//
// // Setup and Teardown
// beforeAll((done) => {
//   server = app.listen(8081, () => {
//     port = server.address().port;
//     done();
//   });
// });
//
// afterAll((done) => {
//   server.close(done);
// });
//
// // Example Test
// describe('Server Tests', () => {
//
//   // Test if the server is running on the correct port
//   test('PORT should be set to 8081', () => {
//     expect(port).toBe(8081);
//   });
//
//   // Test for an endpoint
//   test('GET /some-endpoint should return 200 status', async () => {
//     console.log('Testing /some-endpoint'); // Debug log
//     const response = await request(app).get('/some-endpoint');
//     console.log('Response status code:', response.statusCode); // Debug log
//     expect(response.statusCode).toBe(200);
//   });
//
// });

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

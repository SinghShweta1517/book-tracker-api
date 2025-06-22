const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../server"); // update if your app is exported

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("Books API", () => {
  it("POST /api/books - success", async () => {
    const res = await request(app).post("/api/books").send({
      title: "Alchemist",
      author: "Paulo Coelho",
      genre: "Fiction",
      rating: 4.5,
      review: "Inspirational"
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Alchemist");
  });

  it("GET /api/books - should return list", async () => {
    const res = await request(app).get("/api/books");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

const Book = require('../models/Book');
const { getBooks } = require('../controllers/bookController');

jest.mock('../models/Book');

describe("getBooks", () => {
  it("should return all books", async () => {
    const req = {};
    const res = {
      json: jest.fn(),
    };
    Book.find.mockResolvedValue([{ title: "Test Book" }]);

    await getBooks(req, res);
    expect(res.json).toHaveBeenCalledWith([{ title: "Test Book" }]);
  });
});

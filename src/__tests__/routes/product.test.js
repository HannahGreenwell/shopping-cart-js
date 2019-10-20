const request = require('supertest');
const app = require('../../app');

// mock out data file
jest.mock(
  '../../data/products.json',
  () => [
    {
      price: 24.99,
      productCode: 'CHAIR_RED',
      name: 'Red plastic chair',
    },
    {
      price: 24.99,
      productCode: 'DIS_10-CHAIR_BLUE',
      name: 'Blue plastic chair',
    },
  ],
  { virtual: true },
);

describe('/products', () => {
  describe('GET /', () => {
    it('should return all products', async () => {
      const response = await request(app).get('/products');
      expect(response.statusCode).toBe(200);
      expect(response.body.length).toEqual(2);
    });
  });

  describe('GET /<PRODUCT_CODE>', () => {
    it("should return the requested product's data", async () => {
      const response = await request(app).get('/products/CHAIR_RED');
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({
        price: 24.99,
        productCode: 'CHAIR_RED',
        name: 'Red plastic chair',
      });
    });

    it('should return 404 when the requested product is not found', async () => {
      const response = await request(app).get('/products/FAKE_PRODUCT_CODE');
      expect(response.statusCode).toBe(404);
    });
  });
});

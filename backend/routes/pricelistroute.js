const Product = require('../models/pricelist');

async function productRoutes(fastify, options) {
  // GET /products
  fastify.get('/', async (request, reply) => {
    try {
      const products = await Product.findAll();
      reply.send(products);
    } catch (err) {
      console.error('Error fetching products:', err);
      reply.code(500).send({ error: 'Failed to fetch products' });
    }
  });

  // PUT /products/:id
  fastify.put('/:id', async (request, reply) => {
    const { id } = request.params;
    const updates = request.body;

    try {
      const product = await Product.findByPk(id);
      if (!product) {
        return reply.code(404).send({ message: 'Product not found' });
      }

      await product.update(updates);
      reply.send(product);
    } catch (err) {
      reply.code(500).send({ message: 'Update failed', error: err.message });
    }
  });
}

module.exports = productRoutes;

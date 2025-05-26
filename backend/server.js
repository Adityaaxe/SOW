const fastify = require("fastify")({ logger: true });
const cors = require("@fastify/cors");

// ✅ Enable CORS
fastify.register(cors, {
  origin: "*", // Allow all origins for development (you can restrict this in prod)
});

fastify.register(require("./plugins/sequelize"));
fastify.register(require("./routes/terms"));

// Start server
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});

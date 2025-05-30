const fastify = require("fastify")({ logger: true });
const cors = require("@fastify/cors");
require("dotenv").config(); // Load .env

// Enable CORS
fastify.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
});

// Plugins and Routes
fastify.register(require("./plugins/sequelize"));
fastify.register(require("./routes/terms"));
fastify.register(require("./routes/pricelistroute"), { prefix: "/products" });

// Start server
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});

export default () => ({
  environment: process.env.NODE_ENV || 'development',
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.PORT, 10) || 5432,
  },
});
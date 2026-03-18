// using postgresql

module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: env('CLIENT', 'postgres'),
          host: env('DATABASE_HOST', 'custom_host'),
          port: env('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'custom_db'),
          username: env('DATABASE_USERNAME', 'custom_user'),
          password: env('DATABASE_PASSWORD', 'custom_password'),
          schema: env('DATABASE_SCHEMA', 'custom_schema'),
          ssl: env('DATABASE_SSL', true),// for azure postgresql service, set to true
        },
        options: {},
      },
    },
  });

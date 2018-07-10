# config/initializers/session_store.rb
Cals::Application.config.session_store :redis_store, {
  servers: [
    {
      host: REDIS_HOST,
      port: REDIS_PORT,
      db: 0,
      namespace: "cals:session"
    }
  ],
  expire_after: 4.hours
}

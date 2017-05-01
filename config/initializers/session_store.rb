# config/initializers/session_store.rb
RailsWebpacker::Application.config.session_store :redis_store, {
  servers: [
    {
      host: REDIS_HOST,
      port: REDIS_PORT,
      db: 0,
      namespace: "cals:session"
    }
  ],
  expire_after: 60.minutes
}

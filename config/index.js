const env = process.env

console.log(process.env)

module.exports = {
  host: env.HOST,
  port: env.PORT,
}

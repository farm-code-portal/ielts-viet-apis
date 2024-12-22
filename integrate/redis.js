require('dotenv').config();
const redis = require('redis');
const crypto = require('crypto');

const redisClient = redis.createClient({
  url: process.env.REDIS_URL,
});

redisClient
  .connect()
  .then(() => {
    console.log('Connected to Redis successfully.');
  })
  .catch((err) => {
    console.error('Redis connection error:', err);
  });

async function generateToken(key, expirationTimeInSeconds = 3600) {
  const token = crypto.randomBytes(32).toString('hex');
  const tokenData = JSON.stringify({ key });
  await redisClient.setEx(`token:${token}`, expirationTimeInSeconds, tokenData);
  return token;
}

async function checkToken(token) {
  const tokenData = await redisClient.get(`token:${token}`);
  if (tokenData) {
    await redisClient.del(`token:${token}`);
    return JSON.parse(tokenData);
  }
  return null;
}

module.exports = { redisClient, generateToken, checkToken };
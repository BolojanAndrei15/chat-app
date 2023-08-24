import { Redis } from "@upstash/redis";

const getDbCredentials = () => {
  if (!process.env.UPSTASH_REDIS_REST_URL) {
    throw new Error("UPSTASH_REDIS_REST_URL is not defined");
  }

  if (!process.env.UPSTASH_REDIS_REST_TOKEN) {
    throw new Error("UPSTASH_REDIS_REST_TOKEN is not defined");
  }

  return {
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  };
};

const { url, token } = getDbCredentials();

export const db = new Redis({
  url,
  token,
});

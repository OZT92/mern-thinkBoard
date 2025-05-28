import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-rate-limit"); //authentication olsaydi my-rate-limit yerine userid olurdu veya ip adresi

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later",
      });
    }
    next();
  } catch (error) {
    console.log("Ratelimit error", error);
    next(error);
  }
};

export default rateLimiter;

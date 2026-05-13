import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const { success } = await rateLimit.limit("limit-key"); // usually will use an identifier to limit each user

        if (!success) return res.status(429).json({ message: "Too many requests, please try again later." });

        next();
    } catch (error) {
        console.log("Rate limit error:", error);
        next(error);
    }
}

export default rateLimiter;
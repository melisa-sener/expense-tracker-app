import ratelimit  from "../config/upstash.js";

const ratelimtiter = async(req, res, next) => {
    try {
      const {success} =await ratelimit.limit("my-rate-limit");  
      
      if(!success) {
        return res.status(429).json({
          message: "too many requests"
        });
      }

      next();
    } catch (error) {
      console.log("rate limit error", error);
      next(error);
    }
};

export default ratelimtiter;
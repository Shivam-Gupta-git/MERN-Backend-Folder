class TockenBucket {
  constructor(capicity, refillRate) {
    // Maximum tokens bucket can hold
    this.capicity = capicity;

    // Current available tokens
    this.tokens = capicity;

    // Tokens added per second
    this.refillRate = refillRate;

    // Last refill timestamp
    this.lastRefillTime = Date.now();
  }

  // Refill tokens
  refillTokens() {
    const now = Date.now();

    // Time difference in seconds
    const elapsedTime =
      (now - this.lastRefillTime) / 1000;

    // Calculate new tokens
    const newTokens =
      elapsedTime * this.refillRate;

    // Add tokens without exceeding capacity
    this.tokens = Math.min(
      this.capicity,
      this.tokens + newTokens
    );

    // Update refill time
    this.lastRefillTime = now;
  }

  // Check if request can pass
  allowRequest() {
    // First refill bucket
    this.refillTokens();

    // If token available
    if (this.tokens >= 1) {
      this.tokens -= 1;
      return true;
    }

    // No token available
    return false;
  }
}

const token = new TockenBucket(5, 1);

setInterval(() => {
  if (token.allowRequest()) {
    console.log("Request Allowed");
  } else {
    console.log("Rate Limit Exceeded");
  }
}, 300);
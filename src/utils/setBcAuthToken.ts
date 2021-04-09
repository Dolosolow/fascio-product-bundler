import { Redis } from 'ioredis';
import axios from 'axios';

export const setBcAuthToken = async (redis: Redis, storeId: string) => {
  const existingToken = await redis.get(storeId);

  if (!existingToken) {
    const eat = Math.ceil((Date.now() + 1000 * 60 * 60 * 24 * 7) / 1000);

    try {
      const bcApiUrl = 'https://api.bigcommerce.com/stores/20frharu/v3/storefront/api-token';
      const bcResponse = await axios.post(
        bcApiUrl,
        JSON.stringify({
          channel_id: 1,
          expires_at: eat,
          allowed_cors_origins: ['http://localhost:4000'],
        }),
        {
          headers: {
            'content-type': 'application/json',
            'X-Auth-Token': process.env.ACCESS_TOKEN,
          },
        }
      );
      const token = bcResponse.data.data.token;

      await redis.set(storeId, token, 'ex', 1000 * 60 * 60 * 24 * 7);
      return token;
    } catch (err) {
      console.log(`Error: ${err}`);
      throw new Error(err);
    }
  }
};

import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export const PORT = process.env.PORT || 5000;
export const MONGO_URI = process.env.MONGO_URI;
export const ENVIRONMENT = process.env.NODE_ENV;
export const BCRYPT_SALT = Number(process.env.BCRYPT_SALT_ROUND);
export const JWT_SECRET = process.env.JWT_SECRET;

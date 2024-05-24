import { config } from 'dotenv';
import { dirname, sep } from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env file in the root directory
// config({ path: '../../.env' });
config({ path: new URL('../../.env', import.meta.url).pathname });

// Resolve __dirname for ES modules
const __dirname = dirname(fileURLToPath(import.meta.url));

const cfg = {
  port: process.env.PORT || 3000,
  dir: {
    root: __dirname,
    static: `${__dirname}${sep}${process.env.STATIC_DIR}${sep}`,
    public: `${__dirname}${sep}${process.env.PUBLIC_DIR}${sep}`,
    views: `${__dirname}${sep}${process.env.VIEWS_DIR}${sep}`,
  },
};

export default cfg;

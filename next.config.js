if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
  throw new Error(`
  Invalid WORDPRESS_API_URL environment variable.
  Please make sure it is set to a valid URL.
  `);
}

const { protocol, hostname, port, pathname } = new URL(
  process.env.WORDPRESS_API_URL
);

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: protocol.slice(0, -1),
        hostname,
        port,
        pathname: `${pathname}/**`,
      },
      {
        protocol: "http",
        hostname: "1.gravatar.com",
      },
      {
        protocol: "http",
        hostname: "headless-wordpress-next-js.local",
      },
    ],
  },
};

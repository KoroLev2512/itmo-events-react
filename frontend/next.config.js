/**
 * @type {import('next').NextConfig}
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires

const nextConfig = {
	trailingSlash: true,
	output: "standalone",
	reactStrictMode: false,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	images: {
		unoptimized: true,
		domains: ["localhost", "http.cat"],
	},
	env: {
		NEXT_PUBLIC_INTERNAL_HOST: process.env.NEXT_PUBLIC_INTERNAL_HOST,
		NEXT_PUBLIC_PUBLIC_HOST: process.env.NEXT_PUBLIC_PUBLIC_HOST,
	},
	serverRuntimeConfig: {
		host: process.env.NEXT_PUBLIC_INTERNAL_HOST,
	},
	publicRuntimeConfig: {
		host: process.env.NEXT_PUBLIC_PUBLIC_HOST,
	},
};

module.exports = nextConfig;

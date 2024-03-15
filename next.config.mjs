import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    experimental: {
        mdxRs: true,
        serverActions: true,
    },
    publicRuntimeConfig: {
        // Set the base URL for your site here
        metadataBase: 'https://www.elevenllm.dev',
    },
};

export default withContentlayer(nextConfig);
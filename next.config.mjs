/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'flowbite.s3.amazonaws.com',
                pathname:'/docs/**'
            },
            {
                protocol:'https',
                hostname:'via.placeholder.com',
            },
            {
                protocol:'https',
                hostname:'placehold.co',
            },
        ]
    }
};

export default nextConfig;

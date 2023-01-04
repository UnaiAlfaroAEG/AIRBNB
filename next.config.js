/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images:{
    domains:['upload.wikimedia.org','a0.muscache.com','links.papareact.com']
  },
  env:{
    mapbox_key: 'pk.eyJ1IjoidW5haWlpIiwiYSI6ImNsY2h3N2h3ZDA0bTYzb3A2cmV1cTQ0eXYifQ.AaIj4oYDp0v43Zfi4grn-A'
  }
}

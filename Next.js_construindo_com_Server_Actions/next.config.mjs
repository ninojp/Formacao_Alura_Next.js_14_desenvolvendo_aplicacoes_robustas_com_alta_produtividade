/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Método antigo, para definir fontes externas de arquivos
        // domains: ['raw.githubusercontent.com']
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'raw.githubusercontent.com',
              port: '',
              pathname: '**',
            },
          ],
    }
};

export default nextConfig;

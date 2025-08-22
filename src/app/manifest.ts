import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nico Möhn's Portfolio",
    short_name: 'Nico Möhn',
    description: "Nico Möhn's Portfolio",
    start_url: '/',
    display: 'standalone',
    orientation: 'any',
    categories: ['developer', 'portfolio'],
  };
}

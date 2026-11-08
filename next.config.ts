import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /*
   * Off on purpose. The page behaviours (lib/behaviour) enhance the
   * server-rendered markup once, after mount — some of them add their own
   * controls to the DOM. Strict mode's dev-only double mount would add those
   * twice. Production never double-mounts, so this changes nothing there.
   */
  reactStrictMode: false,

  /* v2/ sits inside the static project, which has its own lockfile. */
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;

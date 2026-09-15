/**
 * Environment detection helper for AI Studio Preview vs Production (Netlify / Custom Domain).
 */

export const envHelper = {
  /**
   * Returns true if running in AI Studio preview, Google Cloud Run container, or local dev.
   * Returns false when deployed to Netlify (*.netlify.app) or custom production domains.
   */
  isAIStudioOrDev(): boolean {
    if (typeof window === 'undefined') return false;

    const hostname = window.location.hostname.toLowerCase();

    // Explicitly deployed on Netlify or custom production domain
    if (
      hostname.includes('netlify.app') ||
      hostname.includes('sarkarirozgarupdate.com') ||
      hostname.includes('sarkarirozgarupdate.in')
    ) {
      return false;
    }

    // AI Studio dev/preview URLs (*.run.app, ais-dev-*, ais-pre-*) or local development
    const isDev = Boolean(
      (import.meta as unknown as { env?: { DEV?: boolean } }).env?.DEV
    );

    if (
      hostname.includes('run.app') ||
      hostname.includes('googleusercontent.com') ||
      hostname.includes('localhost') ||
      hostname === '127.0.0.1' ||
      isDev
    ) {
      return true;
    }

    return false;
  },

  /**
   * Decides whether to show the Admin Panel button/link in the public navigation.
   * In AI Studio (Preview mode): Always visible so the owner can manage jobs seamlessly.
   * In Production (Netlify): Hidden from ordinary viewers; only shown if the admin is currently authenticated.
   */
  shouldShowAdminInNavigation(isAdminLoggedIn: boolean): boolean {
    // If admin is currently logged in via password, always show it
    if (isAdminLoggedIn) return true;

    // In AI Studio Preview/Dev, show it by default so the creator can easily access it
    if (this.isAIStudioOrDev()) return true;

    // In Netlify / Production, keep it completely hidden from normal viewers
    return false;
  },

  /**
   * Returns current environment name for display badge
   */
  getEnvironmentLabel(): 'AI_STUDIO_PREVIEW' | 'PRODUCTION_NETLIFY' {
    return this.isAIStudioOrDev() ? 'AI_STUDIO_PREVIEW' : 'PRODUCTION_NETLIFY';
  },
};

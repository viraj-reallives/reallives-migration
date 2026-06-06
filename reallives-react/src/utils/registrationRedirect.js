export const APP_STORE_URL =
  'https://apps.apple.com/us/app/reallives-sim/id6475185270';

export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.reallivesworld.app';

/** @returns {'ios' | 'android' | null} */
export function getMobilePlatform() {
  if (typeof navigator === 'undefined') return null;

  const ua = navigator.userAgent || '';

  // iPad on iOS 13+ may report as MacIntel with touch support.
  const isIos =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  if (isIos) return 'ios';
  if (/Android/i.test(ua)) return 'android';

  return null;
}

/** App store URL on iPhone/iPad or Android; null on desktop or unknown mobile. */
export function getMobileAppStoreUrl() {
  const platform = getMobilePlatform();
  if (platform === 'ios') return APP_STORE_URL;
  if (platform === 'android') return PLAY_STORE_URL;
  return null;
}

/**
 * Desktop → web registration URL.
 * Mobile (iOS/Android) → native app store listing instead.
 */
export function navigateToRegistration(registerUrl) {
  if (!registerUrl) return;
  const destination = getMobileAppStoreUrl() ?? registerUrl;
  window.location.href = destination;
}

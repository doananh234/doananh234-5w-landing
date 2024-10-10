import { useEffect } from 'react';
import { W5W_DEEPLINK } from '~/constants';

export default function HandlerDeeplink() {
  useEffect(() => {
    const getMobileOS = () => {
      const ua = navigator.userAgent;
      if (/android/i.test(ua)) {
        return 'Android';
      } else if (
        /iPad|iPhone|iPod/.test(ua) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
      ) {
        return 'iOS';
      }
      return 'Other';
    };
    const os = getMobileOS();
    switch (os) {
      case 'Android':
        window.location.href = `${W5W_DEEPLINK.Android}${window.location.search}`;
        break;
      case 'iOS':
        window.location.href = `${W5W_DEEPLINK.iOS}${window.location.search}`;
    }
  }, []);

  return null;
}

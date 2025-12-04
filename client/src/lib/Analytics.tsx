import React, { useEffect } from 'react';

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const FB_PIXEL_ID = import.meta.env.VITE_FACEBOOK_PIXEL_ID as string | undefined;
const CLARITY_ID = import.meta.env.VITE_CLARITY_ID as string | undefined;
import { useConsent } from '@/contexts/ConsentContext';

function loadScript(src: string, attrs: Record<string, string> = {}) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const s = document.createElement('script');
  s.src = src;
  s.async = true;
  Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v));
  document.head.appendChild(s);
}

export default function AnalyticsLoader(): null {
  const { consent } = useConsent();

  useEffect(() => {
    if (!consent) return; // wait until user chooses
    if (!consent.analytics) return; // user declined analytics

    // Google Analytics 4 (gtag)
    if (GA_ID) {
      if (!(window as any).gtag) {
        loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
        (window as any).dataLayer = (window as any).dataLayer || [];
        function gtag() {
          (window as any).dataLayer.push(arguments);
        }
        (window as any).gtag = gtag;
        (window as any).gtag('js', new Date());
        (window as any).gtag('config', GA_ID);
      } else {
        (window as any).gtag('config', GA_ID);
      }
    }

    // Facebook Pixel
    if (FB_PIXEL_ID) {
      if (!(window as any).fbq) {
        !(function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
          if (f.fbq) return;
          n = f.fbq = function () {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
          };
          if (!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = true;
          n.version = '2.0';
          n.queue = [];
          t = b.createElement(e);
          t.async = true;
          t.src = v;
          s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s);
        })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

        (window as any).fbq('init', FB_PIXEL_ID);
        (window as any).fbq('track', 'PageView');
      } else {
        (window as any).fbq('init', FB_PIXEL_ID);
        (window as any).fbq('track', 'PageView');
      }

      // noscript pixel beacon
      const existing = document.getElementById('fb-pixel-noscript');
      if (!existing) {
        const nos = document.createElement('noscript');
        nos.id = 'fb-pixel-noscript';
        nos.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1"/>`;
        document.body.appendChild(nos);
      }
    }

    // Microsoft Clarity
    if (CLARITY_ID) {
      if (!(window as any).clarity) {
        (function (c: any, l: any, a: any, r: any, i: any, t?: any, y?: any) {
          c[a] = c[a] || function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
          t = l.createElement(r);
          t.async = 1;
          t.src = 'https://www.clarity.ms/tag/' + i;
          y = l.getElementsByTagName(r)[0];
          y.parentNode.insertBefore(t, y);
        })(window, document, 'clarity', 'script', CLARITY_ID);
      }
    }

    // no cleanup — scripts are global
  }, [consent]);

  return null;
}

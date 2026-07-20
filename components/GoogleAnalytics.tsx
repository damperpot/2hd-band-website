"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const measurementId = "G-XV06B9KCTB";
const consentKey = "2hd-analytics-consent";

export function GoogleAnalytics() {
  const [consent, setConsent] = useState<"granted" | "denied" | null>(null);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(consentKey);
    if (savedConsent === "granted" || savedConsent === "denied") {
      setConsent(savedConsent);
    }
  }, []);

  const chooseConsent = (choice: "granted" | "denied") => {
    window.localStorage.setItem(consentKey, choice);
    setConsent(choice);
  };

  return (
    <>
      {consent === "granted" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('consent', 'default', {
                analytics_storage: 'granted',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied'
              });
              gtag('config', '${measurementId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}

      {consent === null ? (
        <aside
          aria-label="Analytics preferences"
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl border border-white/15 bg-ink p-5 text-white shadow-2xl md:flex md:items-center md:justify-between md:gap-6"
        >
          <p className="text-sm leading-6 text-fog">
            2HD uses optional Google Analytics cookies to understand website visits and improve the
            booking experience. No advertising cookies are used.
          </p>
          <div className="mt-4 flex shrink-0 gap-3 md:mt-0">
            <button
              className="button-secondary px-4 py-2 text-sm"
              onClick={() => chooseConsent("denied")}
              type="button"
            >
              Decline
            </button>
            <button
              className="button-primary bg-rose px-4 py-2 text-sm text-white"
              onClick={() => chooseConsent("granted")}
              type="button"
            >
              Accept analytics
            </button>
          </div>
        </aside>
      ) : null}
    </>
  );
}

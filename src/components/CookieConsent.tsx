"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

type ConsentState = "pending" | "all" | "essential";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setShow(true);
  }, []);

  function accept(level: ConsentState) {
    localStorage.setItem("cookie_consent", level);
    setShow(false);

    if (level === "all") {
      // Enable GA and ad personalization
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
          ad_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted",
        });
      }
    } else {
      // Essential only — deny ad cookies, allow basic analytics
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("consent", "update", {
          analytics_storage: "granted",
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
        });
      }
    }
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-on-surface text-surface px-6 py-5 z-50 shadow-lg">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1 text-sm leading-relaxed">
          <p>
            We use cookies for analytics and to serve personalized advertisements via Google AdSense.
            By clicking &quot;Accept All,&quot; you consent to the use of all cookies including advertising cookies.
            You can choose &quot;Essential Only&quot; to decline non-essential cookies.
            Read our{" "}
            <Link href="/privacy" className="underline hover:opacity-80">
              Privacy Policy
            </Link>{" "}
            for more details.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => accept("essential")}
            className="border border-surface/30 text-surface px-4 py-2 rounded-sm font-label text-xs uppercase tracking-widest whitespace-nowrap hover:bg-surface/10 transition-colors"
          >
            Essential Only
          </button>
          <button
            onClick={() => accept("all")}
            className="bg-primary text-on-primary px-4 py-2 rounded-sm font-label text-xs uppercase tracking-widest whitespace-nowrap hover:opacity-90 transition-opacity"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}

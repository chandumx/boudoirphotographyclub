"use client";
import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("cookie_consent")) setShow(true);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-on-surface text-surface px-6 py-4 z-50 flex items-center justify-between gap-4 text-sm">
      <p>We use cookies and analytics to improve your experience. By continuing to use this site, you agree to our <a href="/privacy" className="underline">Privacy Policy</a>.</p>
      <button onClick={() => { localStorage.setItem("cookie_consent", "true"); setShow(false); }} className="bg-primary text-on-primary px-4 py-2 rounded-sm font-label text-xs uppercase tracking-widest whitespace-nowrap hover:opacity-90">Accept</button>
    </div>
  );
}

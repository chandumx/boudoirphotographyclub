"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-surface-container-lowest rounded-sm p-8 mt-8">
      <h2 className="font-headline text-xl text-on-surface mb-4">Send Us a Message</h2>

      {status === "sent" ? (
        <p className="text-primary font-medium">Thank you! Your message has been sent. We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full bg-surface border border-outline-variant rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full bg-surface border border-outline-variant rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
            />
          </div>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            required
            className="w-full bg-surface border border-outline-variant rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full bg-surface border border-outline-variant rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:outline-none resize-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="editorial-gradient text-on-primary py-3 px-8 font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "error" && (
            <p className="text-red-600 text-sm">Something went wrong. Please try again or email us directly.</p>
          )}
        </form>
      )}
    </div>
  );
}

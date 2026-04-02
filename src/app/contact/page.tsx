import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Boudoir Photography Club",
  description:
    "Get in touch with Boudoir Photography Club. Questions about our directory, listing your studio, or partnership opportunities? We are here to help.",
};

export default function ContactPage() {
  return (
    <div className="bg-surface text-on-surface">
      <div className="max-w-[800px] mx-auto px-6 sm:px-10 py-16">
        <h1 className="font-headline text-4xl md:text-5xl italic text-on-surface mb-8">
          Contact Us
        </h1>

        <div className="space-y-8 text-on-surface-variant">
          <p className="text-lg">
            Have questions about Boudoir Photography Club? Whether you are a client
            looking for a photographer or a professional wanting to join our
            directory, we would love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface-container-lowest rounded-sm p-8">
              <span className="material-symbols-outlined text-3xl text-primary mb-4 block">mail</span>
              <h2 className="font-headline text-xl text-on-surface mb-2">Email Us</h2>
              <p className="text-sm mb-4">For general inquiries and support</p>
              <a href="mailto:hello@boudoirphotographyclub.com" className="text-primary hover:underline text-sm">
                hello@boudoirphotographyclub.com
              </a>
            </div>

            <div className="bg-surface-container-lowest rounded-sm p-8">
              <span className="material-symbols-outlined text-3xl text-primary mb-4 block">camera</span>
              <h2 className="font-headline text-xl text-on-surface mb-2">For Photographers</h2>
              <p className="text-sm mb-4">Listing inquiries and partnerships</p>
              <a href="mailto:photographers@boudoirphotographyclub.com" className="text-primary hover:underline text-sm">
                photographers@boudoirphotographyclub.com
              </a>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-sm p-8 mt-8">
            <h2 className="font-headline text-xl text-on-surface mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full bg-surface border border-outline-variant rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:outline-none" />
                <input type="email" placeholder="Your Email" className="w-full bg-surface border border-outline-variant rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:outline-none" />
              </div>
              <input type="text" placeholder="Subject" className="w-full bg-surface border border-outline-variant rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:outline-none" />
              <textarea placeholder="Your Message" rows={5} className="w-full bg-surface border border-outline-variant rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:outline-none resize-none" />
              <button type="submit" className="editorial-gradient text-on-primary py-3 px-8 font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

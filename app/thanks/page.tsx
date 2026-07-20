import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking enquiry sent | 2HD",
  robots: {
    index: false,
    follow: false
  }
};

export default function ThanksPage() {
  return (
    <main className="flex min-h-screen items-center bg-charcoal px-6 py-20 text-white">
      <section className="mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-4 text-[#d7a86e]">Booking enquiry sent</p>
        <h1 className="display-heading text-6xl md:text-8xl">Thanks for getting in touch.</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-fog">
          Your enquiry is on its way to 2HD. We&apos;ll check the date and details and reply as soon as we can.
        </p>
        <Link className="button-primary mt-10 inline-flex bg-rose text-white hover:bg-white hover:text-ink" href="/">
          Return to the 2HD website
        </Link>
      </section>
    </main>
  );
}

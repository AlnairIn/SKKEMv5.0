import InquiryForm from "@/components/forms/InquiryForm";

export default function InquirySection() {
  return (
    <section id="quote" className="container-x scroll-mt-24 py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">RFP &amp; proposals</p>
          <h2 className="mt-2 text-3xl font-bold text-navy-800 sm:text-4xl">Send us your scope of work</h2>
          <p className="mt-4 leading-relaxed text-slate-500">
            Share an RFP, tender or technical requirement and our team will respond with a proposal. Requests go
            straight to our business development and engineering team.
          </p>
        </div>
        <div className="card p-6 sm:p-8 lg:col-span-7">
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}

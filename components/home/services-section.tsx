import { ChevronItem } from "@/components/home/chevron-item";
import {
  accountingItems,
  consultancyItems,
  loanItems,
  noticeResolutionItems,
  planningItems,
  registrationItems,
  returnFilingItems,
  virtualOfficeItems,
} from "@/components/home/home-data";

function InfoCard({
  icon,
  title,
  description,
  iconClassName = "text-primary text-4xl",
  iconWrapperClassName = "bg-primary/10",
}: {
  icon: string;
  title: string;
  description: string;
  iconClassName?: string;
  iconWrapperClassName?: string;
}) {
  return (
    <div className="rounded-3xl p-12 flex flex-col justify-center min-h-[400px] bg-surface-container-high border border-primary/5">
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${iconWrapperClassName}`}
      >
        <span
          className={`material-symbols-outlined ${iconClassName}`}
          data-icon={icon}
        >
          {icon}
        </span>
      </div>
      <h3 className="font-headline text-3xl font-black mb-4">{title}</h3>
      <p className="text-on-surface-variant text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function ActionButtons({
  knowMoreTone = "border-2 border-primary/20 text-primary hover:bg-surface-container-low",
}: {
  knowMoreTone?: string;
}) {
  return (
    <div className="flex flex-wrap gap-4">
      <button className="cursor-pointer bg-primary text-on-primary px-8 py-4 rounded-lg font-bold editorial-shadow hover:opacity-90 transition-all">
        Request a Call Back
      </button>
      <button
        className={`cursor-pointer px-8 py-4 rounded-lg font-bold transition-all ${knowMoreTone}`}
      >
        Know More
      </button>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="py-32 space-y-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <p className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4">
              Core Competency
            </p>
            <h2 className="font-headline text-5xl font-black text-on-surface mb-8 leading-tight">
              Return Filing
            </h2>
            <ul className="space-y-4 mb-10">
              {returnFilingItems.map((item) => (
                <ChevronItem key={item}>{item}</ChevronItem>
              ))}
            </ul>
            <ActionButtons />
          </div>
          <InfoCard
            description="Precision-driven filing that minimizes risk and maximizes your financial clarity. Every form, every deadline, handled with absolute accuracy."
            icon="description"
            title="Meticulous Documentation"
          />
        </div>
      </div>

      <div className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="bg-surface-container-lowest rounded-3xl p-12 editorial-shadow border border-primary/5 flex flex-col justify-center min-h-[400px]">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <span
                  className="material-symbols-outlined text-primary text-4xl"
                  data-icon="gavel"
                >
                  gavel
                </span>
              </div>
              <h3 className="font-headline text-3xl font-black mb-4">
                Strategic Representation
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Professional advocacy in tax matters. We resolve complex notices
                and represent your interests before fiscal authorities with
                expert precision.
              </p>
            </div>
            <div>
              <p className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4">
                Conflict Resolution
              </p>
              <h2 className="font-headline text-5xl font-black text-on-surface mb-8 leading-tight">
                Assessment & Notice Resolution
              </h2>
              <ul className="space-y-4 mb-10">
                {noticeResolutionItems.map((item) => (
                  <ChevronItem key={item}>{item}</ChevronItem>
                ))}
              </ul>
              <ActionButtons knowMoreTone="border-2 border-primary/20 text-primary hover:bg-surface-container-lowest" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-5 bg-surface-container rounded-3xl p-12">
          <h3 className="font-headline text-4xl font-black mb-6">
            Registrations & Compliance
          </h3>
          <ul className="space-y-4 mb-8">
            {registrationItems.map((item) => (
              <ChevronItem key={item} compact>
                {item}
              </ChevronItem>
            ))}
          </ul>
          <div className="pt-6 border-t border-outline-variant/30 flex justify-between items-center">
            <button className="cursor-pointer text-primary font-bold text-sm underline underline-offset-8">
              Know More
            </button>
            <button className="cursor-pointer bg-primary text-on-primary px-6 py-2 rounded-lg text-sm font-bold">
              Request Callback
            </button>
          </div>
        </div>
        <div className="md:col-span-7 bg-surface-container-lowest editorial-shadow rounded-3xl p-12 flex flex-col justify-center border border-surface-container">
          <h3 className="font-headline text-4xl font-black mb-6">
            Virtual Office Facilities
          </h3>
          <p className="text-on-surface-variant mb-8 max-w-md">
            Establish your business presence in premium locations with our
            compliant virtual office solutions. Perfect for GST and ROC
            compliance.
          </p>
          <ul className="grid grid-cols-2 gap-4 mb-8">
            {virtualOfficeItems.map((item) => (
              <ChevronItem key={item} compact>
                {item}
              </ChevronItem>
            ))}
          </ul>
          <button className="cursor-pointer bg-primary text-on-primary w-fit px-10 py-4 rounded-lg font-bold">
            Request a Call Back
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 space-y-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-headline text-5xl font-black text-on-surface mb-8">
              Consultancy & Compliances
            </h2>
            <ul className="space-y-4 mb-10">
              {consultancyItems.map((item) => (
                <ChevronItem key={item}>{item}</ChevronItem>
              ))}
            </ul>
            <div className="flex gap-4">
              <button className="cursor-pointer bg-primary text-on-primary px-8 py-4 rounded-lg font-bold">
                Request a Call Back
              </button>
              <button className="cursor-pointer border-2 border-primary/20 text-primary px-8 py-4 rounded-lg font-bold">
                Know More
              </button>
            </div>
          </div>
          <InfoCard
            description="Sophisticated tax planning and structural business advice tailored to your unique commercial objectives and regulatory requirements."
            icon="strategy"
            title="Advisory Excellence"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="bg-primary-container/10 rounded-3xl p-12 border border-primary/10 order-2 md:order-1 flex flex-col justify-center min-h-[400px]">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
              <span
                className="material-symbols-outlined text-primary text-4xl"
                data-icon="calculate"
              >
                calculate
              </span>
            </div>
            <h3 className="font-headline text-3xl font-black mb-4">
              Financial Intelligence
            </h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Real-time accounting solutions that turn data into insights. Our
              cloud-based approach ensures your books are always ready for
              strategic decisions.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-headline text-5xl font-black text-on-surface mb-8">
              Virtual Accounting & Bookkeeping
            </h2>
            <ul className="space-y-4 mb-10">
              {accountingItems.map((item) => (
                <ChevronItem key={item}>{item}</ChevronItem>
              ))}
            </ul>
            <div className="flex gap-4">
              <button className="cursor-pointer bg-primary text-on-primary px-8 py-4 rounded-lg font-bold">
                Request a Call Back
              </button>
              <button className="cursor-pointer border-2 border-primary/20 text-primary px-8 py-4 rounded-lg font-bold">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-surface-container py-32">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-surface-container-lowest p-12 rounded-3xl editorial-shadow border border-primary/5">
            <div className="w-16 h-16 bg-primary-container/20 rounded-2xl flex items-center justify-center mb-8">
              <span
                className="material-symbols-outlined text-primary text-3xl"
                data-icon="account_balance"
              >
                account_balance
              </span>
            </div>
            <h3 className="font-headline text-3xl font-black mb-6">
              Loan Assistance & Documentation
            </h3>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              Securing capital requires flawless documentation. We prepare the
              reports that banks and investors trust.
            </p>
            <ul className="space-y-3 mb-10">
              {loanItems.map((item) => (
                <ChevronItem key={item} compact>
                  {item}
                </ChevronItem>
              ))}
            </ul>
            <button className="cursor-pointer w-full bg-primary text-on-primary py-4 rounded-lg font-bold">
              Get Loan Consultation
            </button>
          </div>
          <div className="bg-surface-container-lowest p-12 rounded-3xl editorial-shadow border border-primary/5">
            <div className="w-16 h-16 bg-secondary-container/30 rounded-2xl flex items-center justify-center mb-8">
              <span
                className="material-symbols-outlined text-secondary text-3xl"
                data-icon="trending_up"
              >
                trending_up
              </span>
            </div>
            <h3 className="font-headline text-3xl font-black mb-6">
              Financial Planning & Advisory
            </h3>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              Bespoke investment strategies designed to preserve and grow your
              wealth through sophisticated market analysis.
            </p>
            <ul className="space-y-3 mb-10">
              {planningItems.map((item) => (
                <ChevronItem key={item} compact>
                  {item}
                </ChevronItem>
              ))}
            </ul>
            <button className="cursor-pointer w-full border-2 border-primary text-primary py-4 rounded-lg font-bold hover:bg-primary hover:text-on-primary transition-all">
              Connect with Advisor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

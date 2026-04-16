import Image from "next/image";
import { GlobeIcon, MessageCircleIcon } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface full-width relative border-t-0">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 px-12 py-20 max-w-7xl mx-auto">
        <div className="md:col-span-2">
          <div className="text-xl font-serif font-bold text-inverse-on-surface mb-6">
            TAXsafar
          </div>
          <p className="text-inverse-on-surface/70 text-sm leading-relaxed mb-8">
            Professional financial custodians delivering editorial-grade tax
            and accounting solutions since 2024.
          </p>
        </div>
        <div>
          <h4 className="font-sans text-sm tracking-wide font-bold text-inverse-on-surface mb-6">
            Services
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                className="text-inverse-on-surface/70 hover:text-inverse-on-surface underline-offset-4 underline text-sm transition-all duration-300"
                href="#"
              >
                Return Filing
              </a>
            </li>
            <li>
              <a
                className="text-inverse-on-surface/70 hover:text-inverse-on-surface underline-offset-4 underline text-sm transition-all duration-300"
                href="#"
              >
                GST Registration
              </a>
            </li>
            <li>
              <a
                className="text-inverse-on-surface/70 hover:text-inverse-on-surface underline-offset-4 underline text-sm transition-all duration-300"
                href="#"
              >
                Virtual Accounting
              </a>
            </li>
            <li>
              <a
                className="text-inverse-on-surface/70 hover:text-inverse-on-surface underline-offset-4 underline text-sm transition-all duration-300"
                href="#"
              >
                Consultancy Services
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-sm tracking-wide font-bold text-inverse-on-surface mb-6">
            Company
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                className="text-inverse-on-surface/70 hover:text-inverse-on-surface underline-offset-4 underline text-sm transition-all duration-300"
                href="#"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className="text-inverse-on-surface/70 hover:text-inverse-on-surface underline-offset-4 underline text-sm transition-all duration-300"
                href="#"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                className="text-inverse-on-surface/70 hover:text-inverse-on-surface underline-offset-4 underline text-sm transition-all duration-300"
                href="#"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                className="text-inverse-on-surface/70 hover:text-inverse-on-surface underline-offset-4 underline text-sm transition-all duration-300"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-sm tracking-wide font-bold text-inverse-on-surface mb-6">
            Support
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                className="text-inverse-on-surface/70 hover:text-inverse-on-surface underline-offset-4 underline text-sm transition-all duration-300"
                href="#"
              >
                Terms of Use
              </a>
            </li>
            <li>
              <a
                className="text-inverse-on-surface/70 hover:text-inverse-on-surface underline-offset-4 underline text-sm transition-all duration-300"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-inverse-on-surface/70 hover:text-inverse-on-surface underline-offset-4 underline text-sm transition-all duration-300"
                href="#"
              >
                Payment Policy
              </a>
            </li>
            <li>
              <a
                className="text-inverse-on-surface/70 hover:text-inverse-on-surface underline-offset-4 underline text-sm transition-all duration-300"
                href="#"
              >
                Help Center
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-inverse-surface text-inverse-on-surface border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-base font-semibold">
              <a
                className="text-inverse-on-surface hover:text-primary-fixed transition-colors"
                href="#"
              >
                Privacy & Terms
              </a>
              <a
                className="text-inverse-on-surface hover:text-primary-fixed transition-colors"
                href="#"
              >
                Contact Us
              </a>
            </div>
            <p className="text-center md:flex-1 text-sm md:text-base text-inverse-on-surface/70">
              © 2026 TaxSafar. All rights reserved.
            </p>
            <div className="flex items-center justify-start md:justify-end gap-4 text-inverse-on-surface/80">
              <span
                className="w-8 h-8 flex items-center justify-center cursor-pointer transition-colors hover:text-inverse-on-surface"
                aria-label="WhatsApp"
              >
                <MessageCircleIcon className="h-5 w-5" />
              </span>
              <span
                className="w-8 h-8 flex items-center justify-center cursor-pointer transition-colors hover:text-inverse-on-surface"
                aria-label="Instagram"
              >
                <Image
                  className="h-5 w-5"
                  src="/insta.svg"
                  alt="insta"
                  height={16}
                  width={16}
                />
              </span>
              <span
                className="w-8 h-8 flex items-center justify-center cursor-pointer transition-colors hover:text-inverse-on-surface"
                aria-label="Google"
              >
                <GlobeIcon className="h-5 w-5" />
              </span>
              <span
                className="w-8 h-8 flex items-center justify-center cursor-pointer transition-colors hover:text-inverse-on-surface"
                aria-label="LinkedIn"
              >
                <Image
                  className="h-5 w-5"
                  src="/linkedin.svg"
                  alt="linkedin"
                  height={16}
                  width={16}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

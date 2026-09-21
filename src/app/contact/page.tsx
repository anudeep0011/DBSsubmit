import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ContactForm } from '@/components/contact/ContactForm';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SITE } from '@/lib/constants';
import { EnvelopeMessageIcon } from '@/components/ui/Illustrations';

export const metadata = {
  title: 'Contact Us | DBS-Express',
  description: 'Get in touch with the DBS-Express support and sales team for enquiries on DBS checks.',
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Compact White Header */}
      <header className="bg-white text-navy-900 pt-32 pb-12 border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <ScrollReveal delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-navy-900 leading-[1.1]">
                  Get in touch
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal max-w-2xl">
                  Our support team is available Monday–Friday, 9am–5pm. For DBS application status updates, log in to your dashboard directly.
                </p>
              </ScrollReveal>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <ScrollReveal delay={0.25}>
                <EnvelopeMessageIcon className="w-28 h-28 sm:w-32 sm:h-32" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Split Panel Form & Contact Info */}
      <SectionWrapper bg="navy-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
          
          {/* Contact Details */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-10">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-semibold text-navy-900 tracking-tight">Direct channels</h2>
                <p className="text-base text-gray-700 leading-relaxed font-normal">
                  Reach our team by phone, email, or post for guidance on organisational registration and eligibility.
                </p>
              </div>

              <div className="space-y-6 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-navy-200 flex items-center justify-center text-navy-900 shrink-0 shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium text-navy-600">Office address</h3>
                    <p className="text-navy-900 text-base mt-1 font-normal">{SITE.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-navy-200 flex items-center justify-center text-navy-900 shrink-0 shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium text-navy-600">Phone support</h3>
                    <p className="text-navy-900 text-base font-medium mt-1">{SITE.phone}</p>
                    <p className="text-xs text-navy-600 mt-0.5 font-normal">{SITE.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-navy-200 flex items-center justify-center text-navy-900 shrink-0 shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium text-navy-600">Email</h3>
                    <p className="text-navy-900 text-base mt-1 font-normal">{SITE.email}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-navy-200 text-xs text-gray-700 space-y-2 shadow-sm">
                <p className="font-medium text-navy-900 text-sm">Note regarding DBS application status checks:</p>
                <p className="leading-relaxed font-normal">
                  If you have already submitted an application through our platform, please log in directly to your dashboard to view real-time tracking updates.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Form Component */}
          <ScrollReveal delay={0.35}>
            <ContactForm />
          </ScrollReveal>

        </div>
      </SectionWrapper>
    </>
  );
}

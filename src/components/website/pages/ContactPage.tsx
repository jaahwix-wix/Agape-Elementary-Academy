/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation, 
  Bus,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Globe,
  ExternalLink,
  HeartHandshake
} from 'lucide-react';
import { SCHOOL_INFO } from '../../../initialData';
import ContactSection from '../ContactSection';
import ScrollFadeIn from '../ScrollFadeIn';

export default function ContactPage() {
  return (
    <div className="space-y-12 pb-12" id="website-contact-page">
      {/* Banner */}
      <ScrollFadeIn direction="up">
        <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
          <div className="max-w-3xl space-y-3">
            <span className="px-3 py-1 rounded-full bg-blue-800/80 text-blue-200 text-xs font-black uppercase tracking-wider">
              Campus Secretariat & International Partner
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Connect With Agape Elementary & Academy
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Whether inquiring about kindergarten enrollment, elementary admission, secondary academy (JSS/SSS) records, or student sponsorship through Educate the Nations, we are here to assist you.
            </p>
          </div>
        </section>
      </ScrollFadeIn>

      {/* Campus Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <ScrollFadeIn direction="up" delay={0.05}>
          <div className="h-full p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-slate-900">Campus Physical Address</h3>
            <p className="text-xs text-slate-700 leading-relaxed font-bold">
              Agape Educational Campus, Rokel Community, Sierra Leone.
            </p>
            <p className="text-[11px] text-slate-500 font-medium">
              Agape Elementary School and Academy • "The Home of the Eagles"
            </p>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn direction="up" delay={0.1}>
          <div className="h-full p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-slate-900">Campus Phone & SMS</h3>
            <p className="text-sm font-black font-mono text-slate-900 leading-relaxed">
              <a href="tel:+23274155000" className="hover:text-blue-600 transition-colors">
                +232 74155000
              </a>
            </p>
            <p className="text-xs text-slate-600">
              Direct voice calls & SMS inquiries for Admissions, Bursary, and Principal's Secretariat.
            </p>
            <p className="text-[11px] text-slate-400 font-medium">
              Network coverage: Orange & Africell
            </p>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn direction="up" delay={0.15}>
          <div className="h-full p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-slate-900">Educate the Nations Partner</h3>
            <p className="text-sm font-black font-mono text-amber-800 leading-relaxed">
              <a href="tel:2293294825" className="hover:underline">
                (229) 329-4825
              </a>
            </p>
            <p className="text-xs text-slate-600">
              International 501(c)(3) sponsorship & student scholarship programs.
            </p>
            <a 
              href="https://www.educatethenations.org/aboutagape" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[11px] text-amber-700 font-bold hover:underline flex items-center gap-1 mt-1"
            >
              <span>educatethenations.org/aboutagape</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn direction="up" delay={0.2}>
          <div className="h-full p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-slate-900">Office Working Hours</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              <strong>Monday – Friday:</strong> 7:30 AM – 4:30 PM<br />
              <strong>Saturday:</strong> 8:00 AM – 1:00 PM<br />
              <strong>Sunday:</strong> Closed for Christian Worship
            </p>
            <p className="text-[11px] text-slate-400 font-medium">
              Campus gates open at 6:45 AM for pupil arrival
            </p>
          </div>
        </ScrollFadeIn>
      </div>

      {/* Primary Contact Form Section with Validation */}
      <ContactSection />

      {/* Transit & Driving Directions Section */}
      <ScrollFadeIn direction="up">
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-black text-blue-400 uppercase tracking-wider">
                Directions & Transit Information
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                Visiting the Agape Campus in Rokel Community
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-950 border border-blue-700 text-blue-300 text-xs font-bold">
              <Navigation className="w-4 h-4 text-amber-400" />
              <span>Rokel Community, Sierra Leone</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed">
            <div className="space-y-3 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
              <h4 className="font-black text-white text-sm flex items-center gap-2">
                <Bus className="w-4 h-4 text-amber-400" />
                Transit & Access to Rokel Campus
              </h4>
              <p>
                Agape Elementary and Academy is located in the Rokel Community, Sierra Leone. The campus is readily accessible via public transit, local motorbikes (okadas), and private vehicles. Follow directions towards the Agape School landmark in central Rokel.
              </p>
            </div>

            <div className="space-y-3 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
              <h4 className="font-black text-white text-sm flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-400" />
                Visitor Registration & Security Protocols
              </h4>
              <p>
                All visiting parents, guardians, and education inspectors are required to check in at the campus administrative gate. Inquiries regarding admissions, bursary payments, or student sponsorship verification will be directed to the registrar's office.
              </p>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
    </div>
  );
}

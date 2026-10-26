/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  BookOpen, 
  Compass, 
  MapPin, 
  GraduationCap, 
  HeartHandshake, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Target,
  Globe,
  ExternalLink,
  Phone,
  Mail,
  Flame
} from 'lucide-react';
import schoolLogo from '../../../assets/logo.jpg';
import { SCHOOL_INFO } from '../../../initialData';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="space-y-12 pb-10" id="website-about-page">
      {/* 1. Page Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/80 text-blue-200 text-xs font-bold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Rokel Community, Sierra Leone</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            About Agape Elementary & Academy
          </h1>
          <p className="text-base text-amber-300 font-extrabold uppercase tracking-wider">
            "The Home of the Eagles" • The Future Begins Here
          </p>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Founded on September 24, 2012 by Rev. Dr. Samuel Kargbo and Mrs. Emma Emilia Kargbo. Equipping children with godly character and quality education in a Christ-centered environment for healthy community and national transformation.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a 
              href="https://www.educatethenations.org/aboutagape" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-all shadow-md"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Partner: Educate the Nations (501c3)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Official Crest & Coat of Arms Explanation */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl p-3 bg-blue-50/50 border-4 border-blue-600 shadow-xl overflow-hidden flex items-center justify-center">
              <img 
                src={schoolLogo} 
                alt="Official Crest of Agape Academy - The Future Begins Here"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="mt-4 px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-extrabold text-xs">
              Official School Crest & Coat of Arms
            </span>
            <p className="text-xs text-slate-500 font-bold mt-1">
              "The Future Begins Here" • Recognized by MEST
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Symbolism of the Agape Emblem</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              The Heraldic Meaning of the Agape Academy Crest
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every element of our official crest embodies the foundational vision established by founders <strong>{SCHOOL_INFO.founderName}</strong> and <strong>{SCHOOL_INFO.founderWife}</strong>:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 font-black text-slate-900 text-sm mb-1">
                  <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-xs">1</span>
                  <span>The Blue & Gold Shield</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Signifies the shield of Christian faith, divine steadfastness, academic honor, and moral protection for every student under our care.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 font-black text-slate-900 text-sm mb-1">
                  <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-xs">2</span>
                  <span>The Graduation Cap & Open Book</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Represents academic rigor, knowledge, literacy, and graduation achievement rooted in God's Holy Word and disciplined intellectual training.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 font-black text-slate-900 text-sm mb-1">
                  <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-xs">3</span>
                  <span>The Laurel Wreath of Victory</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Surrounding the shield, the laurel wreath honors excellence, outstanding performance in national examinations (NPSE, BECE, WASSCE), and Christian triumph.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 font-black text-slate-900 text-sm mb-1">
                  <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-xs">4</span>
                  <span>"THE FUTURE BEGINS HERE" Banner</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our core foundational declaration: every student's promising tomorrow, professional destiny, and leadership begin right here at Agape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Founding Story & Genesis */}
      <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-lg">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-black text-amber-400 uppercase tracking-wider">
                Founders & Executive History
              </span>
              <h3 className="text-2xl font-black text-white">
                Rev. Dr. Samuel Kargbo & Mrs. Emma Emilia Kargbo
              </h3>
              <p className="text-xs text-slate-400">
                Founders of Agape Elementary School and Academy • Established September 24, 2012
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
            <p>
              The <strong>Agape Elementary School and Academy</strong> was founded and established by <strong>Rev. Dr. Samuel Kargbo and wife Mrs. Emma Emilia Kargbo</strong> on the <strong>24th of September 2012</strong>, in a bid to promote quality education for the purpose of raising responsible future citizens with the required discipline to contribute toward national peace and development.
            </p>
            <p>
              Founded on the principle of <em>"Building the Future Today"</em>, Agape is a private Christian school reaching out with the love of Christ to her students irrespective of their background. The school commenced with just <strong>36 students in 2012</strong> and has grown to over <strong>912+ students</strong>!
            </p>
            
            <div className="p-5 rounded-2xl bg-slate-800/80 border-l-4 border-amber-400 space-y-2 text-slate-200">
              <h4 className="font-bold text-white text-sm">Three Catalyst Factors for Establishment in Rokel Community:</h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                  <span><strong>Low Quality Education in Government Schools:</strong> Overcoming inadequate education provision that previously caused high student dropout rates in the Rokel Community.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                  <span><strong>Affordability for Parents & Guardians:</strong> Providing affordable, accessible top-tier education locally so parents do not have to struggle to finance distant high-performing schools outside Rokel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                  <span><strong>Reaching Out with Christ's Love:</strong> In a community that is 80% Muslim dominated, winning young minds with the gospel of Christ and godly love, who in turn share that transformative message of peace and character with their families.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Vision, Mission, & Core Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-base font-black text-slate-900">School Vision</h3>
          <p className="text-xs text-slate-600 leading-relaxed font-semibold">
            "Equipping Children with Godly Character for Excellent Living"
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            Cultivating moral steadfastness, spiritual depth, and academic brilliance so every graduate lives an exemplary life that honors God and serves humanity.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-base font-black text-slate-900">School Mission</h3>
          <p className="text-xs text-slate-600 leading-relaxed font-semibold">
            "We exist to equip school children with quality education in a Christ centered environment for healthy community and national transformation."
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            Delivering accessible, world-class teaching through qualified staff, structured counseling, and modern science and computer laboratories.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-base font-black text-slate-900">Four Core Values</h3>
          <ul className="text-xs text-slate-700 space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span><strong>INTEGRITY:</strong> Walking in honesty, transparency, and moral uprightness in all matters.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>EXCELLENCE:</strong> Pursuit of distinction in examinations, character, and personal effort.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
              <span><strong>PATRIOTISM:</strong> Dedication to the peace, civic progress, and prosperity of Sierra Leone.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
              <span><strong>TRANSFORMATION:</strong> Changing lives, families, and communities through Christ-centered education.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 5. Three Distinct School Categories */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-6">
        <div>
          <span className="text-xs font-black text-blue-700 uppercase tracking-wider">
            Academic Structure
          </span>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
            Three Progressive School Categories
          </h2>
          <p className="text-xs text-slate-500">
            Providing seamless educational growth from early childhood to university entrance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-lg bg-amber-200 text-amber-900 font-extrabold text-[11px]">
                Ages 2 to 5 Years
              </span>
              <Users className="w-5 h-5 text-amber-700" />
            </div>
            <h3 className="text-lg font-black text-slate-900">The Kindergarten</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Early childhood foundational literacy, phonics, number discovery, Christian rhymes, sensory coordination, and joyful social play in a safe, loving environment.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-lg bg-blue-200 text-blue-900 font-extrabold text-[11px]">
                Ages 6 to 12 Years
              </span>
              <BookOpen className="w-5 h-5 text-blue-700" />
            </div>
            <h3 className="text-lg font-black text-slate-900">The Elementary School</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Class 1 through Class 6 rigorous curriculum building mastery in Quantitative and Verbal Aptitude, Mathematics, Language Arts, and Science, culminating in outstanding NPSE results.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-lg bg-purple-200 text-purple-900 font-extrabold text-[11px]">
                Ages 13 to 18 Years
              </span>
              <GraduationCap className="w-5 h-5 text-purple-700" />
            </div>
            <h3 className="text-lg font-black text-slate-900">The Academy</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Junior Secondary School (JSS 1-3) for BECE preparation and Senior Secondary School (SSS 1-3) with specialized tracks in Science, Arts, and Commerce for WASSCE excellence.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Why Students Attend Agape */}
      <section className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-6">
        <div>
          <span className="text-xs font-black text-emerald-700 uppercase tracking-wider">
            Distinction & Excellence
          </span>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
            Why Students & Parents Choose Agape Elementary & Academy
          </h2>
          <p className="text-xs text-slate-500">
            Registered and recognized with the Ministry of Education, Science and Technology (MEST)
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>MEST Recognition</span>
            </div>
            <p className="text-xs text-slate-600">
              Fully recognized and registered as a Private Christian School with the Government of Sierra Leone.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Trained Faculty</span>
            </div>
            <p className="text-xs text-slate-600">
              Trained, certified, and deeply committed teaching and administrative staff passionate about student success.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Outstanding National Exams</span>
            </div>
            <p className="text-xs text-slate-600">
              Consistently high pass rates in NPSE, BECE, and WASSCE examinations among the finest in the region.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Science Lab & Library</span>
            </div>
            <p className="text-xs text-slate-600">
              Standard Science Laboratory, well-stocked Library, and dedicated Computer Lab with hands-on practice.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Affordable School Fees</span>
            </div>
            <p className="text-xs text-slate-600">
              Affordable tuition structured for families in Rokel, supported by international donor partnerships.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Rich Extra-Curriculars</span>
            </div>
            <p className="text-xs text-slate-600">
              Prayer devotions, sports, Thanksgiving Services, Prize Giving Ceremonies, excursions, Literary & Debating Society, and Discipleship Club.
            </p>
          </div>
        </div>
      </section>

      {/* 7. International Partnership: Educate the Nations, Inc. */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-blue-50 border-2 border-amber-300/80 rounded-3xl p-6 sm:p-10 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4 text-amber-700" />
              <span>International Non-Profit Partnership</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Partnered with Educate the Nations, Inc.
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              Agape Elementary and Academy is proud to partner with <strong>Educate the Nations, Inc.</strong>, a recognized 501(c)(3) not-for-profit corporation dedicated to breaking the cycle of poverty through education.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Through programs like <em>"Support a Student Sierra Leone"</em>, the <em>"Grace Life Scholarship Fund"</em>, and the <em>"Innovate Forward Campaign"</em>, our international sponsors provide tuition assistance, school supplies, learning technology, and teacher development support.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://www.educatethenations.org/aboutagape"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs flex items-center gap-2 transition-colors cursor-pointer shadow-sm"
              >
                <span>Visit Educate the Nations Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="mailto:info@educatethenations.org"
                className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs border border-slate-300 flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>info@educatethenations.org</span>
              </a>

              <span className="text-xs font-mono font-bold text-slate-600 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>(229) 329-4825</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-amber-200 text-center space-y-3 shadow-xs">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Globe className="w-8 h-8" />
            </div>
            <h4 className="font-black text-slate-900 text-base">Support a Student</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Give a child in Sierra Leone the gift of Christ-centered academic excellence.
            </p>
            <a
              href="https://www.educatethenations.org/aboutagape"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-colors"
            >
              Learn More & Sponsor
            </a>
          </div>
        </div>
      </section>

      {/* 8. Campus Physical Address & Contact */}
      <section className="bg-blue-50 border border-blue-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-blue-600 text-white">
              <MapPin className="w-5 h-5" />
            </span>
            <h3 className="text-lg font-black text-slate-900">
              Campus Location & Secretariat
            </h3>
          </div>
          <p className="text-sm font-bold text-slate-900">
            Agape Educational Campus, Rokel Community, Sierra Leone.
          </p>
          <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
            Located in the Rokel Community, our campus features multi-room elementary blocks, secondary classrooms, science lab, computer suite, and safe school bus routes.
          </p>
          <div className="pt-1 flex flex-wrap items-center gap-3 text-xs text-slate-700">
            <span className="inline-flex items-center gap-1.5 font-semibold text-blue-900 bg-blue-100/80 px-3 py-1.5 rounded-xl border border-blue-200">
              <span className="font-bold">Phone & Inquiries:</span>
              <a href="tel:+23274155000" className="font-mono font-black text-blue-800 hover:underline">+232 74155000</a>
            </span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-amber-900 bg-amber-100/80 px-3 py-1.5 rounded-xl border border-amber-200">
              <span className="font-bold">Partner Phone:</span>
              <span className="font-mono font-black text-amber-800">(229) 329-4825</span>
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('contact')}
          className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs transition-colors flex items-center gap-2 cursor-pointer flex-shrink-0 shadow-sm"
        >
          <span>Contact Campus Secretariat</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
}

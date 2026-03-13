import Image from "next/image";
import { MapPin, Phone, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: Brand */}
        <div className="lg:col-span-1 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-6">
            <span className="relative h-12 w-12 overflow-hidden rounded-full border border-amber-300/80 bg-black/70 shadow-[0_0_24px_rgba(251,191,36,0.24)]">
              <Image
                src="/logo.png"
                alt="The Motion Cure logo"
                width={48}
                height={48}
                sizes="48px"
                quality={100}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="relative">
              <span
                aria-hidden="true"
                className="absolute inset-0 blur-[10px] text-amber-300/35 text-xl font-bold tracking-widest uppercase"
              >
                Motion Cure
              </span>
              <span className="relative text-xl font-bold tracking-widest text-white uppercase">Motion Cure</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Expert physiotherapy led by Dr. Sadeeq Ur Rehman. Restoring movement, relieving pain, and enhancing lives without surgery.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Treatments</h4>
          <ul className="space-y-4">
            {["Sciatica & Back Pain", "Sports Injuries", "Post-Surgical Rehab", "Stroke Recovery", "Joint Pain"].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors text-sm flex items-center gap-2 group">
                  <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-5 group-hover:ml-0" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Get in Touch</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-400 text-sm">
              <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>0342-9255379</span>
            </li>
            <li className="flex items-start gap-3 text-gray-400 text-sm">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>Hayatabad Toll Plaza,<br/>Sami Tower, 4th Floor,<br/>Peshawar</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Hours */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Working Hours</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-gray-400">Monday - Saturday</span>
              <span className="text-white font-medium">9:00 AM - 9:00 PM</span>
            </li>
            <li className="flex justify-between pt-1">
              <span className="text-gray-400">Sunday</span>
              <span className="text-amber-500 font-medium">Closed</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} The Motion Cure Physiotherapy Clinic. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

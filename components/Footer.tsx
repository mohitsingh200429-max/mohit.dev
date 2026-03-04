import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-white py-16 px-6">
      <div className="max-w-[1200px] mx-auto">

        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="text-[24px] font-bold tracking-tight mb-6 block">
              Mohit.Dev
            </Link>

            <p className="text-[16px] text-white/60 max-w-[300px]">
              Conversion-focused websites for local businesses like dentists,
              travel agencies, law firms and service businesses.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[16px] font-medium mb-6">Navigation</h4>

            <ul className="space-y-4 text-[14px] text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>

              <li>
                <Link href="#projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>

              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-[16px] font-medium mb-6">Socials</h4>

            <ul className="space-y-4 text-[14px] text-white/60">

              <li>
                <a
                  href="https://www.linkedin.com/in/mohit-kumar-796616235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/mohitsingh200429-max"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[14px] text-white/40">

          <p>
            © {new Date().getFullYear()} Mohit. All rights reserved.
          </p>

          <a
            href="mailto:mohitsingh200429@gmail.com"
            className="text-[12px] md:text-[25px] font-bold font-small text-gray hover:text-white/80 transition-colors"
          >
            mohitsingh200429@gmail.com
          </a>

        </div>

      </div>
    </footer>
  );
}
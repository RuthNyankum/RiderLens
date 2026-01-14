import React from "react";
import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import {
  footerSections,
  socialLinks,
} from "../../components/constants/footer.constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-charcoal text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center sm:text-left">
          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-brand text-xl font-bold font-montserrat mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-white/80 hover:text-brand transition-colors duration-200 text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect Section */}
          <div>
            <h3 className="text-brand text-xl font-bold font-montserrat mb-4">
              Connect
            </h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-medium-gray hover:bg-brand rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label={social.ariaLabel}
                  >
                    <IconComponent className="w-6 h-6" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-sm text-white/70 text-center sm:text-left">
            <p>© {currentYear} RiderLens. All rights reserved.</p>

            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <Lock className="w-4 h-4" aria-hidden="true" />
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

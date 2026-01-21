import React from "react";

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-white border-b border-border-gray"
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <ol className="flex items-center gap-2 text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <React.Fragment key={`${item.label}-${index}`}>
                <li>
                  {!isLast ? (
                    <a
                      href={item.href || "#"}
                      className="text-medium-gray hover:text-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 rounded px-1 transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span
                      aria-current="page"
                      className="text-dark-gray font-medium"
                    >
                      {item.label}
                    </span>
                  )}
                </li>

                {!isLast && (
                  <li aria-hidden="true" className="text-medium-gray">
                    &gt;
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;

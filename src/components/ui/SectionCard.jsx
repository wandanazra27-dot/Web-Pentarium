export default function SectionCard({
  id,
  badge,
  titlePrefix,
  titleAccent,
  titleSuffix,
  subtitle,
  children,
  className = '',
  containerClassName = '',
}) {
  const hasHeading = Boolean(badge || titlePrefix || titleAccent || titleSuffix || subtitle);

  return (
    <section
      id={id}
      className={`w-full max-w-[1200px] mx-auto px-4 sm:px-6 my-10 sm:my-16 lg:my-20 ${containerClassName}`.trim()}
    >
      <div className={`section-card p-6 sm:p-10 lg:p-16 relative overflow-hidden ${className}`.trim()}>
        {hasHeading && (
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            {badge && (
              <span className="inline-block text-xs uppercase tracking-widest text-brand font-medium mb-3">
                {badge}
              </span>
            )}
            {(titlePrefix || titleAccent || titleSuffix) && (
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-ink leading-tight mb-4">
                {titlePrefix && <span>{titlePrefix} </span>}
                {titleAccent && <span className="serif-italic font-normal">{titleAccent}</span>}
                {titleSuffix && <span> {titleSuffix}</span>}
              </h2>
            )}
            {subtitle && (
              <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

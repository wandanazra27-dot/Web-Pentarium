export default function Button({
  as = 'button',
  variant = 'glossy',
  href,
  className = '',
  children,
  ...props
}) {
  const Comp = href ? 'a' : as;
  const variantClass = variant === 'outline' ? 'btn-outline' : variant === 'ghost' ? 'text-ink hover:text-brand px-4 py-2 transition-colors' : 'btn-glossy';

  return (
    <Comp
      href={href}
      className={`${variantClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Comp>
  );
}

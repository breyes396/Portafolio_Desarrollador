const VARIANT_CLASSES = {
  solid: 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-400',
  outline: 'border border-zinc-700 text-zinc-200 hover:border-indigo-500/50 hover:text-white',
}

function Button({
  href,
  external = true,
  onClick,
  icon,
  iconPosition = 'left',
  variant = 'solid',
  className = '',
  children,
}) {
  const classes = `inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-105 ${VARIANT_CLASSES[variant]} ${className}`

  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  )

  if (href) {
    return (
      <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  )
}

export default Button

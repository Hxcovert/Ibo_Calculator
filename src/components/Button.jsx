function Button({ label, onClick, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-14 items-center justify-center rounded-2xl bg-blue-50 text-xl font-semibold text-blue-900 shadow-sm transition duration-150 hover:bg-blue-100 active:scale-95 ${className}`}
    >
      {label}
    </button>
  )
}

export default Button
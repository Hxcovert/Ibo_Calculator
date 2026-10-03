function Display({ value }) {
  return (
    <div className="flex h-24 items-end justify-end overflow-hidden rounded-2xl bg-blue-950 px-5 py-4">
      <span
        className="max-w-full truncate text-right text-4xl font-semibold text-white"
        title={value}
      >
        {value}
      </span>
    </div>
  )
}

export default Display
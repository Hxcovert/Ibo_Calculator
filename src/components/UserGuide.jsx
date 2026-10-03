function UserGuide() {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-xl">

      <h2 className="text-2xl font-bold text-slate-800">
        User Guide
      </h2>

      <p className="mt-2 text-slate-600">
        Follow these steps to use the calculator.
      </p>

      <div className="mt-6">
        <h3 className="text-lg font-bold text-slate-800">
          How to Use
        </h3>

        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-600">
          <li>Enter the first number.</li>
          <li>Select an arithmetic operator.</li>
          <li>Enter the second number.</li>
          <li>Press the equals button to display the result.</li>
          <li>Press AC to reset the calculator.</li>
        </ol>
      </div>

      <div className="mt-7">
        <h3 className="text-lg font-bold text-slate-800">
          Supported Operations
        </h3>

        <div className="mt-3 grid grid-cols-2 gap-3">

          <div className="rounded-xl bg-slate-100 p-3 text-center">
            <p className="text-2xl font-bold text-slate-800">+</p>
            <p className="text-sm text-slate-500">Addition</p>
          </div>

          <div className="rounded-xl bg-slate-100 p-3 text-center">
            <p className="text-2xl font-bold text-slate-800">−</p>
            <p className="text-sm text-slate-500">Subtraction</p>
          </div>

          <div className="rounded-xl bg-slate-100 p-3 text-center">
            <p className="text-2xl font-bold text-slate-800">×</p>
            <p className="text-sm text-slate-500">Multiplication</p>
          </div>

          <div className="rounded-xl bg-slate-100 p-3 text-center">
            <p className="text-2xl font-bold text-slate-800">÷</p>
            <p className="text-sm text-slate-500">Division</p>
          </div>

        </div>
      </div>

      <div className="mt-7 rounded-2xl bg-blue-50 p-4">
        <h3 className="font-bold text-blue-800">
          Keyboard Support
        </h3>

        <p className="mt-1 text-sm text-blue-700">
          You can also use your keyboard to enter numbers,
          operators, decimal points, and the Enter key for the result.
        </p>
      </div>

      <div className="mt-4 rounded-2xl bg-red-50 p-4">
        <h3 className="font-bold text-red-800">
          Error Handling
        </h3>

        <p className="mt-1 text-sm text-red-700">
          Dividing a number by zero will display an error.
        </p>
      </div>

    </section>
  )
}

export default UserGuide
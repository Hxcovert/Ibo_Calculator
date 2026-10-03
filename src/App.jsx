import Calculator from './components/Calculator'
import UserGuide from './components/UserGuide'

function App() {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-5xl">

        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl">
            Da Kalkulator
          </h1>

          <p className="mt-2 text-slate-600">
            DCIT 26: Application Development and Emerging Technologies
          </p>
        </header>

        <main className="grid gap-8 md:grid-cols-2 md:items-start">
          <Calculator />
          <UserGuide />
        </main>

        <footer className="mt-10 text-center text-sm text-slate-500">
          <p>Laboratory 1 | React + Tailwind CSS</p>
        </footer>

      </div>
    </div>
  )
}

export default App
export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">Skills</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-3">Frontend Development</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js, Vite</li>
             <li>TailwindCSS, Bootstrap</li>
            <li>Responsive UI</li>
             <li>Restfull API</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-lg mb-3">Design (Beginner)</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Logo Design (Canva)</li>
            <li>YouTube Banner Design</li>
            <li>Basic Branding</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

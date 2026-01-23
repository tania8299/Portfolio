export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">
        What I Offer
      </h2>

      <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
        I provide frontend development and beginner-level design services
        to help build clean, modern, and responsive digital products.
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        {/* Service 1 */}
        <div className="bg-gray-100 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
          <h3 className="font-semibold mb-2">
            Frontend Website Development
          </h3>
          <p className="text-sm text-gray-600">
            Modern websites using React, Vite, and JavaScript.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-gray-100 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
          <h3 className="font-semibold mb-2">
            Responsive UI Development
          </h3>
          <p className="text-sm text-gray-600">
            Mobile-friendly UI with Tailwind CSS & Bootstrap.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-gray-100 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
          <h3 className="font-semibold mb-2">
            Logo Design (Beginner)
          </h3>
          <p className="text-sm text-gray-600">
            Clean and minimal logo designs using Canva.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-gray-100 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
          <h3 className="font-semibold mb-2">
            YouTube Banner Design
          </h3>
          <p className="text-sm text-gray-600">
            Custom banners for music, gaming, and lifestyle channels.
          </p>
        </div>
      </div>
    </section>
  )
}

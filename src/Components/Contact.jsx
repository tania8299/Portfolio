export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 text-center bg-gray-100"
    >
      <h2 className="text-3xl font-bold mb-4">
        Let’s Work Together
      </h2>

      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        Feel free to reach out for frontend development projects,
        logo design, or YouTube banner design.  
        I’m available for freelance work and collaborations.
      </p>

      <div className="flex flex-col items-center gap-4 text-sm">
        {/* Email */}
        <a
          href="mailto:taniachatterjee8299@gmail.com"
          className="text-blue-600 hover:underline"
        >
          📧 taniachatterjee8299@gmail.com
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/tania8299"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          💻 github.com/tania8299
        </a>

        {/* LinkedIn (optional but recommended) */}
        <a
          href="https://www.linkedin.com/in/taniachatterjee0802/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          🔗 LinkedIn Profile
        </a>
      </div>
    </section>
  )
}

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-6 px-6 text-center">
      <p className="text-sm mb-2">
        © 2026 Reactify Studio. All rights reserved.
      </p>

      <div className="flex justify-center gap-6 text-sm">
        <a
          href="https://github.com/tania8299"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          GitHub
        </a>

        <a
          href="mailto:taniachatterjee8299@gmail.com"
          className="hover:text-white"
        >
          Email
        </a>
      </div>
    </footer>
  )
}

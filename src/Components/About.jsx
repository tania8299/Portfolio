export default function About() {
    return (
        <section className="text-center py-24 px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Frontend Developer & Designer
            </h1>

            <p className="max-w-2xl mx-auto text-gray-600 mb-8 leading-relaxed">
                I’m a <strong>Frontend Developer</strong> with <strong>1 year 7 months</strong> of hands-on
                experience building responsive, user-friendly websites using
                <strong> HTML, CSS, JavaScript, React.js, Vite, Bootstrap, TailwindCSS</strong>, and modern UI practices.
                <br /><br />
                Alongside development, I’m a <strong>beginner Logo and YouTube Banner Designer</strong>,
                creating clean, modern visuals using Canva. I enjoy combining design and development
                to deliver simple, effective digital experiences.
                <br /><br />
                I’m continuously learning, improving my skills, and building real projects to grow
                as a creative frontend professional.
            </p>


            <div className="flex justify-center gap-4">
                <a
                    href="#projects"
                    className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                    View Projects
                </a>

                <a
                    href="https://github.com/tania8299"
                    target="_blank"
                    className="px-6 py-3 border border-black rounded-lg hover:bg-black hover:text-white transition"
                >
                    GitHub
                </a>
            </div>
        </section>
    )
}

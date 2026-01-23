import logo1 from "../assets/logos/dipkunj.png"
import logo2 from "../assets/logos/portfolio.png"
import logo3 from "../assets/logos/Demo-logo1.png"
import logo4 from "../assets/logos/Demo-logo.png"
import banner1 from "../assets/banners/music-banner.png"
import banner2 from "../assets/banners/beauty-banner.png"
import project1 from "../assets/frontend/portfolio.png"
import project2 from "../assets/frontend/landing.png"
import project3 from "../assets/frontend/dashboard.png"

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-14">Projects</h2>

            {/* ================= FRONTEND PROJECTS ================= */}
            <div className="max-w-6xl mx-auto mb-20">
                <h3 className="text-2xl font-semibold mb-8">
                    Frontend Development
                </h3>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                        <img src={project1} alt="Portfolio Website" />
                        <div className="p-5">
                            <h4 className="font-semibold text-lg mb-2">
                                Portfolio Website
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">
                                Personal portfolio built using React, Vite, and Tailwind CSS.
                            </p>
                            <div className="flex gap-4 text-sm">
                                <a
                                    href="https://your-live-demo-link.com"
                                    target="_blank"
                                    className="text-blue-600 hover:underline"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href="https://github.com/tania8299"
                                    target="_blank"
                                    className="text-gray-700 hover:underline"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                        <img src={project2} alt="Landing Page" />
                        <div className="p-5">
                            <h4 className="font-semibold text-lg mb-2">
                                Landing Page
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">
                                Responsive landing page with modern UI and clean layout.
                            </p>
                            <div className="flex gap-4 text-sm">
                                <a
                                    href="https://your-live-demo-link.com"
                                    target="_blank"
                                    className="text-blue-600 hover:underline"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href="https://github.com/tania8299/WedEasyy"
                                    target="_blank"
                                    className="text-gray-700 hover:underline"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                        <img src={project3} alt="Dashboard UI" />
                        <div className="p-5">
                            <h4 className="font-semibold text-lg mb-2">
                                Dashboard UI
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">
                                User dashboard UI with cards, charts, and responsive design.
                            </p>
                            <div className="flex gap-4 text-sm">
                                <a
                                    href="https://your-live-demo-link.com"
                                    target="_blank"
                                    className="text-blue-600 hover:underline"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href="https://github.com/tania8299/UserDashboard"
                                    target="_blank"
                                    className="text-gray-700 hover:underline"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= LOGO DESIGNS ================= */}
            <div className="max-w-6xl mx-auto mb-20">
                <h3 className="text-2xl font-semibold mb-8">
                    Logo Designs
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        {
                            img: logo1,
                            name: "DIPKUNJ",
                            caption: "Asthetic E-commerce branding logo",
                        },
                        {
                            img: logo2,
                            name: "Reactify Studio",
                            caption: "Minimal tech branding logo ",
                        },
                        {
                            img: logo3,
                            name: "PixelVibes",
                            caption: "Creative startup logo design ",
                        },
                        {
                            img: logo4,
                            name: "NovaTech",
                            caption: "Modern IT company logo",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition text-center"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-28 object-contain mb-4"
                            />

                            <h4 className="font-semibold text-sm">
                                {item.name}
                            </h4>

                            <p className="text-xs text-gray-500 mt-1">
                                {item.caption}
                            </p>
                        </div>
                    ))}
                </div>
            </div>


            {/* ================= YOUTUBE BANNERS ================= */}
            <div className="max-w-6xl mx-auto">
                <h3 className="text-2xl font-semibold mb-8">
                    YouTube Banner Designs
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            img: banner1,
                            title: "Music Channel Banner",
                            caption: "Creative banner design for music & artist channels",
                        },
                        {
                            img: banner2,
                            title: "Fashion YouTube Banner",
                            caption: "Clean and modern banner for fashion creators",
                        },
                        {
                            img: banner1,
                            title: "Tech / Gaming Banner",
                            caption: "Bold banner concept for tech or gaming channels",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full rounded-md mb-4"
                            />

                            <h4 className="font-semibold text-sm">
                                {item.title}
                            </h4>

                            <p className="text-xs text-gray-500 mt-1">
                                {item.caption}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

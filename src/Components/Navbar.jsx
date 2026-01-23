import logo from "../assets/logos/logo.png"

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-black text-white">

            {/* Left: Logo + Brand Name */}
            <div className="flex items-center gap-3">
                <img src={logo} className="w-14 h-14 pt-2" />
                <span className="text-xl font-bold tracking-wide">
                    Reactify <span className="text-blue-500">Studio</span>
                </span>
            </div>


            {/* Right: Menu */}
            <ul className="flex gap-6 text-sm">
                <li>
                    <a href="#skills" className="hover:text-gray-300">
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#projects" className="hover:text-gray-300">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-gray-300">
                        Contact
                    </a>
                </li>
            </ul>

        </nav>
    )
}

"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
	return (
		<nav className="flex gap-x-2 ">
			<Link className="hover:text-blue-400" href="/">Accueil</Link>
			<Link className="hover:text-blue-400" href="/users">Utilisateurs</Link>
			<Link className="hover:text-blue-400" href="/blog">Blog</Link>
			<Link className="hover:text-blue-400" href="/dashboards">Dashboards</Link>
			<Link className={`hover:text-blue-400 ${pathname === "/contact" && "bg-red-200 px-2"}`} href="/contact">Contact</Link>
		</nav>
	);
};
export default Navbar;

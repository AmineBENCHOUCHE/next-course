import Navbar from "@/components/Navbar";
import Link from "next/link";

const layout = ({ children }) => {
	return (
		<div>
			<nav className="flex gap-x-2">
				<Link href="/dashboards/entreprise">Dashboard finance</Link>
				<Link href="/dashboards/rh">Dashboard RH</Link>
			</nav>
			{children}
		</div>
	);
};
export default layout;

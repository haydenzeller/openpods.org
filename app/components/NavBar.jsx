import Link from "next/link"
export default function NavBar() {
    return (
    <div className="navbar bg-base-100 fixed z-10 shadow-xl">
        <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">OpenPods.org</Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 gap-3">
                <li><Link href="/search" className="btn bg-primary text-white">Search</Link></li>
                <li><Link className="btn bg-secondary text-white" href="https://github.com/haydenzeller/openpods.org/" target="_blank">Contribute</Link></li>
            </ul>
        </div>
    </div>
    )
}
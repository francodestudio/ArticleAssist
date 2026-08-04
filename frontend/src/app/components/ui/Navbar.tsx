"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Session",
    href: "/session"
  },
  {
    name: "Report",
    href: "/report"
  },
  {
    name: "Library",
    href: "/library"
  }
];




const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-15 items-center px-50 justify-between bg-foreground border-b-2 border-primary">
        <div className="flex gap-2">
            <span className="bg-primary rounded-sm">aa</span>
            <p>ArticleAssist</p>
        </div>
        <div className="flex gap-4 uppercase font-sans text-xs text-secondary tracking-widest items-center ">
            {navItems.map((item) => (
                <Link key={item.href} href={item.href} className={`${pathname===item.href? "text-foreground bg-primary px-2.5 py-2" : ""}`}>
                    {item.name}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Navbar
import { Logo } from "../Logo/Logo";
import Link from "next/link";

export const NavItem = ({
  title,
  href,
  target,
}: {
  title: string;
  href: string;
  target?: string;
}) => {
  return (
    <li className="text-[1.4rem] relative group">
      <Link href={href} target={target}>
        {title}
      </Link>
      <span className="absolute h-[2px] bg-green-600 left-0 bottom-0 w-0 group-hover:w-full transition-width duration-200"></span>
    </li>
  );
};

// todo fix this on small screens
export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 flex-wrap gap-x-10">
      <Logo />
      <nav>
        <ul className="flex gap-x-4 sm:gap-x-12 ">
          <NavItem
            title="Projects"
            target="_blank"
            href="https://github.com/chrisday-code"
          />
          <NavItem title="Contact" href="mailto:chrisday046@gmail.com" />
          {/* todo make this a download link */}
          <NavItem
            title="Resume"
            target="_blank"
            href="/downloads/Christopher Day - Resume.pdf"
          />
        </ul>
      </nav>
    </header>
  );
};

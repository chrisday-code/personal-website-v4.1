import { IoDocumentTextOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex-row flex gap-[24px] flex-wrap items-center justify-center py-4">
      <Link
        href="https://github.com/chrisday-code"
        className="hover:text-[#4cba18]"
      >
        <FaGithub size="30px" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/christopher-day-046/"
        className="hover:text-[#0b66c2]"
      >
        <FaLinkedin size="30px" />
      </Link>
      <Link
        href="https://github.com/chrisday-code"
        className="hover:text-[#ae6337]"
      >
        <IoDocumentTextOutline size="30px" />
      </Link>
      <Link
        href="mailto:chrisday046@gmail.com"
        className="hover:text-[#e64f3c]"
      >
        <HiOutlineMail size="30px" />
      </Link>
    </footer>
  );
};

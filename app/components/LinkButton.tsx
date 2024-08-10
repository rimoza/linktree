import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface LinkButtonProps {
  href: string;
  text: string;
  icon: "github" | "linkedin" | "twitter" | "instagram";
}

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  instagram: FaInstagram,
};

const LinkButton = ({ href, text, icon }: LinkButtonProps) => {
  const IconComponent = iconMap[icon];

  return (
    <Link href={href} passHref target="_blank">
      <div className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 px-4 mb-4 rounded-full flex items-center justify-center space-x-2 transition duration-300 ease-in-out transform hover:scale-105">
        <IconComponent className="text-xl" />
        <span>{text}</span>
      </div>
    </Link>
  );
};

export default LinkButton;

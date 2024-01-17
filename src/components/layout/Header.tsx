import React from "react";
import NavItem from "navigation/NavItem";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import socialNetworks from "../../../public/files/social_networks.json"; // TODO Add to data layer

const linkedinLink = socialNetworks.linkedin;
const githubLink = socialNetworks.github;

export default function Header() {
  return (
    <header>
      <nav className="flex w-full z-20 top-0 start-0 border-b border-gray-200 gap-4 align-middle p-4 justify-between">
        <span id="name" className="text-lg font-extrabold">
          <a href="/">://AlvBarros.dev</a>
        </span>
        <span className="flex justify-around gap-4">
          <NavItem href={linkedinLink}>
            <span className="flex justify-around gap-1">
              <FaLinkedin size={25} />
              <span className="hidden md:block"> LinkedIn </span>
            </span>
          </NavItem>
          <NavItem href={githubLink}>
            <span className="flex justify-around gap-1">
              <FaGithub size={25} />
              <span className="hidden md:block"> GitHub </span>
            </span>
          </NavItem>
        </span>
      </nav>
    </header>
  );
}

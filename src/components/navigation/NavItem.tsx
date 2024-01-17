import { ReactNode } from "react";

type NavItemProps = {
  href: string;
  children: ReactNode;
};

export default function NavItem({ href, children }: NavItemProps) {
  return (
    <span className="cursor-pointer hover:text-teal-400 transition">
      <a href={href}>{children}</a>
    </span>
  );
}

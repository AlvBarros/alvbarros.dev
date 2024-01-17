import { ReactElement } from "react";
import NavItem from "./NavItem";

type NavListItemProps = {
  title: string;
  children: ReactElement<typeof NavItem> | ReactElement<typeof NavItem>[];
};

export default function NavListItem({ title, children }: NavListItemProps) {
  return (
    <span>
      <a href="#" className="align-middle" data-dropdown-toggle={`dropdown${title}`}>
        {title}
      </a>
      <div className="hidden z-10">
        {children}
      </div>
    </span>
  );
}

import Link from "next/link";

const NavLinks = () => {
  return (
    <div className="hidden lg:flex">
      <ul className="menu menu-horizontal gap-1">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/shop">Shop</Link>
        </li>

        <li>
          <Link href="/category/women">Women</Link>
        </li>

        <li>
          <Link href="/category/men">Men</Link>
        </li>

        <li>
          <Link href="/category/kids">Kids</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;

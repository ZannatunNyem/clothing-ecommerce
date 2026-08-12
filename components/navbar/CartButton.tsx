import Link from "next/link";

const CartButton = () => {
  return (
    <Link href="/cart" className="btn btn-ghost btn-circle">
      🛒
    </Link>
  );
};

export default CartButton;

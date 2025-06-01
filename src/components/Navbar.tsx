import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useProductStore } from "@/store/productStore";
import { Badge } from "./ui/badge";

const links = [
  { to: "/", label: "Store" },
  { to: "/add", label: "Add Product" },
  { to: "/cart", label: "Cart" },
];

const Navbar = () => {
  const location = useLocation();
  const { cart } = useProductStore();
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-sm bg-zinc-800 sticky top-0 z-50">
      <h1 className="text-xl font-bold">🍎 Apple CRM</h1>
      <div className="space-x-2">
        {links.map(({ to, label }) => (
          <Link to={to} key={to}>
            <Button
              variant={location.pathname === to ? "default" : "outline"}
              className={cn("capitalize font-bold cursor-pointer")}
            >
              {label}
              {label === "Cart" && (
                <Badge
                  variant={
                    location.pathname === to ? "secondary" : "destructive"
                  }
                >
                  {cart.length}
                </Badge>
              )}
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

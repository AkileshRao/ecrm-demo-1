import { useProductStore } from "@/store/productStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ListingPage = () => {
  const { products, addToCart } = useProductStore();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Apple Store Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
        {products.map((product) => (
          <Link to={`/cart/${product.id}`} key={product.id}>
            <Card className="flex flex-col items-center p-0">
              <CardContent className="p-4 flex flex-col h-full">
                <div className="flex flex-col grow">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-[300px] w-[300px] object-cover rounded mb-2"
                  />
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold ">{product.name}</h2>
                    <p className="font-bold">${product.price}</p>
                  </div>

                  <p className="opacity-50 my-2">{product.description}</p>
                </div>
                <Button
                  onClick={() => addToCart(product)}
                  className="mt-2 cursor-pointer font-bold"
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListingPage;

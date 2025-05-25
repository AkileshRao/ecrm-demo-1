import { useProductStore } from '@/store/productStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const { cart } = useProductStore();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cart.length === 0 ? (
                <p>No items in cart</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    {cart.map((product) => (
                        <Card
                            key={product.id}
                            className="p-0">
                            <CardContent className="p-4">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="h-[300px] w-[300px] object-cover rounded mb-2"
                                />
                                <div className="flex items-center justify-between">
                                    <h2 className="text-2xl font-semibold ">{product.name}</h2>
                                    <p className="font-bold">${product.price}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}

            <Link to="/checkout">
                <Button className="mt-6 cursor-pointer font-bold">Buy Now</Button>
            </Link>
        </div>
    );
};

export default CartPage;

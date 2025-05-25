import { useParams, Link } from 'react-router-dom';
import { useProductStore } from '@/store/productStore';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

function ProductDetails() {
    const { productId } = useParams();
    const { products, addToCart } = useProductStore();
    const product = products.find((p) => p.id === productId);

    if (!product) {
        return <div className="p-6 text-center">Product not found.</div>;
    }

    return (
        <div className="flex items-center justify-center my-20">
            <div className="p-6 max-w-[1080px]">
                <Link
                    to="/"
                    className="text-gray-300 hover:underline mb-4 inline-block">
                    ← Back to Products
                </Link>
                <div className="flex gap-6 p-6 bg-zinc-800 rounded-lg border border-1">
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className=" h-[400px] object-contain rounded-lg"
                    />
                    <div>
                        <h1 className="text-3xl font-bold mb-2 flex gap-2 items-center">
                            {product.name}
                            <Badge className="font-bold">${product.price}</Badge>
                        </h1>
                        <p className="mb-4 text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus.
                        </p>
                        <Button
                            onClick={() => addToCart(product)}
                            className="font-bold px-4 py-2 rounded cursor-pointer ">
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;

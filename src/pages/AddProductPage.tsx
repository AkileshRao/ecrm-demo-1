import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "@/schema/product";
import { z } from "zod";
import { useProductStore } from "@/store/productStore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormValues = z.infer<typeof productSchema>;

const AddProductPage = () => {
  const { addProduct } = useProductStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      id: uuidv4(),
      images: [],
      tags: [],
    },
  });

  const onSubmit = (data: FormValues) => {
    addProduct(data);
    reset();
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto space-y-4 p-6"
    >
      <h1 className="text-2xl font-bold">Add New Product</h1>

      <div>
        <Label htmlFor="name" className="my-2">
          Name
        </Label>
        <Input id="name" {...register("name")} />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <Label className="my-2" htmlFor="description">
          Description
        </Label>
        <Textarea id="description" {...register("description")} />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>

      <div>
        <Label className="my-2" htmlFor="price">
          Price
        </Label>
        <Input
          id="price"
          type="number"
          step="0.01"
          {...register("price", { valueAsNumber: true })}
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
      </div>

      <div>
        <Label className="my-2" htmlFor="discount">
          Discount (%)
        </Label>
        <Input
          id="discount"
          type="number"
          {...register("discount", { valueAsNumber: true })}
        />
      </div>

      <div>
        <Label className="my-2" htmlFor="size">
          Size
        </Label>
        <Select
          onValueChange={(val) => setValue("size", val as FormValues["size"])}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="S">S</SelectItem>
            <SelectItem value="M">M</SelectItem>
            <SelectItem value="L">L</SelectItem>
            <SelectItem value="XL">XL</SelectItem>
          </SelectContent>
        </Select>
        {errors.size && <p className="text-red-500">{errors.size.message}</p>}
      </div>

      <div>
        <Label className="my-2" htmlFor="stock">
          Stock
        </Label>
        <Input type="number" {...register("stock", { valueAsNumber: true })} />
        {errors.stock && <p className="text-red-500">{errors.stock.message}</p>}
      </div>

      <div>
        <Label className="my-2" htmlFor="images">
          Images (comma-separated URLs)
        </Label>
        <Input
          id="images"
          onChange={(e) =>
            setValue(
              "images",
              e.target.value.split(",").map((s) => s.trim()),
            )
          }
        />
        {errors.images && (
          <p className="text-red-500">{errors.images.message}</p>
        )}
      </div>

      <div>
        <Label className="my-2" htmlFor="category">
          Category
        </Label>
        <Input id="category" {...register("category")} />
        {errors.category && (
          <p className="text-red-500">{errors.category.message}</p>
        )}
      </div>

      <div>
        <Label className="my-2" htmlFor="tags">
          Tags (comma-separated)
        </Label>
        <Input
          id="tags"
          onChange={(e) =>
            setValue(
              "tags",
              e.target.value.split(",").map((s) => s.trim()),
            )
          }
        />
      </div>

      <Button type="submit">Add Product</Button>
    </form>
  );
};

export default AddProductPage;

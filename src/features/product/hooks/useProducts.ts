import { useEffect , useState } from "react";
import { Product } from "../services/ProductsServices/ProductsServices";
import { getProducts } from "../services/ProductsServices/ProductsServices";
const useProducts = ()=>{
    const [products, setproducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error , setError] = useState<string | null>(null);
    useEffect(()=>{
    const fetchProducts=async()=>{
        try{
                    const data = await getProducts();
                    setproducts(data);

        }
        catch(error)
        {
            setError("faild to fetch products");

        }finally{
            setLoading(false);
        }
    };
    fetchProducts();
    },[]);
    return {products , loading ,error};
};
//useProducts 
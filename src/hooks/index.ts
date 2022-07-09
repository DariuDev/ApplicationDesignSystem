import * as api from "../api/crud"
import { useQuery, useMutation, useQueryClient} from "react-query"

const queryClient = useQueryClient();

const useAllProducts = (query:string,key:string) => {
    return useQuery(key, () => api.getAllProducts(query));
}

const useProduct = (id: string,query:string,key:string) => {
    return useQuery([key, id], () => api.getProduct(query, id))
}

const useCreateProduct = (product: {},query:string) => {
    return useMutation(() => api.createProduct(query, product))
}

const useDeleteProduct = (id: string,query:string,key:string) => {
    return useMutation(() => api.deleteProduct(query, id), {
        retry:2,
        retryDelay:1000,
        onSuccess: (data) => {
            //   const products = queryClient.getQueryData("products")
            //   const dataUpdate = products.filter((item) => item._id !== id)
            //   queryClient.setQueryData("products", dataUpdate);
            queryClient.setQueryData([key, id], data);
        },
    })
}

const useUpdateProduct = (key:string,query:string,product: { id: string }) => {
    return useMutation(() => api.updateProduct(query, product), {
        retry:2,
        retryDelay:1000,
        onSuccess: (data,variables) => {
            // queryClient.refetchQueries("products")
            // queryClient.refetchQueries(["product", id])
            queryClient.setQueryData([key, data.id], data);
        },
        // onSuccess: (data,variables) => {
        //     queryClient.setQueryData(["product", variables.id], data);
        // },
    })
}

export {
    useAllProducts,
    useDeleteProduct,
    useProduct,
    useUpdateProduct,
    useCreateProduct
}
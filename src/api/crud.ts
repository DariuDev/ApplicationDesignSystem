import client from "."

const getAllProducts = async (query: string) => {
  const { data } = await client.get(`/${query}`)
  return data
}

const getProduct = async (query: string, id: string) => {
  const { data } = await client.get(`/${query}/${id}`)
  return data
}

const createProduct = async (query: string, dataCreate: object) => {
  // const product = { name, description, amount }
  const { data } = await client.post(`/${query}`, dataCreate)
  return data
}

const updateProduct = async (query: string, { id, ...product }: { id: string }) => {
  const { data } = await client.put(`/${query}/${id}`, product)
  return data
}

const deleteProduct = async (query: string, id: string) => {
  const { data } = await client.delete(`/${query}/${id}`)
  return data
}

export {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
}
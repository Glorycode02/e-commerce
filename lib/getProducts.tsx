"use server"
export default async function getProducts() {
    const respnse = fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>data)

    return respnse
}

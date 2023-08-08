import { stripe } from "@/utils/stripe"
import { validadeCartItems } from "use-shopping-cart/utilities"

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const cartDetails = req.body
            const inventory = await stripe.products.list({
                expand: ['data.default_price']
            })
            const products = inventory.data.map(product => {
                const price = product.default_price;
                return {
                    currency: price.currency,
                    id: product.id,
                    name: product.name,
                    price: price.unit_amount,
                    image: product.images[0]
                }
            })
            const lineItems = validadeCartItems(products, cartDetails)
        } catch (error) {

        }
    } else {
        res.setHeader("Allow", "POST")
        res.status(405).end("Method not Allowed.")
    }
}
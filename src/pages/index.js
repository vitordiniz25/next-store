import { stripe } from "@/utils/stripe";

export default function Home({ products }) {
  console.log(products)
  return (
    <div>
      home
    </div>
  )
}

export async function getStaticProps() {
  const products = await stripe.products.list({
    limit: 8
  })

  return {
    props: {
      products
    }
  }
}
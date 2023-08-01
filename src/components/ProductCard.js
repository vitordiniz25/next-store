import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product, index }){
    return(
        <Link href={`products/${product.id}`} className="border-2 rounded-md group overflow-hidden">
            <div className="relative w-full h-64">
                <Image
                    priority={index === 0} 
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="100%"
                />
            </div>
        </Link>
    )
}
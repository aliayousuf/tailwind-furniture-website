
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center">
            <hr className="border-t-[1px] border-[#D9D9D9] pb-[48px]" />
            <div className="flex flex-col md:flex-row md:justify-between w-full px-4 md:px-[100px]">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <span className="font-semibold text-2xl text-black font-poppins">Furniro.</span>
                    <p className="font-poppins text-base text-gray-600 mt-[31px] mb-4">
                        400 University Drive Suite 200 Coral
                        <br />
                        Gables
                        <br />
                        FL 33134 USA
                    </p>
                </div>
                <div className="text-black font-poppins">
                    <ul className="flex flex-row md:flex-row gap-[20px] justify-center md:justify-end">
                        <li className="cursor-pointer font-bold">
                            <Link href="/">Home</Link>
                        </li>
                        
                        <li className="cursor-pointer font-medium">
                            <Link href="/shop">Shop</Link>
                        </li>
                        <li className="cursor-pointer font-medium">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="border-t-[1px] border-[#D9D9D9] w-full my-4" />
            <p className="text-black text-base font-poppins text-center">
                2024 furniro. All rights reserved
            </p>
        </footer>
    );
}



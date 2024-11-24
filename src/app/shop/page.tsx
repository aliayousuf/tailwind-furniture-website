import Image from "next/image"
import Link from "next/link"


export default function Shoppage(){
    return(
      <main>
      <div className="relative flex justify-center items-center">
        <Image 
        src={"/shop.webp"} 
        alt="shop hero image" 
        width={1440} 
        height={316}
        />
        <div className="absolute flex flex-col gap-2 items-center">
          <span className="font-poppins  text-black text-4xl md:text-8xl font-medium">Shop</span>
          <div>
            <div className="flex font-poppins">
              <Link className="text-black gap-[5px]" href={"/"}>Home</Link>
              <svg width={24} height={24} fill="none" stroke="black">
              <path d="m9 18 6-6-6-6"></path>
              </svg>
              <span className="text-black font-black capitalize">Shop</span>
            </div>
          </div>
        </div>
        </div>
        
        {/* images */}
        <div className="mt-[63px] mb-[70px]" >
          <div className="flex flex-col items-center font-poppins gap-8">
            <div className="flex gap-8 flex-wrap justify-center">
              <div className="bg-card text-card-foreground shadow-sm relative rounded-none font-poppins border-0">
                <div className="p-0">
                  <div className="rounded-full w-12 h-12 flex justify-center items-center top-6 right-6 absolute bg-emerald-400" >
                  <span className="text-base font-medium leading-6 text-white">New</span>
                  </div>
                  <div className="group">
                    <Image
                    src={"/s1.jpg"} 
                    alt="product syltherine" 
                    width={285} 
                    height={301}
                    className="w-full h-full object-cover" 
                    />
                    <div className="flex justify-center opacity-0 absolute inset-0 bg-gray-900 hover:opacity-70">
                      <div  className="absolute mt-[175px]">
                      <button className="inline-flex items-center justify-center text-base focus-visible:outline-none disabled:pointer-events-none bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold px-14 py-3">Add To Card</button>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href={"#"}>
                <div className="p-0 flex flex-col items-start gap-2 pl-4 bg-card">
                <h3 className="tracking-tight font-semibold text-2xl leading-[28.8px] pt-4 text-gray-950">Syltherine</h3>
                <span className="font-medium text-base leading-6 text-gray-500 truncate w-64">Stylish cafe chair</span>
                <div className="flex gap-4 items-center">
                <span className="font-semibold text-xl leading-[30px] text-gray-950">Rp&nbsp;2.500,00</span>
                </div>
                </div>
                </Link>
                
              </div>
              
              <div className="bg-card text-card-foreground shadow-sm relative rounded-none font-poppins border-0">
              <div className="p-0">
                <div className="rounded-full w-12 h-12 flex justify-center items-center top-6 right-6 absolute bg-red-400">
                  <span className="text-base font-medium leading-6 text-white">-20%</span>
                </div>
                <div className="group">
                  <Image src={"/s2.jpeg"} 
                  alt="product Graffiti Art Decor " 
                  width={285} 
                  height={301}
                  className="w-full h-full object-cover" />
                  <div className="flex justify-center opacity-0 absolute inset-0 bg-gray-900 hover:opacity-70">
                    <div className="absolute mt-[175px]">
                      <button  className="inline-flex items-center justify-center text-base focus-visible:outline-none disabled:pointer-events-none bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold px-14 py-3">Add To Card</button>
                    </div>
                  </div>
                </div>
              </div>
              <Link href={"#"}>
              <div className="p-0 flex flex-col items-start gap-2 pl-4 bg-card">
                <h3 className="tracking-tight font-semibold text-2xl leading-[28.8px] pt-4 text-gray-950">Graffiti Art Decor
                </h3>
                <span className="font-medium text-base leading-6  text-gray-500 truncate w-64">Modern Office</span>
                <div className="flex gap-4 items-center">
                  <span className="font-semibold text-xl leading-[30px] pb-[30px] text-gray-950">Rp&nbsp;5.600,00</span>
                  <span className="font-normal text-base leading-6 line-through  pb-[30px] text-gray-400">Rp&nbsp; 7.000,00</span>

                </div>
              </div>
              </Link>                
            </div>
            <div className="bg-card text-card-foreground shadow-sm relative rounded-none font-poppins border-0">
              <div className="p-o">
                <div className="group">
                  <Image src={"/s3.jpeg"} 
                  alt="product Wooden chair " 
                  width={285} 
                  height={301}
                  className="w-full h-full object-cover" />
                  <div className="flex justify-center opacity-0 absolute inset-0 bg-gray-900 hover:opacity-70">
                    <div className="absolute mt-[175px]">
                      <button className="inline-flex items-center justify-center text-base focus-visible:outline-none disabled:pointer-events-none bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold px-14 py-3">Add To Card</button>
                    </div>
                  </div>
                </div>
              </div>
              <Link href={"#"}>
              <div className="p-0 flex flex-col items-start gap-2 pl-4 bg-card">
                <h3 className="tracking-tight font-semibold text-2xl leading-[28.8px] pt-4 text-gray-950">Wooden chair
                </h3>
                <span className="font-medium text-base leading-6 text-gray-500 truncate w-64"> Living Room Decor
                </span>
                <div  className="flex gap-4 items-center">
                  <span className="font-semibold text-xl leading-[30px] pb-[30px] text-gray-950">Rp&nbsp;75,000</span>
                </div>
                </div>
              </Link>
            </div>
            <div className="bg-card text-card-foreground shadow-sm relative rounded-none font-poppins border-0">
              <div className="p-0">
                <div className="rounded-full w-12 h-12 flex justify-center items-center top-6 right-6 absolute bg-red-400">
                  <span className="text-base font-medium leading-6 text-white">-15%</span>
                </div>
                <div className="group">
                  <Image src={"/s4.jpeg"} 
                  alt="product Mexicoa" 
                  width={285} 
                  height={301}
                  className="w-full h-full object-cover" />
                  <div className="flex justify-center opacity-0 absolute inset-0 bg-gray-900 hover:opacity-70">
                    <div className="absolute mt-[175px]">
                      <button  className="inline-flex items-center justify-center text-base focus-visible:outline-none disabled:pointer-events-none bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold px-14 py-3">Add To Card</button>
                    </div>
                  </div>
                </div>
              </div>
              <Link href={"#"}>
              <div className="p-0 flex flex-col items-start gap-2 pl-4 bg-card">
                <h3 className="tracking-tight font-semibold text-2xl leading-[28.8px] pt-4 text-gray-950">Mexicoa</h3>
                <span className="font-medium text-base leading-6  text-gray-500 truncate w-64">Design of Living Room</span>
                <div className="flex gap-4 items-center">
                  <span className="font-semibold text-xl leading-[30px] pb-[30px] text-gray-950">Rp&nbsp;1500000</span>
                  <span className="font-normal text-base leading-6 line-through  pb-[30px] text-gray-400">Rp&nbsp;200000</span>

                </div>
              </div>
              </Link>
            </div>
            <div className="bg-card text-card-foreground shadow-sm relative rounded-none font-poppins border-0">
              <div className="p-0">
              
                <div className="group">
                  <Image 
                  src={"/s5.jpeg"} 
                  alt="product Modern Minimalist" 
                  width={285} 
                  height={301}
                  className="w-full h-full object-cover"
                  />
                  <div className="flex justify-center opacity-0 absolute inset-0 bg-gray-900 hover:opacity-70">
                    <div className="absolute mt-[175px]">
                      <button className="inline-flex items-center justify-center text-base focus-visible:outline-none disabled:pointer-events-none bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold px-14 py-3">Add To Card</button>
                    </div>
                  </div>

                </div>
              </div>
              <Link href={"#"}>
              <div className="p-0 flex flex-col items-start gap-2 pl-4 bg-card">
                <h3 className="tracking-tight font-semibold text-2xl leading-[28.8px] pt-4 text-gray-950">Modern Minimalist </h3>
                <span className="font-medium text-base leading-6 text-gray-500 truncate w-64">Beige Couch</span>
                <div className="flex gap-4 items-center">
                  <span className="font-semibold text-xl leading-[30px] text-gray-950">Rp&nbsp;95,000</span>
                </div>
              </div>
              </Link>
            </div>
            <div className="bg-card text-card-foreground shadow-sm relative rounded-none font-poppins border-0">
              <div className="p-0">
                <div className="rounded-full w-12 h-12 flex justify-center items-center top-6 right-6 absolute bg-red-400">
                  <span className="text-base font-medium leading-6 text-white">-20%</span>
                </div>
                <div className="group">
                  <Image src={"/s6.jpeg"} 
                  alt="product Wicker Bookshelf " 
                  width={285} 
                  height={301}
                  className="w-full h-full object-cover" />
                  <div className="flex justify-center opacity-0 absolute inset-0 bg-gray-900 hover:opacity-70">
                    <div className="absolute mt-[175px]">
                      <button  className="inline-flex items-center justify-center text-base focus-visible:outline-none disabled:pointer-events-none bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold px-14 py-3">Add To Card</button>
                    </div>
                  </div>
                </div>
              </div>
              <Link href={"#"}>
              <div className="p-0 flex flex-col items-start gap-2 pl-4 bg-card">
                <h3 className="tracking-tight font-semibold text-2xl leading-[28.8px] pt-4 text-gray-950">Wicker Bookshelf</h3>
                <span className="font-medium text-base leading-6  text-gray-500 truncate w-64">Assorted Books in Cozy Corner
                </span>
                <div className="flex gap-4 items-center">
                  <span className="font-semibold text-xl leading-[30px] pb-[30px] text-gray-950">Rp&nbsp;25,000</span>
                  <span className="font-normal text-base leading-6 line-through  pb-[30px] text-gray-400">Rp&nbsp;45,000</span>

                </div>
              </div>
              </Link>
            </div>
            <div className="bg-card text-card-foreground shadow-sm relative rounded-none font-poppins border-0">
              <div className="p-0">
                
                <div className="group">
                  <Image 
                  src={"/s7.jpeg"} 
                  alt="product Ottoman" 
                  width={285} 
                  height={301}
                  className="w-full h-full object-cover"
                  />
                  <div className="flex justify-center opacity-0 absolute inset-0 bg-gray-900 hover:opacity-70">
                    <div className="absolute mt-[175px]">
                      <button className="inline-flex items-center justify-center text-base focus-visible:outline-none disabled:pointer-events-none bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold px-14 py-3">Add To Card</button>
                    </div>
                  </div>

                </div>
              </div>
              <Link href={"#"}>
              <div className="p-0 flex flex-col items-start gap-2 pl-4 bg-card">
                <h3 className="tracking-tight font-semibold text-2xl leading-[28.8px] pt-4 text-gray-950">Ottoman</h3>
                <span className="font-medium text-base leading-6 text-gray-500 truncate w-64">Armchair Near Table</span>
                <div className="flex gap-4 items-center">
                  <span className="font-semibold text-xl leading-[30px] pb-[30px] text-gray-950">Rp&nbsp;85,000</span>
                </div>
              </div>
              </Link>
            </div>
            <div className="bg-card text-card-foreground shadow-sm relative rounded-none font-poppins border-0">
              <div className="p-0">
                <div className="rounded-full w-12 h-12 flex justify-center items-center top-6 right-6 absolute bg-red-400">
                  <span className="text-base font-medium leading-6 text-white">-50%</span>
                </div>
                <div className="group">
                  <Image src={"/s8.jpeg"} 
                  alt="product  Edison  " 
                  width={285} 
                  height={301}
                  className="w-full h-full object-cover" />
                  <div className="flex justify-center opacity-0 absolute inset-0 bg-gray-900 hover:opacity-70">
                    <div className="absolute mt-[175px]">
                      <button  className="inline-flex items-center justify-center text-base focus-visible:outline-none disabled:pointer-events-none bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold px-14 py-3">Add To Card</button>
                    </div>
                  </div>
                </div>
              </div>
              <Link href={"#"}>
              <div className="p-0 flex flex-col items-start gap-2 pl-4 bg-card">
                <h3 className="tracking-tight font-semibold text-2xl leading-[28.8px] pt-4 text-gray-950"> Edison Sofa </h3>
                <span className="font-medium text-base leading-6  text-gray-500 truncate w-64"> Light Bulbs Beside </span>
                <div className="flex gap-4 items-center">
                  <span className="font-semibold text-xl leading-[30px] pb-[30px] text-gray-950">Rp&nbsp;40,000</span>
                  <span className="font-normal text-base leading-6 line-through  pb-[30px] text-gray-400">Rp&nbsp;80.000</span>

                </div>
              </div>
              </Link>
            </div>
            </div>
          </div>
        </div>
        {/* our service */}
        <div className="flex flex-col md:flex-row md:flex-wrap gap-y-12 lg:gap-y-0 md:justify-between py-[6.25rem] px-[1.5rem] sm:px-[3.5rem] lg:px-[3.5rem] bg-pink-100">
          <div className="sm:w-3/6 lg:w-auto">
          <div className="flex items-center bg-transparent font-poppins">
            <div className="w-[60px] h-[60px]">
              <Image src={"/b1.png"} alt="" width={60} height={60}></Image>
            </div>
            <div className="flex flex-col justify-center ml-[0.62rem]">
              <span className="font-bold text-3xl text-gray-900">High Quality</span>
              <span className="text-xl text-gray-500">crafted from top materials</span>
            </div>
          </div>
          </div>
          <div className="sm:w-3/6 lg:w-auto">
          <div className="flex items-center bg-transparent font-poppins">
            <div className="w-[60px] h-[60px]">
              <Image src={"/b2.png"} alt="" width={60} height={60}></Image>
            </div>
            <div className="flex flex-col justify-center ml-[0.62rem]">
              <span className="font-bold text-3xl text-gray-900">Warrenty Protection</span>
              <span className="text-xl text-gray-500">Over 2 years</span>
            </div>
          </div>
          </div>
          <div className="sm:w-3/6 lg:w-auto">
          <div className="flex items-center bg-transparent font-poppins">
            <div className="w-[60px] h-[60px]">
              <Image src={"/b3.png"} alt="" width={60} height={60}></Image>
            </div>
            <div className="flex flex-col justify-center ml-[0.62rem]">
              <span className="font-bold text-3xl text-gray-900">Free Shipping</span>
              <span className="text-xl text-gray-500">Order over 150 $</span>
            </div>
          </div>
          </div>
          <div className="sm:w-3/6 lg:w-auto">
          <div className="flex items-center bg-transparent font-poppins">
            <div className="w-[60px] h-[60px]">
              <Image src={"/b4.png"} alt="" width={60} height={60}></Image>
            </div>
            <div className="flex flex-col justify-center ml-[0.62rem]">
              <span className="font-bold text-3xl text-gray-900">24 / 7 Support</span>
              <span className="text-xl text-gray-500">Dedicated support</span>
            </div>
          </div>
          </div>
        </div>

        </main>
        
    )
  }


import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    <main  className="p-6, mx-auto overflow-hidden">
      <div className="flex font-poppins overflow-hidden min-h-screen ">
        <Image 
          src="/hero.png" 
          alt="background image" 
          width={1440}
          height={900}
          layout="responsive"
          objectFit="cover"
          className="absolute inset-0 w-full h-full z-0"
        />
        
        <div className="relative z-10 rounded-xl bg-pink-100 p-10 mt-[153px] ml-auto mr-[58px] mb-[120px] max-w-[643px] shadow-lg">
          <div className="flex flex-col gap-4">
            <span className="text-base font-semibold text-[#333] tracking-[3px]">New Arrival</span>
            <h1 className="text-yellow-600 text-[52px] font-bold leading-[65px] w-3/4">
              Discover Our New Collection
            </h1>
            <p className="text-[#333] font-medium leading-normal text-lg mt-3">
              Furniture styles today range from minimalist to cozy, 
              Modern Coastal evokes a relaxed, beachy feel with light colors and soft blues. Each style can transform 
              a space into something uniquely comfortable and stylish!
            </p>
          </div>
          
          <Link href="/shop">
            <button className="inline-flex items-center justify-center bg-yellow-600 text-white font-bold px-8 py-4 mt-6 rounded-lg">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
      {/* range section */}
      <div className="flex flex-col items-center mt-[56.47px] sm:mt-[40px]">
  <h1 className="text-gray-950 font-bold font-poppins text-[32px] sm:text-xl text-center">
    Browse The Range
  </h1>
  <p className="text-foreground font-poppins text-xl mb-[62.29px] sm:text-base sm:mb-4 text-center px-4 sm:px-2">
    Explore furniture styles that transform any space into a perfect blend of comfort and style
  </p>
  <div className="flex flex-wrap gap-[19.39px] justify-center px-4 sm:px-2">
    {/* Dining Section */}
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <Link href={"#"}>
        <div className="rounded-lg border text-card-foreground bg-transparent border-none shadow-none">
          <div className="p-0 w-fit h-fit overflow-hidden rounded-xl">
            <Image 
              src={"/Dining.webp"} 
              alt="Dining" 
              width={381} 
              height={480}
              className="max-w-full max-h-full"/>
          </div>
          <div className="items-center flex justify-center p-0 mt-[30px]">
            <h3 className="text-2xl font-semibold leading-none tracking-tight font-poppins text-gray-950 text-center">
              Dining
            </h3>
          </div>
        </div>
      </Link>
    </div>

    {/* Living Section */}
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <Link href={"#"}>
        <div className="rounded-lg border text-card-foreground bg-transparent border-none shadow-none">
          <div className="p-0 w-fit h-fit overflow-hidden rounded-xl">
            <Image 
              src={"/Living.webp"} 
              alt="Living" 
              width={381} 
              height={480}
              className="max-w-full max-h-full"/>
          </div>
          <div className="items-center flex justify-center p-0 mt-[30px]">
            <h3 className="text-2xl font-semibold leading-none tracking-tight font-poppins text-gray-950 text-center">
              Living
            </h3>
          </div>
        </div>
      </Link>
    </div>

    {/* Bedroom Section */}
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <Link href={"#"}>
        <div className="rounded-lg border text-card-foreground bg-transparent border-none shadow-none">
          <div className="p-0 w-fit h-fit overflow-hidden rounded-xl">
            <Image 
              src={"/Bedroom.webp"} 
              alt="Bedroom" 
              width={381} 
              height={480}
              className="max-w-full max-h-full"/>
          </div>
          <div className="items-center flex justify-center p-0 mt-[30px]">
            <h3 className="text-2xl font-semibold leading-none tracking-tight font-poppins text-gray-950 text-center">
              Bedroom
            </h3>
          </div>
        </div>
      </Link>
    </div>
  </div>
</div>

      
      {/* products */}
      <div className="mt-14 mb-[52px]">
  <div className="flex flex-col items-center font-poppins gap-8">
    <h2 className="text-gray-950 font-bold text-[40px] leading-[48px] sm:text-3xl sm:leading-[40px]">Our Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {/* Product 1 */}
      <div className="bg-card text-card-foreground shadow-sm relative rounded-lg font-poppins border-0">
        <div className="p-0">
          <div className="rounded-full w-12 h-12 flex justify-center items-center top-6 right-6 absolute bg-emerald-400">
            <span className="text-base font-medium leading-6 text-white">New</span>
          </div>
          <div className="group">
            <Image 
              src={"/p1.png"} 
              alt="product syltherine" 
              width={285} 
              height={301}
              className="w-full h-full object-cover"
            />
            <div className="flex justify-center opacity-0 absolute inset-0 bg-gray-900 hover:opacity-70">
              <div className="absolute mt-[175px]">
                <button className="inline-flex items-center justify-center text-base focus-visible:outline-none disabled:pointer-events-none bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold px-14 py-3 sm:px-8 sm:py-2">Add To Card</button>
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
      {/* Product 2 */}
      <div className="bg-card text-card-foreground shadow-sm relative rounded-lg font-poppins border-0">
        <div className="p-0">
          <div className="rounded-full w-12 h-12 flex justify-center items-center top-6 right-6 absolute bg-red-400">
            <span className="text-base font-medium leading-6 text-white">-20%</span>
          </div>
          <div className="group">
            <Image src={"/p2.png"} 
              alt="product Grifo" 
              width={285} 
              height={301}
              className="w-full h-full object-cover" />
            <div className="flex justify-center opacity-0 absolute inset-0 bg-gray-900 hover:opacity-70">
              <div className="absolute mt-[175px]">
                <button className="inline-flex items-center justify-center text-base focus-visible:outline-none disabled:pointer-events-none bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold px-14 py-3 sm:px-8 sm:py-2">Add To Card</button>
              </div>
            </div>
          </div>
        </div>
        <Link href={"#"}>
          <div className="p-0 flex flex-col items-start gap-2 pl-4 bg-card">
            <h3 className="tracking-tight font-semibold text-2xl leading-[28.8px] pt-4 text-gray-950">Grifo</h3>
            <span className="font-medium text-base leading-6 text-gray-500 truncate w-64">Night lamp </span>
            <div className="flex gap-4 items-center">
              <span className="font-semibold text-xl leading-[30px] pb-[30px] text-gray-950">Rp&nbsp;5.600,00</span>
              <span className="font-normal text-base leading-6 line-through pb-[30px] text-gray-400">Rp&nbsp;7.000,00</span>
            </div>
          </div>
        </Link>   
      </div>
      {/* Product 3 */}
      <div className="bg-card text-card-foreground shadow-sm relative rounded-lg font-poppins border-0">
        <div className="p-0">
          <div className="group">
            <Image src={"/p3.png"} 
              alt="product muggo" 
              width={285} 
              height={301}
              className="w-full h-full object-cover" />
            <div className="flex justify-center opacity-0 absolute inset-0 bg-gray-900 hover:opacity-70">
              <div className="absolute mt-[175px]">
                <button className="inline-flex items-center justify-center text-base focus-visible:outline-none disabled:pointer-events-none bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold px-14 py-3 sm:px-8 sm:py-2">Add To Card</button>
              </div>
            </div>
          </div>
        </div>
        <Link href={"#"}>
          <div className="p-0 flex flex-col items-start gap-2 pl-4 bg-card">
            <h3 className="tracking-tight font-semibold text-2xl leading-[28.8px] pt-4 text-gray-950">Muggo</h3>
            <span className="font-medium text-base leading-6 text-gray-500 truncate w-64">Small mug</span>
            <div className="flex gap-4 items-center">
              <span className="font-semibold text-xl leading-[30px] pb-[30px] text-gray-950">Rp&nbsp;60,000</span>
            </div>
          </div>
        </Link>
      </div>
      {/* Product 4 */}
      <div className="bg-card text-card-foreground shadow-sm relative rounded-lg font-poppins border-0">
        <div className="p-0">
          <div className="rounded-full w-12 h-12 flex justify-center items-center top-6 right-6 absolute bg-red-400">
            <span className="text-base font-medium leading-6 text-white">-15%</span>
          </div>
          <div className="group">
            <Image src={"/p4.png"} 
              alt="product Pingky" 
              width={285} 
              height={301}
              className="w-full h-full object-cover" />
            <div className="flex justify-center opacity-0 absolute inset-0 bg-gray-900 hover:opacity-70">
              <div className="absolute mt-[175px]">
                <button className="inline-flex items-center justify-center text-base focus-visible:outline-none disabled:pointer-events-none bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold px-14 py-3 sm:px-8 sm:py-2">Add To Card</button>
              </div>
            </div>
          </div>
        </div>
        <Link href={"#"}>
          <div className="p-0 flex flex-col items-start gap-2 pl-4 bg-card">
            <h3 className="tracking-tight font-semibold text-2xl leading-[28.8px] pt-4 text-gray-950">Pingky</h3>
            <span className="font-medium text-base leading-6 text-gray-500 truncate w-64">Cute set</span>
            <div className="flex gap-4 items-center">
              <span className="font-semibold text-xl leading-[30px] pb-[30px] text-gray-950">Rp&nbsp;65,000</span>
              <span className="font-normal text-base leading-6 line-through pb-[30px] text-gray-400">Rp&nbsp; 80,000</span>
            </div>
          </div>    
        </Link>
      </div>
       {/* Product 5 */}
       <div className="bg-card text-card-foreground shadow-sm relative rounded-lg font-poppins border-0">
        <div className="p-0">
          
      <div className="group">
            <Image src={"/p5.png"} 
              alt="product Pingky" 
              width={285} 
              height={301}
              className="w-full h-full object-cover" />
            <div className="flex justify-center opacity-0 absolute inset-0 bg-gray-900 hover:opacity-70">
              <div className="absolute mt-[175px]">
                <button className="inline-flex items-center justify-center text-base focus-visible:outline-none disabled:pointer-events-none bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold px-14 py-3 sm:px-8 sm:py-2">Add To Card</button>
              </div>
            </div>
          </div>
        </div>
        <Link href={"#"}>
          <div className="p-0 flex flex-col items-start gap-2 pl-4 bg-card">
            <h3 className="tracking-tight font-semibold text-2xl leading-[28.8px] pt-4 text-gray-950">Lolito</h3>
            <span className="font-medium text-base leading-6 text-gray-500 truncate w-64">Luxury big sofa</span>
            <div className="flex gap-4 items-center">
              <span className="font-semibold text-xl leading-[30px] pb-[30px] text-gray-950">Rp&nbsp;90,000</span>
              
            </div>
          </div>
        </Link>
      </div>

  {/* Product 6 */}
  <div className="bg-card text-card-foreground shadow-sm relative rounded-lg font-poppins border-0">
        <div className="p-0">
          <div className="rounded-full w-12 h-12 flex justify-center items-center top-6 right-6 absolute bg-red-400">
            <span className="text-base font-medium leading-6 text-white">-15%</span>
          </div>
          <div className="group">
            <Image src={"/p6.png"} 
              alt="product Pingky" 
              width={285} 
              height={301}
              className="w-full h-full object-cover" />
            <div className="flex justify-center opacity-0 absolute inset-0 bg-gray-900 hover:opacity-70">
              <div className="absolute mt-[175px]">
                <button className="inline-flex items-center justify-center text-base focus-visible:outline-none disabled:pointer-events-none bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold px-14 py-3 sm:px-8 sm:py-2">Add To Card</button>
              </div>
            </div>
          </div>
        </div>
        <Link href={"#"}>
          <div className="p-0 flex flex-col items-start gap-2 pl-4 bg-card">
            <h3 className="tracking-tight font-semibold text-2xl leading-[28.8px] pt-4 text-gray-950">Leviosa</h3>
            <span className="font-medium text-base leading-6 text-gray-500 truncate w-64">Stylish cafa chair</span>
            <div className="flex gap-4 items-center">
              <span className="font-semibold text-xl leading-[30px] pb-[30px] text-gray-950">Rp&nbsp;25,000</span>
              <span className="font-normal text-base leading-6 line-through pb-[30px] text-gray-400">Rp&nbsp;35,000</span>
            </div>
          </div>
        </Link>
      </div>

     
       {/* Product 7 */}
       <div className="bg-card text-card-foreground shadow-sm relative rounded-lg font-poppins border-0">
        <div className="p-0">
        
          <div className="group">
            <Image src={"/p7.png"} 
              alt="product Pingky" 
              width={285} 
              height={301}
              className="w-full h-full object-cover" />
            <div className="flex justify-center opacity-0 absolute inset-0 bg-gray-900 hover:opacity-70">
              <div className="absolute mt-[175px]">
                <button className="inline-flex items-center justify-center text-base focus-visible:outline-none disabled:pointer-events-none bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold px-14 py-3 sm:px-8 sm:py-2">Add To Card</button>
              </div>
            </div>
          </div>
        </div>
        <Link href={"#"}>
          <div className="p-0 flex flex-col items-start gap-2 pl-4 bg-card">
            <h3 className="tracking-tight font-semibold text-2xl leading-[28.8px] pt-4 text-gray-950">Respira</h3>
            <span className="font-medium text-base leading-6 text-gray-500 truncate w-64">Outdoor bar table and stool</span>
            <div className="flex gap-4 items-center">
              <span className="font-semibold text-xl leading-[30px] pb-[30px] text-gray-950">Rp&nbsp;500,000</span>
              
            </div>
          </div>
        </Link>
      </div>

  {/* Product 8 */}
  <div className="bg-card text-card-foreground shadow-sm relative rounded-lg font-poppins border-0">
        <div className="p-0">
          <div className="rounded-full w-12 h-12 flex justify-center items-center top-6 right-6 absolute bg-red-400">
            <span className="text-base font-medium leading-6 text-white">-50%</span>
          </div>
          <div className="group">
            <Image src={"/p8.png"} 
              alt="product Pingky" 
              width={285} 
              height={301}
              className="w-full h-full object-cover" />
            <div className="flex justify-center opacity-0 absolute inset-0 bg-gray-900 hover:opacity-70">
              <div className="absolute mt-[175px]">
                <button className="inline-flex items-center justify-center text-base focus-visible:outline-none disabled:pointer-events-none bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold px-14 py-3 sm:px-8 sm:py-2">Add To Card</button>
              </div>
            </div>
          </div>
        </div>
        <Link href={"#"}>
          <div className="p-0 flex flex-col items-start gap-2 pl-4 bg-card">
            <h3 className="tracking-tight font-semibold text-2xl leading-[28.8px] pt-4 text-gray-950">Futons</h3>
            <span className="font-medium text-base leading-6 text-gray-500 truncate w-64">Living room sofa</span>
            <div className="flex gap-4 items-center">
              <span className="font-semibold text-xl leading-[30px] pb-[30px] text-gray-950">Rp&nbsp;25,000</span>
              <span className="font-normal text-base leading-6 line-through pb-[30px] text-gray-400">Rp&nbsp;50,000</span>
            </div>
          </div>
        </Link>
      </div>


    </div>
    <Link className="inline-flex items-center justify-center text-base px-[78px] py-3 focus-visible:outline-none disabled:pointer-events-none bg-white text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold border border-yellow-600 sm:px-6 sm:py-2 sm:text-sm" href={"/shop"}>Shop More</Link>
  </div>
</div>

    </main>
  );
} 
import Image from "next/image";

export default function Logo() {
  return (
    <div className="bg-transparent flex items-center">
      <Image
        src="/11.svg"
        alt="FoodHub Logo"
        width={60}
        height={60}
        className="w-auto h-9 rounded-md"
      />
      <p className="font-bold text-3xl text-emerald-600 pl-3">FoodHub</p>
    </div>
  );
}

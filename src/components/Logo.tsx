import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/logo.svg"
        alt="FoodHub Logo"
        width={60}
        height={60}
        className="w-auto h-20 rounded-md"
      />
    </div>
  );
}

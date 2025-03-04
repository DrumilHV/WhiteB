import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center ">
      <Image
        src={"/logo.svg"}
        alt="Logo"
        className="animate-pulse duration-700 "
        height={120}
        width={120}
      />
    </div>
  );
};

import Image from "next/image";

export const Logo = async () => {
  return (
    <section className="py-4 w-full border-b">
      <div className="relative h-[80px] w-full">
        <Image
          src="/image/logo/cropped-new-logo.png"
          alt="logo"
          fill
          className="object-contain"
          sizes="100vw"
        />
      </div>
    </section>
  );
};

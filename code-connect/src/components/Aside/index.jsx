import Image from "next/image";

export const Aside = () => {
    return(
        <Image src='/logo.png' width={200} height={80} priority={true} alt="Logo" />
    );
};

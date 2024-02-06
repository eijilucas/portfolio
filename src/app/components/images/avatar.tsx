import Image from "next/image";

export function Avatar(){
    return(
        <Image
        src='/assets/avatar.png'
        alt="avatar"
        width={323}
        height={368}
        />
    )
}
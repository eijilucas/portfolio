import Image from 'next/image'

export function TsLogo() {
    return (
        <Image
            src="/ts.png"
            alt="me"
            width={40}
            height={40}
            priority
        />
    )
}
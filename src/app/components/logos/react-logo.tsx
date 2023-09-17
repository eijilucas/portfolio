import Image from 'next/image'


export function ReactLogo() {
    return (
        <Image
            src="/react.png"
            alt="me"
            width={40}
            height={40}
            priority
        />
    )
}
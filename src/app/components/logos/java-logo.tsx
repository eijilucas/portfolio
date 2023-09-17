import Image from 'next/image'

export function JavaLogo() {
    return (
        <Image
            src="/java.png"
            alt="me"
            width={40}
            height={40}
            priority
        />
    )
}
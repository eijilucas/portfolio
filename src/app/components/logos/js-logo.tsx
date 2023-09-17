import Image from 'next/image'

export function JsLogo() {
    return (
        <Image
            src="/js.png"
            alt="me"
            width={40}
            height={40}
            priority
        />
    )
}
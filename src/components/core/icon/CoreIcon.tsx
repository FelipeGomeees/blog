type CoreIconProps = {
    src: string,
    alt: string,
}

export default function CoreIcon({ src, alt }: CoreIconProps) {
    return (<img className="w-8 h-8 dark:invert" src={src} alt={alt} />)
}
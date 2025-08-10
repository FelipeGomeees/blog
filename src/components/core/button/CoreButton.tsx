type CoreButtonProps = {
    src: string
    alt: string
    onClick: () => void
}

export default function CoreButton({ src, alt, onClick }: CoreButtonProps) {
    return (
        <button onClick={onClick}>
            
        </button>
    )
}
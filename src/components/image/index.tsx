import React from 'react'
import placeholder from '../../images/placeholder.png'

interface ImageProps {
    src?: string
    alt: string
    dataTest: string
    className: string
    onClick?: () => void
}
const Image = ({
    src,
    alt,
    dataTest,
    className,
    onClick,
}: ImageProps) => {

    const handleError = event => {
        event.target.src = placeholder
    }

    return (
        <img
            src={src}
            alt={alt}
            data-test={`${dataTest}-image`}
            className={className}
            onClick={onClick}
            onError={handleError}
        />
    )
}

export default React.memo(Image)

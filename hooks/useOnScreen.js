import { useState, useEffect } from 'react'

const useOnScreen = (ref, options = {}) => {
    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
        if (!ref?.current || typeof IntersectionObserver === "undefined") {
            return
        }

        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting),
            options
        )

        observer.observe(ref.current)
        // Remove the observer as soon as the component is unmounted
        return () => {
            observer.disconnect()
        }
    }, [options, ref])

    return isIntersecting
}

export default useOnScreen

import { useCallback } from 'react'

export const useCompare = () => {
    const compare = useCallback((tile_1, tile_2) => {
        return tile_1 === tile_2
    }, [])

    return { compare }
}

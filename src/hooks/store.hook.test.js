import { renderHook } from '@testing-library/react-hooks'
import { useStore } from '../hooks/store.hook'

describe('store hook test', () => {
    const { result } = renderHook(() => useStore())

    it('get result from localStorage before play', () => {
        const data = result.current.getResult()

        expect(data).toStrictEqual([])
    })

    it('save result to local storage', () => {
        const user = {
            name: 'David',
            time: '00 : 01 : 0320',
            level: {
                difficult: 'EASY',
                id: 1,
            },
        }

        result.current.setResult(user)

        const data = result.current.getResult()

        expect(data[0]).toStrictEqual(user)
    })

    it('reset list of winners', () => {
        const user = {
            name: 'David',
            time: '00 : 01 : 0320',
            level: {
                difficult: 'EASY',
                id: 1,
            },
        }

        result.current.setResult(user)

        result.current.resetList()

        const data = result.current.getResult()

        expect(data.length).toEqual(0)
    })
})

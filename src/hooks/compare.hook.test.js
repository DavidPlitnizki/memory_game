import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks'
import {useCompare} from '../hooks/compare.hook'


describe('compare custom hook', () => {
    const {result} = renderHook(() => useCompare());

    it('compare hook with same number', () => {
        expect(result.current.compare(1,1)).toBe(true);
    })

    it('compare hook with not same number', () => {
        expect(result.current.compare(1,2)).toBe(false);
    })
})
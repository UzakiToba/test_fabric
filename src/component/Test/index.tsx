import React from 'react';
import { useSelector } from "react-redux";

import { store } from '../../redux';

export const Test: React.FC = () => {
    const hoge = useSelector((state: ReturnType<typeof store.getState>) => state.common.test);
    return (
        <div>{hoge}</div>
    )
};

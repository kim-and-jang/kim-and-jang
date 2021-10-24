import React from 'react';
import { useRouter } from 'next/router';

const Board = () => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <div>
            <h1>Board : {id}</h1>        
        </div>
    );
};

export default Board;
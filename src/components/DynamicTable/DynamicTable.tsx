import React, { useState, useEffect } from 'react';
import { DynamicCell } from '../DynamicCell/DynamicCell';
import { getRandomHex, getShuffledArray } from '../../utils/utils';
import { DynamicCellProps } from '../../interfaces/interfaces';
import './DynamicTable.sass';

export const DynamicTable: React.FC = () => {

    const [initialCellItems, setInitialCellItems] = useState<DynamicCellProps[]>([]);
    const [rerender, setRerender] = useState<boolean>(false);

    const getDynamicTable = (cells: number) => {
        const positionArr: number[] = getShuffledArray(50);

        for (let i = 0; i < cells; i++) {
            setTimeout(() => {
                const cell: DynamicCellProps = {
                    position: 'a' + positionArr[i],
                    color: '#' + getRandomHex(),
                    key: i,
                }

                setInitialCellItems(prevState => [...prevState, cell]);
            }, 1000 * (i + 1))
        }
    };

    useEffect(() => {
        if (initialCellItems.length === 50) {
           setTimeout(() => {
                setInitialCellItems([])
                setRerender(!rerender);
            }, 60000)

        }


    }, [initialCellItems.length, rerender]);

    useEffect(() => {
        getDynamicTable(50);

    }, [rerender]);

    return (
        <section className="dynamic-table">
            <ul className="dynamic-table__template">
                {initialCellItems.map((item) => {
                    return <DynamicCell position={item.position} color={item.color} key={item.key}/>
                })}
            </ul>
        </section>
    )
}

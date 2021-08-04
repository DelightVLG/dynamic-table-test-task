import React from 'react';
import { DynamicCellProps } from '../../interfaces/interfaces';
import './DynamicCell.sass';

export const DynamicCell: React.FC<DynamicCellProps> = ({title, position, color}) => {
    return (
        <li className="dynamic-cell" style={{gridArea: position, backgroundColor: color}}>{title}</li>
    )
}

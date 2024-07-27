import styled from 'styled-components';
import { TDot } from '../../types';

export const Point = styled.div<TDot>`
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background-color: aqua;
    left: ${props => props.x}px;
    top: ${props => props.y}px;
`
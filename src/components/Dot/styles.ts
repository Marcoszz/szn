import styled from 'styled-components';
import { TDot } from '../../screens/Home/types';

export const Point = styled.div<TDot>`
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 32px;
    background-color: #646cff;
    left: ${props => props.x}px;
    top: ${props => props.y}px;
`
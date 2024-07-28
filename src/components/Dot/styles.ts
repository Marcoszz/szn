import styled from 'styled-components';
import { TDot } from '../../screens/Home/types';

export const Point = styled.div.attrs<TDot>(props => ({
    className: "absolute w-1.5 h-1.5 rounded-full bg-sky-400",
    style: {
        left: `${props.x}px`,
        top: `${props.y}px`
    }
}))``
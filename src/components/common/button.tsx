import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { themeColors } from '../../util/theme';

interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    disabled: boolean;
    theme?: string;
}

interface ButtonColors {
    [primary: string]: string;
    secondary: string;
    tertiary: string;
}

const buttonColors: ButtonColors = {
    primary: themeColors.darkBlue,
    secondary: themeColors.darkGray,
    tertiary: themeColors.orange,
};

const StyledButton = styled.button`
    background-color: ${props => (props.theme.length ? buttonColors[props.theme] : buttonColors.primary)};
    border-radius: 4px;
    border: 0;
    color: #fff;
    font-weight: 600;
    padding: 15px;

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: default;
        opacity: 0.5;
    }
`;

export const Button: React.FC<Props> = props => {
    const { children, ...restProps } = props;

    return <StyledButton {...restProps}>{children}</StyledButton>;
};
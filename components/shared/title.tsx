import clsx from "clsx";
import React from "react";

//indicate what sizes are available for the title
type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface Props{
    size?: TitleSize;
    className?: string;
    text?: string;
}

export const Title: React.FC<Props> = ({text, size = 'sm', className}) =>{
    const mapTagbySize={
        xs:'h5',
        sm:'h4',
        md:'h3',
        lg:'h2',
        xl:'h1',
        '2xl':'h1'
    } as const;

    const mapClassNameBySize = {
        xs:"text-[16px]",
        sm:"text-[22px]",
        md:"text-[26px]",
        lg:"text-[32px]",
        xl:"text-[40px]",
        '2xl':"text-[48px]",
    }

    return React.createElement(
        mapTagbySize[size],//type
        {className: clsx(mapClassNameBySize[size], className)},//props
        text//children
    )
}

import React from "react";


export interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
    color?: 'green' | 'gray' | 'black' | 'white'| 'secondary';
    variant?: "body"| "button" | "background" | "tag" | "author" | "settings" | "h1" | "h2" | "h3" | "h4" | "productName" | "bodyBold" | "subtitle";
    as?: React.ElementType;
}
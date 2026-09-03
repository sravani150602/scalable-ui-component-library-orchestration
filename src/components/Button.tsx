import type{ButtonHTMLAttributes,ReactNode}from"react";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{variant?:"primary"|"secondary"|"danger";loading?:boolean;icon?:ReactNode}
export function Button({variant="primary",loading,icon,children,disabled,...props}:ButtonProps){return <button className={"btn btn--"+variant} disabled={disabled||loading}{...props}>{loading?<span aria-label="Loading">•••</span>:<>{icon}{children}</>}</button>}

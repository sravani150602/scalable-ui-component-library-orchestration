import type{HTMLAttributes,ReactNode}from"react";
export interface CardProps extends HTMLAttributes<HTMLElement>{title?:string;actions?:ReactNode;elevated?:boolean}
export function Card({title,actions,elevated,children,className="",...props}:CardProps){return <section className={"card "+(elevated?"card--elevated ":"")+className}{...props}>{(title||actions)&&<header><h3>{title}</h3>{actions}</header>}<div className="card__body">{children}</div></section>}

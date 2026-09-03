export type Status="active"|"paused"|"archived";
export interface Entity{id:string;name:string;status:Status;updatedAt:string;score:number}
export interface NormalizedResult<T>{entities:Record<string,T>;ids:string[];meta:{source:"rest"|"graphql";receivedAt:string;count:number}}
export interface ApiEnvelope<T>{data:T;total?:number}
export interface GraphQLConnection<T>{data:{nodes:T[];pageInfo?:{totalCount:number}}}
export interface FeatureDefinition{id:string;label:string;description:string;accent:string}

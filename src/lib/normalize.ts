import type{ApiEnvelope,Entity,GraphQLConnection,NormalizedResult}from"../types";
const normalize=(items:Entity[],source:"rest"|"graphql"):NormalizedResult<Entity>=>({entities:Object.fromEntries(items.map(item=>[item.id,item])),ids:items.map(item=>item.id),meta:{source,receivedAt:new Date().toISOString(),count:items.length}});
export const normalizeRest=(response:ApiEnvelope<Entity[]>)=>normalize(response.data,"rest");
export const normalizeGraphQL=(response:GraphQLConnection<Entity>)=>normalize(response.data.nodes,"graphql");
export const toList=<T>(result:NormalizedResult<T>)=>result.ids.map(id=>result.entities[id]);

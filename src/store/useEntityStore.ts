import{create}from"zustand";
import type{Entity,NormalizedResult}from"../types";
interface State{entities:Record<string,Entity>;ids:string[];selectedId?:string;ingest:(r:NormalizedResult<Entity>)=>void;select:(id?:string)=>void;updateStatus:(id:string,status:Entity["status"])=>void}
export const useEntityStore=create<State>(set=>({entities:{},ids:[],ingest:({entities,ids})=>set({entities,ids}),select:selectedId=>set({selectedId}),updateStatus:(id,status)=>set(state=>({entities:{...state.entities,[id]:{...state.entities[id],status}}}))}));

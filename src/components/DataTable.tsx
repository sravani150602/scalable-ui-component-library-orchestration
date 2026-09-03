import{memo,useMemo}from"react";
export interface Column<T>{key:keyof T;label:string;render?:(value:T[keyof T],row:T)=>React.ReactNode}
export interface DataTableProps<T extends{id:string}>{rows:T[];columns:Column<T>[];emptyText?:string;onRowClick?:(row:T)=>void}
function Table<T extends{id:string}>({rows,columns,emptyText="No data",onRowClick}:DataTableProps<T>){const rendered=useMemo(()=>rows.map(row=><tr key={row.id} onClick={()=>onRowClick?.(row)}>{columns.map(column=><td key={String(column.key)}>{column.render?.(row[column.key],row)??String(row[column.key])}</td>)}</tr>),[rows,columns,onRowClick]);return <div className="table-wrap"><table><thead><tr>{columns.map(column=><th key={String(column.key)}>{column.label}</th>)}</tr></thead><tbody>{rendered.length?rendered:<tr><td colSpan={columns.length}>{emptyText}</td></tr>}</tbody></table></div>}
export const DataTable=memo(Table)as typeof Table;

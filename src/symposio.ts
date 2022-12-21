// SCHEMA TYPES
export type DBSchema = Record<string, DBSchemaProp>;

type DBSchemaProp = {
  [key: string]: DBSchemaType | DBSchemaProp;
};
type DBSchemaType = "string" | "boolean";

// SYMPOSIO TYPES
export interface SymposioDB<S> {
  schema: S;
}

// TYPE UTILS
type MapSchemaType<T> = {
  [K in keyof T]: ResolveTypes<T[K]>;
};
type ResolveTypes<Type> = Type extends "string"
  ? string
  : Type extends "boolean"
  ? boolean
  : { [K in keyof Type]: ResolveTypes<Type[K]> };

// ==============
// MAIN FUNCTIONS
// ==============

// Create Database
export function createDB<S extends DBSchemaProp>(schema: S): SymposioDB<S> {
  const instance = { schema };
  return instance;
}

// Insert
export function insert<S extends DBSchemaProp>(
  db: SymposioDB<S>,
  record: MapSchemaType<S>
): void {}

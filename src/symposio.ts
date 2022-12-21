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

// Create Database
export function createDB<S extends DBSchemaProp>(schema: S): SymposioDB<S> {
  return { schema };
}

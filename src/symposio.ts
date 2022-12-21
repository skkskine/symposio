// SCHEMA TYPES
type DBSchemaType = "string" | "boolean";
export type DBSchema = Record<string, DBSchemaType>;

// SYMPOSIO TYPES
export interface SymposioDB {
  schema: DBSchema;
}

// Create Database
export function createDB(schema: DBSchema): SymposioDB {
  return { schema };
}

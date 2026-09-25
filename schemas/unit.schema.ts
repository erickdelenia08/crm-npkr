import { z } from "zod";

export const unitSchema = z.object({
  id: z.string().optional(),
  blockId: z.string().min(1, "Block is required"),
  productTypeId: z.string().min(1, "Product Type is required"),
  number: z.string().min(1, "Number is required"),
  code: z.string().min(1, "Code is required"),
  landArea: z.coerce.number().optional().nullable(),
  buildingArea: z.coerce.number().optional().nullable(),
  price: z.coerce.number().optional().nullable(),
  status: z.enum(["AVAILABLE", "HOLD", "BOOKED", "AKAD", "SOLD", "CANCELLED"]).default("AVAILABLE"),
  constructionStatus: z.enum(["NOT_STARTED", "FOUNDATION", "STRUCTURE", "WALL", "ROOF", "CEILING", "FINISHING", "COMPLETED"]).default("NOT_STARTED"),
  facing: z.enum(["NORTH", "SOUTH", "EAST", "WEST"]).optional().nullable(),
  description: z.string().optional().nullable(),
});

export type UnitInput = z.infer<typeof unitSchema>;

export const bulkUnitSchema = z.object({
  blockId: z.string().min(1, "Block is required"),
  productTypeId: z.string().min(1, "Product Type is required"),
  prefix: z.string().min(1, "Prefix is required"),
  startNumber: z.number().min(0, "Start number must be positive"),
  endNumber: z.number().min(0, "End number must be positive"),
  priceMode: z.enum(["PRODUCT_TYPE", "CUSTOM"]),
  customPrice: z.coerce.number().optional().nullable(),
  status: z.enum(["AVAILABLE", "HOLD", "BOOKED", "AKAD", "SOLD", "CANCELLED"]).default("AVAILABLE"),
  constructionStatus: z.enum(["NOT_STARTED", "FOUNDATION", "STRUCTURE", "WALL", "ROOF", "CEILING", "FINISHING", "COMPLETED"]).default("NOT_STARTED"),
});

export type BulkUnitInput = z.infer<typeof bulkUnitSchema>;

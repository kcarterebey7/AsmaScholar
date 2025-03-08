import { names, type Name, type InsertName } from "@shared/schema";
import { namesData } from "@shared/data";

export interface IStorage {
  getName(orderNumber: number): Promise<Name | undefined>;
  getAllNames(): Promise<Name[]>;
  createName(name: InsertName): Promise<Name>;
}

export class MemStorage implements IStorage {
  private names: Map<number, Name>;
  private currentId: number;

  constructor() {
    this.names = new Map();
    // Initialize with namesData
    namesData.forEach(name => {
      this.names.set(name.orderNumber, name);
    });
    this.currentId = namesData.length + 1;
  }

  async getName(orderNumber: number): Promise<Name | undefined> {
    return this.names.get(orderNumber);
  }

  async getAllNames(): Promise<Name[]> {
    return Array.from(this.names.values())
      .sort((a, b) => a.orderNumber - b.orderNumber); // Ensure consistent ordering
  }

  async createName(insertName: InsertName): Promise<Name> {
    const id = this.currentId++;
    const name: Name = { id, ...insertName };
    this.names.set(name.orderNumber, name);
    return name;
  }
}

export const storage = new MemStorage();
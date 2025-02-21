import { names, type Name, type InsertName } from "@shared/schema";

export interface IStorage {
  getName(id: number): Promise<Name | undefined>;
  getAllNames(): Promise<Name[]>;
  createName(name: InsertName): Promise<Name>;
}

export class MemStorage implements IStorage {
  private names: Map<number, Name>;
  private currentId: number;

  constructor() {
    this.names = new Map();
    this.currentId = 1;
  }

  async getName(id: number): Promise<Name | undefined> {
    return this.names.get(id);
  }

  async getAllNames(): Promise<Name[]> {
    return Array.from(this.names.values());
  }

  async createName(insertName: InsertName): Promise<Name> {
    const id = this.currentId++;
    const name: Name = { id, ...insertName };
    this.names.set(id, name);
    return name;
  }
}

export const storage = new MemStorage();

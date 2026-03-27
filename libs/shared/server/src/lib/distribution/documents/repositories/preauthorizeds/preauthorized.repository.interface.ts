import { Preauthorized } from "../../entities/preauthorized.entity";

export abstract class PreauthorizedRepository {
  abstract findByDateRange(start: Date, end: Date, route?: string): Promise<Preauthorized[]>;

  abstract findById(code_remission: string): Promise<Preauthorized | null>;

  abstract save(documento: Preauthorized): Promise<Preauthorized>;
}
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class File {
  @PrimaryKey()
  id!: string;

  @Property({ type: Date })
  createdAt = new Date();

  @Property({ nullable: true, unique: true }) // Add `unique: true`
  filename: string | null = null;

  @Property({ nullable: true })
  filepath: string | null = null;
}

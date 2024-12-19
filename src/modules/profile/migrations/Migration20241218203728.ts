import { Migration } from '@mikro-orm/migrations';

export class Migration20241218203728 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table if not exists "profile" ("id" text not null, "email" text not null, "username" text not null, "photo_url" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "profile_pkey" primary key ("id"));');
    this.addSql('CREATE INDEX IF NOT EXISTS "IDX_profile_deleted_at" ON "profile" (deleted_at) WHERE deleted_at IS NULL;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "profile" cascade;');
  }

}

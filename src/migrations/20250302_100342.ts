import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_layout354_sections_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout354_sections_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout354_sections_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout354_sections_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout354_sections_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout354_sections_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout354_sections_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout354_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout354" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout354_sections_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout354_sections_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout354_sections_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout354_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout354" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout354_sections_links" ADD CONSTRAINT "pages_blocks_layout354_sections_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout354_sections"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout354_sections" ADD CONSTRAINT "pages_blocks_layout354_sections_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout354_sections" ADD CONSTRAINT "pages_blocks_layout354_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout354"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout354" ADD CONSTRAINT "pages_blocks_layout354_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout354_sections_links" ADD CONSTRAINT "_pages_v_blocks_layout354_sections_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout354_sections"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout354_sections" ADD CONSTRAINT "_pages_v_blocks_layout354_sections_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout354_sections" ADD CONSTRAINT "_pages_v_blocks_layout354_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout354"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout354" ADD CONSTRAINT "_pages_v_blocks_layout354_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout354_sections_links_order_idx" ON "pages_blocks_layout354_sections_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout354_sections_links_parent_id_idx" ON "pages_blocks_layout354_sections_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout354_sections_order_idx" ON "pages_blocks_layout354_sections" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout354_sections_parent_id_idx" ON "pages_blocks_layout354_sections" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout354_sections_image_idx" ON "pages_blocks_layout354_sections" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout354_order_idx" ON "pages_blocks_layout354" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout354_parent_id_idx" ON "pages_blocks_layout354" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout354_path_idx" ON "pages_blocks_layout354" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout354_sections_links_order_idx" ON "_pages_v_blocks_layout354_sections_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout354_sections_links_parent_id_idx" ON "_pages_v_blocks_layout354_sections_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout354_sections_order_idx" ON "_pages_v_blocks_layout354_sections" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout354_sections_parent_id_idx" ON "_pages_v_blocks_layout354_sections" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout354_sections_image_idx" ON "_pages_v_blocks_layout354_sections" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout354_order_idx" ON "_pages_v_blocks_layout354" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout354_parent_id_idx" ON "_pages_v_blocks_layout354" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout354_path_idx" ON "_pages_v_blocks_layout354" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_layout354_sections_links" CASCADE;
  DROP TABLE "pages_blocks_layout354_sections" CASCADE;
  DROP TABLE "pages_blocks_layout354" CASCADE;
  DROP TABLE "_pages_v_blocks_layout354_sections_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout354_sections" CASCADE;
  DROP TABLE "_pages_v_blocks_layout354" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_layout354_sections_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout354_sections_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout354_sections_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout354_sections_links_link_appearance";`)
}

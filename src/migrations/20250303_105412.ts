import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_layout412_big_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout412_big_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout413_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout413_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout419_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout419_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout485_features_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout485_features_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout517_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout517_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_contact1_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_contact1_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout412_big_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout412_big_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout413_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout413_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout419_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout419_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout485_features_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout485_features_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout517_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout517_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_contact1_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_contact1_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout412_sub_headings" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout412_big_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout412_big_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout412_big_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout412" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"title" varchar,
  	"txt" jsonb,
  	"img_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout413_sub_headings" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout413_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout413_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout413_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout413" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"tagline" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout419_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout419_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout419_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout419_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"img_id" integer,
  	"subheading" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout419" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout424_headings" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout424" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout425_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout425" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_tagline" varchar,
  	"content_heading" varchar,
  	"content_description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout485_features_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout485_features_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout485_features_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout485_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" numeric,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout485" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout517_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout517_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout517_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout517" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"tagline" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_contact1_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_contact1_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_contact1_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_contact1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout412_sub_headings" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout412_big_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout412_big_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout412_big_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout412" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"title" varchar,
  	"txt" jsonb,
  	"img_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout413_sub_headings" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout413_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout413_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout413_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout413" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"tagline" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout419_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout419_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout419_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout419_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"img_id" integer,
  	"subheading" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout419" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout424_headings" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout424" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout425_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout425" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content_tagline" varchar,
  	"content_heading" varchar,
  	"content_description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout485_features_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout485_features_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout485_features_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout485_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"number" numeric,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout485" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout517_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout517_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout517_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout517" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"tagline" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_contact1_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_contact1_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_contact1_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_contact1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_layout354_sections" ADD COLUMN "description" jsonb;
  ALTER TABLE "_pages_v_blocks_layout354_sections" ADD COLUMN "description" jsonb;
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout412_sub_headings" ADD CONSTRAINT "pages_blocks_layout412_sub_headings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout412"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout412_big_links" ADD CONSTRAINT "pages_blocks_layout412_big_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout412"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout412" ADD CONSTRAINT "pages_blocks_layout412_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout412" ADD CONSTRAINT "pages_blocks_layout412_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout413_sub_headings" ADD CONSTRAINT "pages_blocks_layout413_sub_headings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout413"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout413_links" ADD CONSTRAINT "pages_blocks_layout413_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout413"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout413" ADD CONSTRAINT "pages_blocks_layout413_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout413" ADD CONSTRAINT "pages_blocks_layout413_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout419_links" ADD CONSTRAINT "pages_blocks_layout419_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout419"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout419_data" ADD CONSTRAINT "pages_blocks_layout419_data_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout419_data" ADD CONSTRAINT "pages_blocks_layout419_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout419"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout419" ADD CONSTRAINT "pages_blocks_layout419_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout424_headings" ADD CONSTRAINT "pages_blocks_layout424_headings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout424"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout424" ADD CONSTRAINT "pages_blocks_layout424_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout425_images" ADD CONSTRAINT "pages_blocks_layout425_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout425_images" ADD CONSTRAINT "pages_blocks_layout425_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout425"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout425" ADD CONSTRAINT "pages_blocks_layout425_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout485_features_links" ADD CONSTRAINT "pages_blocks_layout485_features_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout485_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout485_features" ADD CONSTRAINT "pages_blocks_layout485_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout485"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout485" ADD CONSTRAINT "pages_blocks_layout485_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout517_links" ADD CONSTRAINT "pages_blocks_layout517_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout517"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout517" ADD CONSTRAINT "pages_blocks_layout517_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout517" ADD CONSTRAINT "pages_blocks_layout517_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_contact1_links" ADD CONSTRAINT "pages_blocks_contact1_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_contact1"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_contact1" ADD CONSTRAINT "pages_blocks_contact1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout412_sub_headings" ADD CONSTRAINT "_pages_v_blocks_layout412_sub_headings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout412"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout412_big_links" ADD CONSTRAINT "_pages_v_blocks_layout412_big_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout412"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout412" ADD CONSTRAINT "_pages_v_blocks_layout412_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout412" ADD CONSTRAINT "_pages_v_blocks_layout412_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout413_sub_headings" ADD CONSTRAINT "_pages_v_blocks_layout413_sub_headings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout413"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout413_links" ADD CONSTRAINT "_pages_v_blocks_layout413_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout413"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout413" ADD CONSTRAINT "_pages_v_blocks_layout413_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout413" ADD CONSTRAINT "_pages_v_blocks_layout413_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout419_links" ADD CONSTRAINT "_pages_v_blocks_layout419_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout419"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout419_data" ADD CONSTRAINT "_pages_v_blocks_layout419_data_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout419_data" ADD CONSTRAINT "_pages_v_blocks_layout419_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout419"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout419" ADD CONSTRAINT "_pages_v_blocks_layout419_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout424_headings" ADD CONSTRAINT "_pages_v_blocks_layout424_headings_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout424"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout424" ADD CONSTRAINT "_pages_v_blocks_layout424_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout425_images" ADD CONSTRAINT "_pages_v_blocks_layout425_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout425_images" ADD CONSTRAINT "_pages_v_blocks_layout425_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout425"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout425" ADD CONSTRAINT "_pages_v_blocks_layout425_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout485_features_links" ADD CONSTRAINT "_pages_v_blocks_layout485_features_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout485_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout485_features" ADD CONSTRAINT "_pages_v_blocks_layout485_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout485"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout485" ADD CONSTRAINT "_pages_v_blocks_layout485_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout517_links" ADD CONSTRAINT "_pages_v_blocks_layout517_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout517"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout517" ADD CONSTRAINT "_pages_v_blocks_layout517_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout517" ADD CONSTRAINT "_pages_v_blocks_layout517_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_contact1_links" ADD CONSTRAINT "_pages_v_blocks_contact1_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_contact1"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_contact1" ADD CONSTRAINT "_pages_v_blocks_contact1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout412_sub_headings_order_idx" ON "pages_blocks_layout412_sub_headings" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout412_sub_headings_parent_id_idx" ON "pages_blocks_layout412_sub_headings" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout412_big_links_order_idx" ON "pages_blocks_layout412_big_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout412_big_links_parent_id_idx" ON "pages_blocks_layout412_big_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout412_order_idx" ON "pages_blocks_layout412" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout412_parent_id_idx" ON "pages_blocks_layout412" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout412_path_idx" ON "pages_blocks_layout412" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout412_img_idx" ON "pages_blocks_layout412" USING btree ("img_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout413_sub_headings_order_idx" ON "pages_blocks_layout413_sub_headings" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout413_sub_headings_parent_id_idx" ON "pages_blocks_layout413_sub_headings" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout413_links_order_idx" ON "pages_blocks_layout413_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout413_links_parent_id_idx" ON "pages_blocks_layout413_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout413_order_idx" ON "pages_blocks_layout413" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout413_parent_id_idx" ON "pages_blocks_layout413" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout413_path_idx" ON "pages_blocks_layout413" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout413_media_idx" ON "pages_blocks_layout413" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout419_links_order_idx" ON "pages_blocks_layout419_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout419_links_parent_id_idx" ON "pages_blocks_layout419_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout419_data_order_idx" ON "pages_blocks_layout419_data" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout419_data_parent_id_idx" ON "pages_blocks_layout419_data" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout419_data_img_idx" ON "pages_blocks_layout419_data" USING btree ("img_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout419_order_idx" ON "pages_blocks_layout419" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout419_parent_id_idx" ON "pages_blocks_layout419" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout419_path_idx" ON "pages_blocks_layout419" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout424_headings_order_idx" ON "pages_blocks_layout424_headings" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout424_headings_parent_id_idx" ON "pages_blocks_layout424_headings" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout424_order_idx" ON "pages_blocks_layout424" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout424_parent_id_idx" ON "pages_blocks_layout424" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout424_path_idx" ON "pages_blocks_layout424" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout425_images_order_idx" ON "pages_blocks_layout425_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout425_images_parent_id_idx" ON "pages_blocks_layout425_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout425_images_image_idx" ON "pages_blocks_layout425_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout425_order_idx" ON "pages_blocks_layout425" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout425_parent_id_idx" ON "pages_blocks_layout425" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout425_path_idx" ON "pages_blocks_layout425" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout485_features_links_order_idx" ON "pages_blocks_layout485_features_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout485_features_links_parent_id_idx" ON "pages_blocks_layout485_features_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout485_features_order_idx" ON "pages_blocks_layout485_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout485_features_parent_id_idx" ON "pages_blocks_layout485_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout485_order_idx" ON "pages_blocks_layout485" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout485_parent_id_idx" ON "pages_blocks_layout485" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout485_path_idx" ON "pages_blocks_layout485" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout517_links_order_idx" ON "pages_blocks_layout517_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout517_links_parent_id_idx" ON "pages_blocks_layout517_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout517_order_idx" ON "pages_blocks_layout517" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout517_parent_id_idx" ON "pages_blocks_layout517" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout517_path_idx" ON "pages_blocks_layout517" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout517_media_idx" ON "pages_blocks_layout517" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact1_links_order_idx" ON "pages_blocks_contact1_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact1_links_parent_id_idx" ON "pages_blocks_contact1_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact1_order_idx" ON "pages_blocks_contact1" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact1_parent_id_idx" ON "pages_blocks_contact1" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_contact1_path_idx" ON "pages_blocks_contact1" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout412_sub_headings_order_idx" ON "_pages_v_blocks_layout412_sub_headings" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout412_sub_headings_parent_id_idx" ON "_pages_v_blocks_layout412_sub_headings" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout412_big_links_order_idx" ON "_pages_v_blocks_layout412_big_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout412_big_links_parent_id_idx" ON "_pages_v_blocks_layout412_big_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout412_order_idx" ON "_pages_v_blocks_layout412" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout412_parent_id_idx" ON "_pages_v_blocks_layout412" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout412_path_idx" ON "_pages_v_blocks_layout412" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout412_img_idx" ON "_pages_v_blocks_layout412" USING btree ("img_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout413_sub_headings_order_idx" ON "_pages_v_blocks_layout413_sub_headings" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout413_sub_headings_parent_id_idx" ON "_pages_v_blocks_layout413_sub_headings" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout413_links_order_idx" ON "_pages_v_blocks_layout413_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout413_links_parent_id_idx" ON "_pages_v_blocks_layout413_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout413_order_idx" ON "_pages_v_blocks_layout413" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout413_parent_id_idx" ON "_pages_v_blocks_layout413" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout413_path_idx" ON "_pages_v_blocks_layout413" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout413_media_idx" ON "_pages_v_blocks_layout413" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout419_links_order_idx" ON "_pages_v_blocks_layout419_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout419_links_parent_id_idx" ON "_pages_v_blocks_layout419_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout419_data_order_idx" ON "_pages_v_blocks_layout419_data" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout419_data_parent_id_idx" ON "_pages_v_blocks_layout419_data" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout419_data_img_idx" ON "_pages_v_blocks_layout419_data" USING btree ("img_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout419_order_idx" ON "_pages_v_blocks_layout419" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout419_parent_id_idx" ON "_pages_v_blocks_layout419" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout419_path_idx" ON "_pages_v_blocks_layout419" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout424_headings_order_idx" ON "_pages_v_blocks_layout424_headings" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout424_headings_parent_id_idx" ON "_pages_v_blocks_layout424_headings" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout424_order_idx" ON "_pages_v_blocks_layout424" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout424_parent_id_idx" ON "_pages_v_blocks_layout424" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout424_path_idx" ON "_pages_v_blocks_layout424" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout425_images_order_idx" ON "_pages_v_blocks_layout425_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout425_images_parent_id_idx" ON "_pages_v_blocks_layout425_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout425_images_image_idx" ON "_pages_v_blocks_layout425_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout425_order_idx" ON "_pages_v_blocks_layout425" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout425_parent_id_idx" ON "_pages_v_blocks_layout425" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout425_path_idx" ON "_pages_v_blocks_layout425" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout485_features_links_order_idx" ON "_pages_v_blocks_layout485_features_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout485_features_links_parent_id_idx" ON "_pages_v_blocks_layout485_features_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout485_features_order_idx" ON "_pages_v_blocks_layout485_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout485_features_parent_id_idx" ON "_pages_v_blocks_layout485_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout485_order_idx" ON "_pages_v_blocks_layout485" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout485_parent_id_idx" ON "_pages_v_blocks_layout485" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout485_path_idx" ON "_pages_v_blocks_layout485" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout517_links_order_idx" ON "_pages_v_blocks_layout517_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout517_links_parent_id_idx" ON "_pages_v_blocks_layout517_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout517_order_idx" ON "_pages_v_blocks_layout517" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout517_parent_id_idx" ON "_pages_v_blocks_layout517" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout517_path_idx" ON "_pages_v_blocks_layout517" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout517_media_idx" ON "_pages_v_blocks_layout517" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact1_links_order_idx" ON "_pages_v_blocks_contact1_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact1_links_parent_id_idx" ON "_pages_v_blocks_contact1_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact1_order_idx" ON "_pages_v_blocks_contact1" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact1_parent_id_idx" ON "_pages_v_blocks_contact1" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_contact1_path_idx" ON "_pages_v_blocks_contact1" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_layout412_sub_headings" CASCADE;
  DROP TABLE "pages_blocks_layout412_big_links" CASCADE;
  DROP TABLE "pages_blocks_layout412" CASCADE;
  DROP TABLE "pages_blocks_layout413_sub_headings" CASCADE;
  DROP TABLE "pages_blocks_layout413_links" CASCADE;
  DROP TABLE "pages_blocks_layout413" CASCADE;
  DROP TABLE "pages_blocks_layout419_links" CASCADE;
  DROP TABLE "pages_blocks_layout419_data" CASCADE;
  DROP TABLE "pages_blocks_layout419" CASCADE;
  DROP TABLE "pages_blocks_layout424_headings" CASCADE;
  DROP TABLE "pages_blocks_layout424" CASCADE;
  DROP TABLE "pages_blocks_layout425_images" CASCADE;
  DROP TABLE "pages_blocks_layout425" CASCADE;
  DROP TABLE "pages_blocks_layout485_features_links" CASCADE;
  DROP TABLE "pages_blocks_layout485_features" CASCADE;
  DROP TABLE "pages_blocks_layout485" CASCADE;
  DROP TABLE "pages_blocks_layout517_links" CASCADE;
  DROP TABLE "pages_blocks_layout517" CASCADE;
  DROP TABLE "pages_blocks_contact1_links" CASCADE;
  DROP TABLE "pages_blocks_contact1" CASCADE;
  DROP TABLE "_pages_v_blocks_layout412_sub_headings" CASCADE;
  DROP TABLE "_pages_v_blocks_layout412_big_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout412" CASCADE;
  DROP TABLE "_pages_v_blocks_layout413_sub_headings" CASCADE;
  DROP TABLE "_pages_v_blocks_layout413_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout413" CASCADE;
  DROP TABLE "_pages_v_blocks_layout419_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout419_data" CASCADE;
  DROP TABLE "_pages_v_blocks_layout419" CASCADE;
  DROP TABLE "_pages_v_blocks_layout424_headings" CASCADE;
  DROP TABLE "_pages_v_blocks_layout424" CASCADE;
  DROP TABLE "_pages_v_blocks_layout425_images" CASCADE;
  DROP TABLE "_pages_v_blocks_layout425" CASCADE;
  DROP TABLE "_pages_v_blocks_layout485_features_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout485_features" CASCADE;
  DROP TABLE "_pages_v_blocks_layout485" CASCADE;
  DROP TABLE "_pages_v_blocks_layout517_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout517" CASCADE;
  DROP TABLE "_pages_v_blocks_contact1_links" CASCADE;
  DROP TABLE "_pages_v_blocks_contact1" CASCADE;
  ALTER TABLE "pages_blocks_layout354_sections" DROP COLUMN IF EXISTS "description";
  ALTER TABLE "_pages_v_blocks_layout354_sections" DROP COLUMN IF EXISTS "description";
  DROP TYPE "public"."enum_pages_blocks_layout412_big_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout412_big_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout413_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout413_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout419_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout419_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout485_features_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout485_features_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout517_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout517_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_contact1_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_contact1_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout412_big_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout412_big_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout413_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout413_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout419_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout419_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout485_features_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout485_features_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout517_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout517_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_contact1_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_contact1_links_link_appearance";`)
}

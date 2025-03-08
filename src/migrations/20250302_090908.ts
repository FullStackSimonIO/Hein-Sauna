import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_cta7_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta7_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_cta25_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta25_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_cta1_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta1_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_cta33_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta33_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_cta15_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta15_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_header62_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_header62_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_header47_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_header47_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_header50_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_header50_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout366_big_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout366_big_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout366_small_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout366_small_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout415_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout415_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout458_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout458_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout499_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout499_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout364_sections_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout364_sections_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout348_contents_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout348_contents_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout349_contents_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout349_contents_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout423_features_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout423_features_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout353_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout353_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout414_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout414_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout493_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout493_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout356_features_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout356_features_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout356_features_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum_pages_blocks_layout486_features_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout486_features_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout352_content_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout352_content_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_layout352_items_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_layout352_items_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'header1', 'header5', 'header9', 'header19', 'header26', 'header30', 'header36', 'header37', 'header76', 'header77', 'header78', 'header83', 'header104', 'header127');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_cta7_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta7_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_cta25_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta25_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta1_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_cta33_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta33_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_cta15_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta15_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_header62_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_header62_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_header47_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_header47_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_header50_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_header50_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout366_big_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout366_big_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout366_small_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout366_small_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout415_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout415_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout458_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout458_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout499_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout499_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout364_sections_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout364_sections_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout348_contents_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout348_contents_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout349_contents_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout349_contents_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout423_features_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout423_features_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout353_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout353_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout414_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout414_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout493_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout493_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout356_features_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout356_features_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout356_features_buttons_variant" AS ENUM('primary', 'secondary', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_layout486_features_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout486_features_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout352_content_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout352_content_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_layout352_items_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_layout352_items_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'header1', 'header5', 'header9', 'header19', 'header26', 'header30', 'header36', 'header37', 'header76', 'header77', 'header78', 'header83', 'header104', 'header127');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_header_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE IF NOT EXISTS "pages_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_hero_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_hero_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta7_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_cta7_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_cta7_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta7" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta25_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_cta25_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_cta25_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta25" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta1_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_cta1_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_cta1_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta37_hover_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"heading" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta37" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta38_hover_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"list_number" varchar,
  	"heading" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta38" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta33_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_cta33_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_cta33_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta33_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta33" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta15_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_cta15_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_cta15_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cta15" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_header64" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_header62_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_header62_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_header62_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_header62" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_header47_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_header47_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_header47_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_header47" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_header50_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_header50_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_header50_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_header50" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout366_big_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout366_big_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout366_big_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout366_small_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout366_small_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout366_small_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout366_small" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"head" varchar,
  	"desc" varchar,
  	"img_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout366" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"title" varchar,
  	"txt" jsonb,
  	"img_id" integer,
  	"big_tag" varchar,
  	"big_head" varchar,
  	"big_desc" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout422_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" varchar,
  	"media_id" integer,
  	"url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout422" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout415_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout415_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout415_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout415_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout415" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout458_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout458_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout458_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout458_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout458" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout499_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout499_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout499_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout499_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"heading" varchar,
  	"description" jsonb,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout499" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout38" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout66_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" jsonb,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout66" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout90" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout364_sections_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout364_sections_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout364_sections_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout364_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout364" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout348_contents_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout348_contents_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout348_contents_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout348_contents" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout348" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout349_contents_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout349_contents_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout349_contents_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout349_contents" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout349" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout423_features_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout423_features_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout423_features_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout423_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"rich_text" jsonb,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout423" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout353_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout353_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout353_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout353_feature_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout353" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout414_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout414_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout414_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout414_images_part_one" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout414_images_part_two" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout414" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout417_feature_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout417" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout351_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout351" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout493_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout493_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout493_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout493_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout493" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout356_features_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout356_features_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout356_features_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout356_features_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum_pages_blocks_layout356_features_buttons_variant"
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout356_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"anchor_url" varchar,
  	"anchor_number" varchar,
  	"anchor_title" varchar,
  	"tagline" varchar,
  	"heading" varchar,
  	"rich_text" jsonb,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout356" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout486_features_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout486_features_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout486_features_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout486_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout486" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout488" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"left_heading" varchar,
  	"right_heading" varchar,
  	"mobile_heading" varchar,
  	"media_id" integer,
  	"description" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout352_content_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout352_content_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout352_content_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout352_items_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_layout352_items_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_layout352_items_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout352_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"date" varchar,
  	"description" jsonb,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_layout352" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_tagline" varchar,
  	"content_heading" varchar,
  	"content_description" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_type" "enum_pages_hero_type" DEFAULT 'none',
  	"hero_title" varchar,
  	"hero_rich_text" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_version_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_version_hero_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_hero_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta7_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_cta7_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_cta7_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta7" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta25_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_cta25_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_cta25_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta25" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta1_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_cta1_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_cta1_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta1" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta37_hover_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"heading" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta37" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta38_hover_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"list_number" varchar,
  	"heading" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta38" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta33_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_cta33_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_cta33_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta33_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta33" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta15_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_cta15_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_cta15_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cta15" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_header64" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_header62_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_header62_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_header62_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_header62" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_header47_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_header47_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_header47_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_header47" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_header50_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_header50_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_header50_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_header50" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout366_big_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout366_big_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout366_big_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout366_small_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout366_small_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout366_small_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout366_small" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"head" varchar,
  	"desc" varchar,
  	"img_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout366" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag" varchar,
  	"title" varchar,
  	"txt" jsonb,
  	"img_id" integer,
  	"big_tag" varchar,
  	"big_head" varchar,
  	"big_desc" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout422_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" varchar,
  	"media_id" integer,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout422" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout415_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout415_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout415_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout415_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout415" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout458_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout458_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout458_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout458_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout458" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout499_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout499_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout499_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout499_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"heading" varchar,
  	"description" jsonb,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout499" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout38" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout66_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"description" jsonb,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout66" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout90" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout364_sections_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout364_sections_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout364_sections_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout364_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout364" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout348_contents_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout348_contents_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout348_contents_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout348_contents" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout348" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout349_contents_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout349_contents_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout349_contents_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout349_contents" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"title" varchar,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout349" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout423_features_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout423_features_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout423_features_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout423_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout423" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout353_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout353_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout353_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout353_feature_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout353" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout414_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout414_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout414_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout414_images_part_one" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout414_images_part_two" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout414" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout417_feature_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout417" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout351_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout351" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout493_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout493_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout493_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout493_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" jsonb,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout493" (
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
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout356_features_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout356_features_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout356_features_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout356_features_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"variant" "enum__pages_v_blocks_layout356_features_buttons_variant",
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout356_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"anchor_url" varchar,
  	"anchor_number" varchar,
  	"anchor_title" varchar,
  	"tagline" varchar,
  	"heading" varchar,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout356" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout486_features_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout486_features_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout486_features_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout486_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tagline" varchar,
  	"heading" varchar,
  	"description" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout486" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout488" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"left_heading" varchar,
  	"right_heading" varchar,
  	"mobile_heading" varchar,
  	"media_id" integer,
  	"description" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout352_content_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout352_content_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout352_content_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout352_items_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_layout352_items_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_layout352_items_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout352_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"date" varchar,
  	"description" jsonb,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_layout352" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"content_tagline" varchar,
  	"content_heading" varchar,
  	"content_description" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_type" "enum__pages_v_version_hero_type" DEFAULT 'none',
  	"version_hero_title" varchar,
  	"version_hero_rich_text" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "newsletter_subscribers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"email" varchar NOT NULL,
  	"confirmed" boolean DEFAULT false,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "posts_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"caption" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_square_url" varchar,
  	"sizes_square_width" numeric,
  	"sizes_square_height" numeric,
  	"sizes_square_mime_type" varchar,
  	"sizes_square_filesize" numeric,
  	"sizes_square_filename" varchar,
  	"sizes_small_url" varchar,
  	"sizes_small_width" numeric,
  	"sizes_small_height" numeric,
  	"sizes_small_mime_type" varchar,
  	"sizes_small_filesize" numeric,
  	"sizes_small_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar,
  	"sizes_xlarge_url" varchar,
  	"sizes_xlarge_width" numeric,
  	"sizes_xlarge_height" numeric,
  	"sizes_xlarge_mime_type" varchar,
  	"sizes_xlarge_filesize" numeric,
  	"sizes_xlarge_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "categories_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_checkbox" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"default_value" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_country" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_email" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_message" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"message" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_number" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_state" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_textarea" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email_to" varchar,
  	"cc" varchar,
  	"bcc" varchar,
  	"reply_to" varchar,
  	"email_from" varchar,
  	"subject" varchar DEFAULT 'You''''ve received a new message.' NOT NULL,
  	"message" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"submit_button_label" varchar,
  	"confirmation_type" "enum_forms_confirmation_type" DEFAULT 'message',
  	"confirmation_message" jsonb,
  	"redirect_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_submissions_submission_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "search_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"relation_to" varchar,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "search" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"priority" numeric,
  	"slug" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "search_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"newsletter_subscribers_id" integer,
  	"posts_id" integer,
  	"media_id" integer,
  	"categories_id" integer,
  	"users_id" integer,
  	"redirects_id" integer,
  	"forms_id" integer,
  	"form_submissions_id" integer,
  	"search_id" integer,
  	"payload_jobs_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "header_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "footer_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_hero_links" ADD CONSTRAINT "pages_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_hero_media" ADD CONSTRAINT "pages_hero_media_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_hero_media" ADD CONSTRAINT "pages_hero_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta7_links" ADD CONSTRAINT "pages_blocks_cta7_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta7"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta7" ADD CONSTRAINT "pages_blocks_cta7_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta25_links" ADD CONSTRAINT "pages_blocks_cta25_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta25"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta25" ADD CONSTRAINT "pages_blocks_cta25_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta1_links" ADD CONSTRAINT "pages_blocks_cta1_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta1"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta1" ADD CONSTRAINT "pages_blocks_cta1_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta1" ADD CONSTRAINT "pages_blocks_cta1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta37_hover_links" ADD CONSTRAINT "pages_blocks_cta37_hover_links_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta37_hover_links" ADD CONSTRAINT "pages_blocks_cta37_hover_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta37"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta37" ADD CONSTRAINT "pages_blocks_cta37_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta38_hover_links" ADD CONSTRAINT "pages_blocks_cta38_hover_links_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta38_hover_links" ADD CONSTRAINT "pages_blocks_cta38_hover_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta38"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta38" ADD CONSTRAINT "pages_blocks_cta38_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta33_links" ADD CONSTRAINT "pages_blocks_cta33_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta33"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta33_logos" ADD CONSTRAINT "pages_blocks_cta33_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta33_logos" ADD CONSTRAINT "pages_blocks_cta33_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta33"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta33" ADD CONSTRAINT "pages_blocks_cta33_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta15_links" ADD CONSTRAINT "pages_blocks_cta15_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta15"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta15" ADD CONSTRAINT "pages_blocks_cta15_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cta15" ADD CONSTRAINT "pages_blocks_cta15_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_header64" ADD CONSTRAINT "pages_blocks_header64_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_header62_links" ADD CONSTRAINT "pages_blocks_header62_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_header62"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_header62" ADD CONSTRAINT "pages_blocks_header62_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_header47_links" ADD CONSTRAINT "pages_blocks_header47_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_header47"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_header47" ADD CONSTRAINT "pages_blocks_header47_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_header50_links" ADD CONSTRAINT "pages_blocks_header50_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_header50"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_header50" ADD CONSTRAINT "pages_blocks_header50_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_header50" ADD CONSTRAINT "pages_blocks_header50_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout366_big_links" ADD CONSTRAINT "pages_blocks_layout366_big_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout366"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout366_small_links" ADD CONSTRAINT "pages_blocks_layout366_small_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout366_small"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout366_small" ADD CONSTRAINT "pages_blocks_layout366_small_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout366_small" ADD CONSTRAINT "pages_blocks_layout366_small_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout366"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout366" ADD CONSTRAINT "pages_blocks_layout366_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout366" ADD CONSTRAINT "pages_blocks_layout366_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout422_features" ADD CONSTRAINT "pages_blocks_layout422_features_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout422_features" ADD CONSTRAINT "pages_blocks_layout422_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout422"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout422" ADD CONSTRAINT "pages_blocks_layout422_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout415_links" ADD CONSTRAINT "pages_blocks_layout415_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout415"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout415_features" ADD CONSTRAINT "pages_blocks_layout415_features_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout415_features" ADD CONSTRAINT "pages_blocks_layout415_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout415"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout415" ADD CONSTRAINT "pages_blocks_layout415_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout458_links" ADD CONSTRAINT "pages_blocks_layout458_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout458"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout458_features" ADD CONSTRAINT "pages_blocks_layout458_features_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout458_features" ADD CONSTRAINT "pages_blocks_layout458_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout458"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout458" ADD CONSTRAINT "pages_blocks_layout458_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout499_links" ADD CONSTRAINT "pages_blocks_layout499_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout499"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout499_tabs" ADD CONSTRAINT "pages_blocks_layout499_tabs_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout499_tabs" ADD CONSTRAINT "pages_blocks_layout499_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout499"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout499" ADD CONSTRAINT "pages_blocks_layout499_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout38" ADD CONSTRAINT "pages_blocks_layout38_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout38" ADD CONSTRAINT "pages_blocks_layout38_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout66_features" ADD CONSTRAINT "pages_blocks_layout66_features_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout66_features" ADD CONSTRAINT "pages_blocks_layout66_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout66"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout66" ADD CONSTRAINT "pages_blocks_layout66_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout90" ADD CONSTRAINT "pages_blocks_layout90_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout90" ADD CONSTRAINT "pages_blocks_layout90_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout364_sections_links" ADD CONSTRAINT "pages_blocks_layout364_sections_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout364_sections"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout364_sections" ADD CONSTRAINT "pages_blocks_layout364_sections_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout364_sections" ADD CONSTRAINT "pages_blocks_layout364_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout364"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout364" ADD CONSTRAINT "pages_blocks_layout364_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout348_contents_links" ADD CONSTRAINT "pages_blocks_layout348_contents_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout348_contents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout348_contents" ADD CONSTRAINT "pages_blocks_layout348_contents_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout348_contents" ADD CONSTRAINT "pages_blocks_layout348_contents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout348"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout348" ADD CONSTRAINT "pages_blocks_layout348_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout349_contents_links" ADD CONSTRAINT "pages_blocks_layout349_contents_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout349_contents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout349_contents" ADD CONSTRAINT "pages_blocks_layout349_contents_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout349_contents" ADD CONSTRAINT "pages_blocks_layout349_contents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout349"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout349" ADD CONSTRAINT "pages_blocks_layout349_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout423_features_links" ADD CONSTRAINT "pages_blocks_layout423_features_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout423_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout423_features" ADD CONSTRAINT "pages_blocks_layout423_features_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout423_features" ADD CONSTRAINT "pages_blocks_layout423_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout423"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout423" ADD CONSTRAINT "pages_blocks_layout423_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout353_links" ADD CONSTRAINT "pages_blocks_layout353_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout353"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout353_feature_sections" ADD CONSTRAINT "pages_blocks_layout353_feature_sections_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout353_feature_sections" ADD CONSTRAINT "pages_blocks_layout353_feature_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout353"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout353" ADD CONSTRAINT "pages_blocks_layout353_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout414_links" ADD CONSTRAINT "pages_blocks_layout414_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout414"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout414_images_part_one" ADD CONSTRAINT "pages_blocks_layout414_images_part_one_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout414_images_part_one" ADD CONSTRAINT "pages_blocks_layout414_images_part_one_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout414"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout414_images_part_two" ADD CONSTRAINT "pages_blocks_layout414_images_part_two_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout414_images_part_two" ADD CONSTRAINT "pages_blocks_layout414_images_part_two_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout414"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout414" ADD CONSTRAINT "pages_blocks_layout414_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout417_feature_sections" ADD CONSTRAINT "pages_blocks_layout417_feature_sections_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout417_feature_sections" ADD CONSTRAINT "pages_blocks_layout417_feature_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout417"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout417" ADD CONSTRAINT "pages_blocks_layout417_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout351_features" ADD CONSTRAINT "pages_blocks_layout351_features_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout351_features" ADD CONSTRAINT "pages_blocks_layout351_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout351"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout351" ADD CONSTRAINT "pages_blocks_layout351_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout493_links" ADD CONSTRAINT "pages_blocks_layout493_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout493"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout493_tabs" ADD CONSTRAINT "pages_blocks_layout493_tabs_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout493_tabs" ADD CONSTRAINT "pages_blocks_layout493_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout493"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout493" ADD CONSTRAINT "pages_blocks_layout493_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout356_features_links" ADD CONSTRAINT "pages_blocks_layout356_features_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout356_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout356_features_buttons" ADD CONSTRAINT "pages_blocks_layout356_features_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout356_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout356_features" ADD CONSTRAINT "pages_blocks_layout356_features_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout356_features" ADD CONSTRAINT "pages_blocks_layout356_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout356"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout356" ADD CONSTRAINT "pages_blocks_layout356_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout486_features_links" ADD CONSTRAINT "pages_blocks_layout486_features_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout486_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout486_features" ADD CONSTRAINT "pages_blocks_layout486_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout486"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout486" ADD CONSTRAINT "pages_blocks_layout486_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout488" ADD CONSTRAINT "pages_blocks_layout488_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout488" ADD CONSTRAINT "pages_blocks_layout488_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout352_content_links" ADD CONSTRAINT "pages_blocks_layout352_content_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout352"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout352_items_links" ADD CONSTRAINT "pages_blocks_layout352_items_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout352_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout352_items" ADD CONSTRAINT "pages_blocks_layout352_items_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout352_items" ADD CONSTRAINT "pages_blocks_layout352_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_layout352"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_layout352" ADD CONSTRAINT "pages_blocks_layout352_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_links" ADD CONSTRAINT "_pages_v_version_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_media" ADD CONSTRAINT "_pages_v_version_hero_media_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_media" ADD CONSTRAINT "_pages_v_version_hero_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta7_links" ADD CONSTRAINT "_pages_v_blocks_cta7_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta7"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta7" ADD CONSTRAINT "_pages_v_blocks_cta7_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta25_links" ADD CONSTRAINT "_pages_v_blocks_cta25_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta25"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta25" ADD CONSTRAINT "_pages_v_blocks_cta25_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta1_links" ADD CONSTRAINT "_pages_v_blocks_cta1_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta1"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta1" ADD CONSTRAINT "_pages_v_blocks_cta1_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta1" ADD CONSTRAINT "_pages_v_blocks_cta1_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta37_hover_links" ADD CONSTRAINT "_pages_v_blocks_cta37_hover_links_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta37_hover_links" ADD CONSTRAINT "_pages_v_blocks_cta37_hover_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta37"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta37" ADD CONSTRAINT "_pages_v_blocks_cta37_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta38_hover_links" ADD CONSTRAINT "_pages_v_blocks_cta38_hover_links_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta38_hover_links" ADD CONSTRAINT "_pages_v_blocks_cta38_hover_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta38"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta38" ADD CONSTRAINT "_pages_v_blocks_cta38_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta33_links" ADD CONSTRAINT "_pages_v_blocks_cta33_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta33"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta33_logos" ADD CONSTRAINT "_pages_v_blocks_cta33_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta33_logos" ADD CONSTRAINT "_pages_v_blocks_cta33_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta33"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta33" ADD CONSTRAINT "_pages_v_blocks_cta33_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta15_links" ADD CONSTRAINT "_pages_v_blocks_cta15_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta15"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta15" ADD CONSTRAINT "_pages_v_blocks_cta15_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cta15" ADD CONSTRAINT "_pages_v_blocks_cta15_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_header64" ADD CONSTRAINT "_pages_v_blocks_header64_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_header62_links" ADD CONSTRAINT "_pages_v_blocks_header62_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_header62"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_header62" ADD CONSTRAINT "_pages_v_blocks_header62_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_header47_links" ADD CONSTRAINT "_pages_v_blocks_header47_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_header47"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_header47" ADD CONSTRAINT "_pages_v_blocks_header47_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_header50_links" ADD CONSTRAINT "_pages_v_blocks_header50_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_header50"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_header50" ADD CONSTRAINT "_pages_v_blocks_header50_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_header50" ADD CONSTRAINT "_pages_v_blocks_header50_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout366_big_links" ADD CONSTRAINT "_pages_v_blocks_layout366_big_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout366"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout366_small_links" ADD CONSTRAINT "_pages_v_blocks_layout366_small_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout366_small"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout366_small" ADD CONSTRAINT "_pages_v_blocks_layout366_small_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout366_small" ADD CONSTRAINT "_pages_v_blocks_layout366_small_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout366"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout366" ADD CONSTRAINT "_pages_v_blocks_layout366_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout366" ADD CONSTRAINT "_pages_v_blocks_layout366_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout422_features" ADD CONSTRAINT "_pages_v_blocks_layout422_features_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout422_features" ADD CONSTRAINT "_pages_v_blocks_layout422_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout422"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout422" ADD CONSTRAINT "_pages_v_blocks_layout422_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout415_links" ADD CONSTRAINT "_pages_v_blocks_layout415_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout415"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout415_features" ADD CONSTRAINT "_pages_v_blocks_layout415_features_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout415_features" ADD CONSTRAINT "_pages_v_blocks_layout415_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout415"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout415" ADD CONSTRAINT "_pages_v_blocks_layout415_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout458_links" ADD CONSTRAINT "_pages_v_blocks_layout458_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout458"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout458_features" ADD CONSTRAINT "_pages_v_blocks_layout458_features_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout458_features" ADD CONSTRAINT "_pages_v_blocks_layout458_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout458"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout458" ADD CONSTRAINT "_pages_v_blocks_layout458_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout499_links" ADD CONSTRAINT "_pages_v_blocks_layout499_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout499"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout499_tabs" ADD CONSTRAINT "_pages_v_blocks_layout499_tabs_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout499_tabs" ADD CONSTRAINT "_pages_v_blocks_layout499_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout499"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout499" ADD CONSTRAINT "_pages_v_blocks_layout499_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout38" ADD CONSTRAINT "_pages_v_blocks_layout38_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout38" ADD CONSTRAINT "_pages_v_blocks_layout38_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout66_features" ADD CONSTRAINT "_pages_v_blocks_layout66_features_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout66_features" ADD CONSTRAINT "_pages_v_blocks_layout66_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout66"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout66" ADD CONSTRAINT "_pages_v_blocks_layout66_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout90" ADD CONSTRAINT "_pages_v_blocks_layout90_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout90" ADD CONSTRAINT "_pages_v_blocks_layout90_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout364_sections_links" ADD CONSTRAINT "_pages_v_blocks_layout364_sections_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout364_sections"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout364_sections" ADD CONSTRAINT "_pages_v_blocks_layout364_sections_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout364_sections" ADD CONSTRAINT "_pages_v_blocks_layout364_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout364"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout364" ADD CONSTRAINT "_pages_v_blocks_layout364_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout348_contents_links" ADD CONSTRAINT "_pages_v_blocks_layout348_contents_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout348_contents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout348_contents" ADD CONSTRAINT "_pages_v_blocks_layout348_contents_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout348_contents" ADD CONSTRAINT "_pages_v_blocks_layout348_contents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout348"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout348" ADD CONSTRAINT "_pages_v_blocks_layout348_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout349_contents_links" ADD CONSTRAINT "_pages_v_blocks_layout349_contents_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout349_contents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout349_contents" ADD CONSTRAINT "_pages_v_blocks_layout349_contents_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout349_contents" ADD CONSTRAINT "_pages_v_blocks_layout349_contents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout349"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout349" ADD CONSTRAINT "_pages_v_blocks_layout349_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout423_features_links" ADD CONSTRAINT "_pages_v_blocks_layout423_features_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout423_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout423_features" ADD CONSTRAINT "_pages_v_blocks_layout423_features_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout423_features" ADD CONSTRAINT "_pages_v_blocks_layout423_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout423"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout423" ADD CONSTRAINT "_pages_v_blocks_layout423_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout353_links" ADD CONSTRAINT "_pages_v_blocks_layout353_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout353"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout353_feature_sections" ADD CONSTRAINT "_pages_v_blocks_layout353_feature_sections_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout353_feature_sections" ADD CONSTRAINT "_pages_v_blocks_layout353_feature_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout353"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout353" ADD CONSTRAINT "_pages_v_blocks_layout353_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout414_links" ADD CONSTRAINT "_pages_v_blocks_layout414_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout414"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout414_images_part_one" ADD CONSTRAINT "_pages_v_blocks_layout414_images_part_one_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout414_images_part_one" ADD CONSTRAINT "_pages_v_blocks_layout414_images_part_one_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout414"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout414_images_part_two" ADD CONSTRAINT "_pages_v_blocks_layout414_images_part_two_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout414_images_part_two" ADD CONSTRAINT "_pages_v_blocks_layout414_images_part_two_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout414"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout414" ADD CONSTRAINT "_pages_v_blocks_layout414_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout417_feature_sections" ADD CONSTRAINT "_pages_v_blocks_layout417_feature_sections_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout417_feature_sections" ADD CONSTRAINT "_pages_v_blocks_layout417_feature_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout417"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout417" ADD CONSTRAINT "_pages_v_blocks_layout417_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout351_features" ADD CONSTRAINT "_pages_v_blocks_layout351_features_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout351_features" ADD CONSTRAINT "_pages_v_blocks_layout351_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout351"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout351" ADD CONSTRAINT "_pages_v_blocks_layout351_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout493_links" ADD CONSTRAINT "_pages_v_blocks_layout493_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout493"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout493_tabs" ADD CONSTRAINT "_pages_v_blocks_layout493_tabs_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout493_tabs" ADD CONSTRAINT "_pages_v_blocks_layout493_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout493"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout493" ADD CONSTRAINT "_pages_v_blocks_layout493_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout356_features_links" ADD CONSTRAINT "_pages_v_blocks_layout356_features_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout356_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout356_features_buttons" ADD CONSTRAINT "_pages_v_blocks_layout356_features_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout356_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout356_features" ADD CONSTRAINT "_pages_v_blocks_layout356_features_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout356_features" ADD CONSTRAINT "_pages_v_blocks_layout356_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout356"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout356" ADD CONSTRAINT "_pages_v_blocks_layout356_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout486_features_links" ADD CONSTRAINT "_pages_v_blocks_layout486_features_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout486_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout486_features" ADD CONSTRAINT "_pages_v_blocks_layout486_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout486"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout486" ADD CONSTRAINT "_pages_v_blocks_layout486_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout488" ADD CONSTRAINT "_pages_v_blocks_layout488_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout488" ADD CONSTRAINT "_pages_v_blocks_layout488_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout352_content_links" ADD CONSTRAINT "_pages_v_blocks_layout352_content_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout352"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout352_items_links" ADD CONSTRAINT "_pages_v_blocks_layout352_items_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout352_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout352_items" ADD CONSTRAINT "_pages_v_blocks_layout352_items_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout352_items" ADD CONSTRAINT "_pages_v_blocks_layout352_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_layout352"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_layout352" ADD CONSTRAINT "_pages_v_blocks_layout352_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_populated_authors" ADD CONSTRAINT "posts_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts" ADD CONSTRAINT "posts_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts" ADD CONSTRAINT "posts_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_version_populated_authors" ADD CONSTRAINT "_posts_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_doc_id_categories_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_checkbox" ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_country" ADD CONSTRAINT "forms_blocks_country_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_email" ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_message" ADD CONSTRAINT "forms_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_number" ADD CONSTRAINT "forms_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select_options" ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_state" ADD CONSTRAINT "forms_blocks_state_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_categories" ADD CONSTRAINT "search_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search" ADD CONSTRAINT "search_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_newsletter_subscribers_fk" FOREIGN KEY ("newsletter_subscribers_id") REFERENCES "public"."newsletter_subscribers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_search_fk" FOREIGN KEY ("search_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payload_jobs_fk" FOREIGN KEY ("payload_jobs_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_nav_items" ADD CONSTRAINT "footer_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_hero_links_order_idx" ON "pages_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_hero_links_parent_id_idx" ON "pages_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_hero_media_order_idx" ON "pages_hero_media" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_hero_media_parent_id_idx" ON "pages_hero_media" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_hero_media_image_idx" ON "pages_hero_media" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta7_links_order_idx" ON "pages_blocks_cta7_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta7_links_parent_id_idx" ON "pages_blocks_cta7_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta7_order_idx" ON "pages_blocks_cta7" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta7_parent_id_idx" ON "pages_blocks_cta7" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta7_path_idx" ON "pages_blocks_cta7" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta25_links_order_idx" ON "pages_blocks_cta25_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta25_links_parent_id_idx" ON "pages_blocks_cta25_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta25_order_idx" ON "pages_blocks_cta25" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta25_parent_id_idx" ON "pages_blocks_cta25" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta25_path_idx" ON "pages_blocks_cta25" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta1_links_order_idx" ON "pages_blocks_cta1_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta1_links_parent_id_idx" ON "pages_blocks_cta1_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta1_order_idx" ON "pages_blocks_cta1" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta1_parent_id_idx" ON "pages_blocks_cta1" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta1_path_idx" ON "pages_blocks_cta1" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta1_media_idx" ON "pages_blocks_cta1" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta37_hover_links_order_idx" ON "pages_blocks_cta37_hover_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta37_hover_links_parent_id_idx" ON "pages_blocks_cta37_hover_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta37_hover_links_image_idx" ON "pages_blocks_cta37_hover_links" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta37_order_idx" ON "pages_blocks_cta37" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta37_parent_id_idx" ON "pages_blocks_cta37" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta37_path_idx" ON "pages_blocks_cta37" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta38_hover_links_order_idx" ON "pages_blocks_cta38_hover_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta38_hover_links_parent_id_idx" ON "pages_blocks_cta38_hover_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta38_hover_links_image_idx" ON "pages_blocks_cta38_hover_links" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta38_order_idx" ON "pages_blocks_cta38" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta38_parent_id_idx" ON "pages_blocks_cta38" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta38_path_idx" ON "pages_blocks_cta38" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta33_links_order_idx" ON "pages_blocks_cta33_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta33_links_parent_id_idx" ON "pages_blocks_cta33_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta33_logos_order_idx" ON "pages_blocks_cta33_logos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta33_logos_parent_id_idx" ON "pages_blocks_cta33_logos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta33_logos_image_idx" ON "pages_blocks_cta33_logos" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta33_order_idx" ON "pages_blocks_cta33" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta33_parent_id_idx" ON "pages_blocks_cta33" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta33_path_idx" ON "pages_blocks_cta33" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta15_links_order_idx" ON "pages_blocks_cta15_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta15_links_parent_id_idx" ON "pages_blocks_cta15_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta15_order_idx" ON "pages_blocks_cta15" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta15_parent_id_idx" ON "pages_blocks_cta15" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta15_path_idx" ON "pages_blocks_cta15" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta15_media_idx" ON "pages_blocks_cta15" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header64_order_idx" ON "pages_blocks_header64" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header64_parent_id_idx" ON "pages_blocks_header64" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header64_path_idx" ON "pages_blocks_header64" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header62_links_order_idx" ON "pages_blocks_header62_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header62_links_parent_id_idx" ON "pages_blocks_header62_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header62_order_idx" ON "pages_blocks_header62" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header62_parent_id_idx" ON "pages_blocks_header62" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header62_path_idx" ON "pages_blocks_header62" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header47_links_order_idx" ON "pages_blocks_header47_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header47_links_parent_id_idx" ON "pages_blocks_header47_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header47_order_idx" ON "pages_blocks_header47" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header47_parent_id_idx" ON "pages_blocks_header47" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header47_path_idx" ON "pages_blocks_header47" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header50_links_order_idx" ON "pages_blocks_header50_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header50_links_parent_id_idx" ON "pages_blocks_header50_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header50_order_idx" ON "pages_blocks_header50" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header50_parent_id_idx" ON "pages_blocks_header50" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header50_path_idx" ON "pages_blocks_header50" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_header50_media_idx" ON "pages_blocks_header50" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout366_big_links_order_idx" ON "pages_blocks_layout366_big_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout366_big_links_parent_id_idx" ON "pages_blocks_layout366_big_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout366_small_links_order_idx" ON "pages_blocks_layout366_small_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout366_small_links_parent_id_idx" ON "pages_blocks_layout366_small_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout366_small_order_idx" ON "pages_blocks_layout366_small" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout366_small_parent_id_idx" ON "pages_blocks_layout366_small" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout366_small_img_idx" ON "pages_blocks_layout366_small" USING btree ("img_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout366_order_idx" ON "pages_blocks_layout366" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout366_parent_id_idx" ON "pages_blocks_layout366" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout366_path_idx" ON "pages_blocks_layout366" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout366_img_idx" ON "pages_blocks_layout366" USING btree ("img_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout422_features_order_idx" ON "pages_blocks_layout422_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout422_features_parent_id_idx" ON "pages_blocks_layout422_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout422_features_media_idx" ON "pages_blocks_layout422_features" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout422_order_idx" ON "pages_blocks_layout422" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout422_parent_id_idx" ON "pages_blocks_layout422" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout422_path_idx" ON "pages_blocks_layout422" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout415_links_order_idx" ON "pages_blocks_layout415_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout415_links_parent_id_idx" ON "pages_blocks_layout415_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout415_features_order_idx" ON "pages_blocks_layout415_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout415_features_parent_id_idx" ON "pages_blocks_layout415_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout415_features_media_idx" ON "pages_blocks_layout415_features" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout415_order_idx" ON "pages_blocks_layout415" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout415_parent_id_idx" ON "pages_blocks_layout415" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout415_path_idx" ON "pages_blocks_layout415" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout458_links_order_idx" ON "pages_blocks_layout458_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout458_links_parent_id_idx" ON "pages_blocks_layout458_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout458_features_order_idx" ON "pages_blocks_layout458_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout458_features_parent_id_idx" ON "pages_blocks_layout458_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout458_features_media_idx" ON "pages_blocks_layout458_features" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout458_order_idx" ON "pages_blocks_layout458" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout458_parent_id_idx" ON "pages_blocks_layout458" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout458_path_idx" ON "pages_blocks_layout458" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout499_links_order_idx" ON "pages_blocks_layout499_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout499_links_parent_id_idx" ON "pages_blocks_layout499_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout499_tabs_order_idx" ON "pages_blocks_layout499_tabs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout499_tabs_parent_id_idx" ON "pages_blocks_layout499_tabs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout499_tabs_media_idx" ON "pages_blocks_layout499_tabs" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout499_order_idx" ON "pages_blocks_layout499" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout499_parent_id_idx" ON "pages_blocks_layout499" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout499_path_idx" ON "pages_blocks_layout499" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout38_order_idx" ON "pages_blocks_layout38" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout38_parent_id_idx" ON "pages_blocks_layout38" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout38_path_idx" ON "pages_blocks_layout38" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout38_media_idx" ON "pages_blocks_layout38" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout66_features_order_idx" ON "pages_blocks_layout66_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout66_features_parent_id_idx" ON "pages_blocks_layout66_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout66_features_media_idx" ON "pages_blocks_layout66_features" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout66_order_idx" ON "pages_blocks_layout66" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout66_parent_id_idx" ON "pages_blocks_layout66" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout66_path_idx" ON "pages_blocks_layout66" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout90_order_idx" ON "pages_blocks_layout90" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout90_parent_id_idx" ON "pages_blocks_layout90" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout90_path_idx" ON "pages_blocks_layout90" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout90_media_idx" ON "pages_blocks_layout90" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout364_sections_links_order_idx" ON "pages_blocks_layout364_sections_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout364_sections_links_parent_id_idx" ON "pages_blocks_layout364_sections_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout364_sections_order_idx" ON "pages_blocks_layout364_sections" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout364_sections_parent_id_idx" ON "pages_blocks_layout364_sections" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout364_sections_media_idx" ON "pages_blocks_layout364_sections" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout364_order_idx" ON "pages_blocks_layout364" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout364_parent_id_idx" ON "pages_blocks_layout364" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout364_path_idx" ON "pages_blocks_layout364" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout348_contents_links_order_idx" ON "pages_blocks_layout348_contents_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout348_contents_links_parent_id_idx" ON "pages_blocks_layout348_contents_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout348_contents_order_idx" ON "pages_blocks_layout348_contents" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout348_contents_parent_id_idx" ON "pages_blocks_layout348_contents" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout348_contents_media_idx" ON "pages_blocks_layout348_contents" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout348_order_idx" ON "pages_blocks_layout348" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout348_parent_id_idx" ON "pages_blocks_layout348" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout348_path_idx" ON "pages_blocks_layout348" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout349_contents_links_order_idx" ON "pages_blocks_layout349_contents_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout349_contents_links_parent_id_idx" ON "pages_blocks_layout349_contents_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout349_contents_order_idx" ON "pages_blocks_layout349_contents" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout349_contents_parent_id_idx" ON "pages_blocks_layout349_contents" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout349_contents_media_idx" ON "pages_blocks_layout349_contents" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout349_order_idx" ON "pages_blocks_layout349" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout349_parent_id_idx" ON "pages_blocks_layout349" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout349_path_idx" ON "pages_blocks_layout349" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout423_features_links_order_idx" ON "pages_blocks_layout423_features_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout423_features_links_parent_id_idx" ON "pages_blocks_layout423_features_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout423_features_order_idx" ON "pages_blocks_layout423_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout423_features_parent_id_idx" ON "pages_blocks_layout423_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout423_features_media_idx" ON "pages_blocks_layout423_features" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout423_order_idx" ON "pages_blocks_layout423" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout423_parent_id_idx" ON "pages_blocks_layout423" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout423_path_idx" ON "pages_blocks_layout423" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout353_links_order_idx" ON "pages_blocks_layout353_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout353_links_parent_id_idx" ON "pages_blocks_layout353_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout353_feature_sections_order_idx" ON "pages_blocks_layout353_feature_sections" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout353_feature_sections_parent_id_idx" ON "pages_blocks_layout353_feature_sections" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout353_feature_sections_media_idx" ON "pages_blocks_layout353_feature_sections" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout353_order_idx" ON "pages_blocks_layout353" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout353_parent_id_idx" ON "pages_blocks_layout353" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout353_path_idx" ON "pages_blocks_layout353" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout414_links_order_idx" ON "pages_blocks_layout414_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout414_links_parent_id_idx" ON "pages_blocks_layout414_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout414_images_part_one_order_idx" ON "pages_blocks_layout414_images_part_one" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout414_images_part_one_parent_id_idx" ON "pages_blocks_layout414_images_part_one" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout414_images_part_one_media_idx" ON "pages_blocks_layout414_images_part_one" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout414_images_part_two_order_idx" ON "pages_blocks_layout414_images_part_two" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout414_images_part_two_parent_id_idx" ON "pages_blocks_layout414_images_part_two" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout414_images_part_two_media_idx" ON "pages_blocks_layout414_images_part_two" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout414_order_idx" ON "pages_blocks_layout414" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout414_parent_id_idx" ON "pages_blocks_layout414" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout414_path_idx" ON "pages_blocks_layout414" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout417_feature_sections_order_idx" ON "pages_blocks_layout417_feature_sections" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout417_feature_sections_parent_id_idx" ON "pages_blocks_layout417_feature_sections" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout417_feature_sections_media_idx" ON "pages_blocks_layout417_feature_sections" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout417_order_idx" ON "pages_blocks_layout417" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout417_parent_id_idx" ON "pages_blocks_layout417" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout417_path_idx" ON "pages_blocks_layout417" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout351_features_order_idx" ON "pages_blocks_layout351_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout351_features_parent_id_idx" ON "pages_blocks_layout351_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout351_features_media_idx" ON "pages_blocks_layout351_features" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout351_order_idx" ON "pages_blocks_layout351" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout351_parent_id_idx" ON "pages_blocks_layout351" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout351_path_idx" ON "pages_blocks_layout351" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout493_links_order_idx" ON "pages_blocks_layout493_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout493_links_parent_id_idx" ON "pages_blocks_layout493_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout493_tabs_order_idx" ON "pages_blocks_layout493_tabs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout493_tabs_parent_id_idx" ON "pages_blocks_layout493_tabs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout493_tabs_media_idx" ON "pages_blocks_layout493_tabs" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout493_order_idx" ON "pages_blocks_layout493" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout493_parent_id_idx" ON "pages_blocks_layout493" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout493_path_idx" ON "pages_blocks_layout493" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout356_features_links_order_idx" ON "pages_blocks_layout356_features_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout356_features_links_parent_id_idx" ON "pages_blocks_layout356_features_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout356_features_buttons_order_idx" ON "pages_blocks_layout356_features_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout356_features_buttons_parent_id_idx" ON "pages_blocks_layout356_features_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout356_features_order_idx" ON "pages_blocks_layout356_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout356_features_parent_id_idx" ON "pages_blocks_layout356_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout356_features_media_idx" ON "pages_blocks_layout356_features" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout356_order_idx" ON "pages_blocks_layout356" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout356_parent_id_idx" ON "pages_blocks_layout356" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout356_path_idx" ON "pages_blocks_layout356" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout486_features_links_order_idx" ON "pages_blocks_layout486_features_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout486_features_links_parent_id_idx" ON "pages_blocks_layout486_features_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout486_features_order_idx" ON "pages_blocks_layout486_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout486_features_parent_id_idx" ON "pages_blocks_layout486_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout486_order_idx" ON "pages_blocks_layout486" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout486_parent_id_idx" ON "pages_blocks_layout486" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout486_path_idx" ON "pages_blocks_layout486" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout488_order_idx" ON "pages_blocks_layout488" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout488_parent_id_idx" ON "pages_blocks_layout488" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout488_path_idx" ON "pages_blocks_layout488" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout488_media_idx" ON "pages_blocks_layout488" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout352_content_links_order_idx" ON "pages_blocks_layout352_content_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout352_content_links_parent_id_idx" ON "pages_blocks_layout352_content_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout352_items_links_order_idx" ON "pages_blocks_layout352_items_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout352_items_links_parent_id_idx" ON "pages_blocks_layout352_items_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout352_items_order_idx" ON "pages_blocks_layout352_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout352_items_parent_id_idx" ON "pages_blocks_layout352_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout352_items_media_idx" ON "pages_blocks_layout352_items" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout352_order_idx" ON "pages_blocks_layout352" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout352_parent_id_idx" ON "pages_blocks_layout352" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_layout352_path_idx" ON "pages_blocks_layout352" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_posts_id_idx" ON "pages_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_links_order_idx" ON "_pages_v_version_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_links_parent_id_idx" ON "_pages_v_version_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_media_order_idx" ON "_pages_v_version_hero_media" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_media_parent_id_idx" ON "_pages_v_version_hero_media" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_media_image_idx" ON "_pages_v_version_hero_media" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta7_links_order_idx" ON "_pages_v_blocks_cta7_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta7_links_parent_id_idx" ON "_pages_v_blocks_cta7_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta7_order_idx" ON "_pages_v_blocks_cta7" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta7_parent_id_idx" ON "_pages_v_blocks_cta7" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta7_path_idx" ON "_pages_v_blocks_cta7" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta25_links_order_idx" ON "_pages_v_blocks_cta25_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta25_links_parent_id_idx" ON "_pages_v_blocks_cta25_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta25_order_idx" ON "_pages_v_blocks_cta25" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta25_parent_id_idx" ON "_pages_v_blocks_cta25" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta25_path_idx" ON "_pages_v_blocks_cta25" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta1_links_order_idx" ON "_pages_v_blocks_cta1_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta1_links_parent_id_idx" ON "_pages_v_blocks_cta1_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta1_order_idx" ON "_pages_v_blocks_cta1" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta1_parent_id_idx" ON "_pages_v_blocks_cta1" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta1_path_idx" ON "_pages_v_blocks_cta1" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta1_media_idx" ON "_pages_v_blocks_cta1" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta37_hover_links_order_idx" ON "_pages_v_blocks_cta37_hover_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta37_hover_links_parent_id_idx" ON "_pages_v_blocks_cta37_hover_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta37_hover_links_image_idx" ON "_pages_v_blocks_cta37_hover_links" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta37_order_idx" ON "_pages_v_blocks_cta37" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta37_parent_id_idx" ON "_pages_v_blocks_cta37" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta37_path_idx" ON "_pages_v_blocks_cta37" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta38_hover_links_order_idx" ON "_pages_v_blocks_cta38_hover_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta38_hover_links_parent_id_idx" ON "_pages_v_blocks_cta38_hover_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta38_hover_links_image_idx" ON "_pages_v_blocks_cta38_hover_links" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta38_order_idx" ON "_pages_v_blocks_cta38" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta38_parent_id_idx" ON "_pages_v_blocks_cta38" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta38_path_idx" ON "_pages_v_blocks_cta38" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta33_links_order_idx" ON "_pages_v_blocks_cta33_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta33_links_parent_id_idx" ON "_pages_v_blocks_cta33_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta33_logos_order_idx" ON "_pages_v_blocks_cta33_logos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta33_logos_parent_id_idx" ON "_pages_v_blocks_cta33_logos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta33_logos_image_idx" ON "_pages_v_blocks_cta33_logos" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta33_order_idx" ON "_pages_v_blocks_cta33" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta33_parent_id_idx" ON "_pages_v_blocks_cta33" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta33_path_idx" ON "_pages_v_blocks_cta33" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta15_links_order_idx" ON "_pages_v_blocks_cta15_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta15_links_parent_id_idx" ON "_pages_v_blocks_cta15_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta15_order_idx" ON "_pages_v_blocks_cta15" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta15_parent_id_idx" ON "_pages_v_blocks_cta15" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta15_path_idx" ON "_pages_v_blocks_cta15" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cta15_media_idx" ON "_pages_v_blocks_cta15" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header64_order_idx" ON "_pages_v_blocks_header64" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header64_parent_id_idx" ON "_pages_v_blocks_header64" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header64_path_idx" ON "_pages_v_blocks_header64" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header62_links_order_idx" ON "_pages_v_blocks_header62_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header62_links_parent_id_idx" ON "_pages_v_blocks_header62_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header62_order_idx" ON "_pages_v_blocks_header62" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header62_parent_id_idx" ON "_pages_v_blocks_header62" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header62_path_idx" ON "_pages_v_blocks_header62" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header47_links_order_idx" ON "_pages_v_blocks_header47_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header47_links_parent_id_idx" ON "_pages_v_blocks_header47_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header47_order_idx" ON "_pages_v_blocks_header47" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header47_parent_id_idx" ON "_pages_v_blocks_header47" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header47_path_idx" ON "_pages_v_blocks_header47" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header50_links_order_idx" ON "_pages_v_blocks_header50_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header50_links_parent_id_idx" ON "_pages_v_blocks_header50_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header50_order_idx" ON "_pages_v_blocks_header50" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header50_parent_id_idx" ON "_pages_v_blocks_header50" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header50_path_idx" ON "_pages_v_blocks_header50" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_header50_media_idx" ON "_pages_v_blocks_header50" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout366_big_links_order_idx" ON "_pages_v_blocks_layout366_big_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout366_big_links_parent_id_idx" ON "_pages_v_blocks_layout366_big_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout366_small_links_order_idx" ON "_pages_v_blocks_layout366_small_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout366_small_links_parent_id_idx" ON "_pages_v_blocks_layout366_small_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout366_small_order_idx" ON "_pages_v_blocks_layout366_small" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout366_small_parent_id_idx" ON "_pages_v_blocks_layout366_small" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout366_small_img_idx" ON "_pages_v_blocks_layout366_small" USING btree ("img_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout366_order_idx" ON "_pages_v_blocks_layout366" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout366_parent_id_idx" ON "_pages_v_blocks_layout366" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout366_path_idx" ON "_pages_v_blocks_layout366" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout366_img_idx" ON "_pages_v_blocks_layout366" USING btree ("img_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout422_features_order_idx" ON "_pages_v_blocks_layout422_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout422_features_parent_id_idx" ON "_pages_v_blocks_layout422_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout422_features_media_idx" ON "_pages_v_blocks_layout422_features" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout422_order_idx" ON "_pages_v_blocks_layout422" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout422_parent_id_idx" ON "_pages_v_blocks_layout422" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout422_path_idx" ON "_pages_v_blocks_layout422" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout415_links_order_idx" ON "_pages_v_blocks_layout415_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout415_links_parent_id_idx" ON "_pages_v_blocks_layout415_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout415_features_order_idx" ON "_pages_v_blocks_layout415_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout415_features_parent_id_idx" ON "_pages_v_blocks_layout415_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout415_features_media_idx" ON "_pages_v_blocks_layout415_features" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout415_order_idx" ON "_pages_v_blocks_layout415" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout415_parent_id_idx" ON "_pages_v_blocks_layout415" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout415_path_idx" ON "_pages_v_blocks_layout415" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout458_links_order_idx" ON "_pages_v_blocks_layout458_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout458_links_parent_id_idx" ON "_pages_v_blocks_layout458_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout458_features_order_idx" ON "_pages_v_blocks_layout458_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout458_features_parent_id_idx" ON "_pages_v_blocks_layout458_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout458_features_media_idx" ON "_pages_v_blocks_layout458_features" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout458_order_idx" ON "_pages_v_blocks_layout458" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout458_parent_id_idx" ON "_pages_v_blocks_layout458" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout458_path_idx" ON "_pages_v_blocks_layout458" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout499_links_order_idx" ON "_pages_v_blocks_layout499_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout499_links_parent_id_idx" ON "_pages_v_blocks_layout499_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout499_tabs_order_idx" ON "_pages_v_blocks_layout499_tabs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout499_tabs_parent_id_idx" ON "_pages_v_blocks_layout499_tabs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout499_tabs_media_idx" ON "_pages_v_blocks_layout499_tabs" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout499_order_idx" ON "_pages_v_blocks_layout499" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout499_parent_id_idx" ON "_pages_v_blocks_layout499" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout499_path_idx" ON "_pages_v_blocks_layout499" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout38_order_idx" ON "_pages_v_blocks_layout38" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout38_parent_id_idx" ON "_pages_v_blocks_layout38" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout38_path_idx" ON "_pages_v_blocks_layout38" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout38_media_idx" ON "_pages_v_blocks_layout38" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout66_features_order_idx" ON "_pages_v_blocks_layout66_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout66_features_parent_id_idx" ON "_pages_v_blocks_layout66_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout66_features_media_idx" ON "_pages_v_blocks_layout66_features" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout66_order_idx" ON "_pages_v_blocks_layout66" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout66_parent_id_idx" ON "_pages_v_blocks_layout66" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout66_path_idx" ON "_pages_v_blocks_layout66" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout90_order_idx" ON "_pages_v_blocks_layout90" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout90_parent_id_idx" ON "_pages_v_blocks_layout90" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout90_path_idx" ON "_pages_v_blocks_layout90" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout90_media_idx" ON "_pages_v_blocks_layout90" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout364_sections_links_order_idx" ON "_pages_v_blocks_layout364_sections_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout364_sections_links_parent_id_idx" ON "_pages_v_blocks_layout364_sections_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout364_sections_order_idx" ON "_pages_v_blocks_layout364_sections" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout364_sections_parent_id_idx" ON "_pages_v_blocks_layout364_sections" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout364_sections_media_idx" ON "_pages_v_blocks_layout364_sections" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout364_order_idx" ON "_pages_v_blocks_layout364" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout364_parent_id_idx" ON "_pages_v_blocks_layout364" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout364_path_idx" ON "_pages_v_blocks_layout364" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout348_contents_links_order_idx" ON "_pages_v_blocks_layout348_contents_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout348_contents_links_parent_id_idx" ON "_pages_v_blocks_layout348_contents_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout348_contents_order_idx" ON "_pages_v_blocks_layout348_contents" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout348_contents_parent_id_idx" ON "_pages_v_blocks_layout348_contents" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout348_contents_media_idx" ON "_pages_v_blocks_layout348_contents" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout348_order_idx" ON "_pages_v_blocks_layout348" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout348_parent_id_idx" ON "_pages_v_blocks_layout348" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout348_path_idx" ON "_pages_v_blocks_layout348" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout349_contents_links_order_idx" ON "_pages_v_blocks_layout349_contents_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout349_contents_links_parent_id_idx" ON "_pages_v_blocks_layout349_contents_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout349_contents_order_idx" ON "_pages_v_blocks_layout349_contents" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout349_contents_parent_id_idx" ON "_pages_v_blocks_layout349_contents" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout349_contents_media_idx" ON "_pages_v_blocks_layout349_contents" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout349_order_idx" ON "_pages_v_blocks_layout349" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout349_parent_id_idx" ON "_pages_v_blocks_layout349" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout349_path_idx" ON "_pages_v_blocks_layout349" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout423_features_links_order_idx" ON "_pages_v_blocks_layout423_features_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout423_features_links_parent_id_idx" ON "_pages_v_blocks_layout423_features_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout423_features_order_idx" ON "_pages_v_blocks_layout423_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout423_features_parent_id_idx" ON "_pages_v_blocks_layout423_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout423_features_media_idx" ON "_pages_v_blocks_layout423_features" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout423_order_idx" ON "_pages_v_blocks_layout423" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout423_parent_id_idx" ON "_pages_v_blocks_layout423" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout423_path_idx" ON "_pages_v_blocks_layout423" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout353_links_order_idx" ON "_pages_v_blocks_layout353_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout353_links_parent_id_idx" ON "_pages_v_blocks_layout353_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout353_feature_sections_order_idx" ON "_pages_v_blocks_layout353_feature_sections" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout353_feature_sections_parent_id_idx" ON "_pages_v_blocks_layout353_feature_sections" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout353_feature_sections_media_idx" ON "_pages_v_blocks_layout353_feature_sections" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout353_order_idx" ON "_pages_v_blocks_layout353" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout353_parent_id_idx" ON "_pages_v_blocks_layout353" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout353_path_idx" ON "_pages_v_blocks_layout353" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout414_links_order_idx" ON "_pages_v_blocks_layout414_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout414_links_parent_id_idx" ON "_pages_v_blocks_layout414_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout414_images_part_one_order_idx" ON "_pages_v_blocks_layout414_images_part_one" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout414_images_part_one_parent_id_idx" ON "_pages_v_blocks_layout414_images_part_one" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout414_images_part_one_media_idx" ON "_pages_v_blocks_layout414_images_part_one" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout414_images_part_two_order_idx" ON "_pages_v_blocks_layout414_images_part_two" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout414_images_part_two_parent_id_idx" ON "_pages_v_blocks_layout414_images_part_two" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout414_images_part_two_media_idx" ON "_pages_v_blocks_layout414_images_part_two" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout414_order_idx" ON "_pages_v_blocks_layout414" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout414_parent_id_idx" ON "_pages_v_blocks_layout414" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout414_path_idx" ON "_pages_v_blocks_layout414" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout417_feature_sections_order_idx" ON "_pages_v_blocks_layout417_feature_sections" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout417_feature_sections_parent_id_idx" ON "_pages_v_blocks_layout417_feature_sections" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout417_feature_sections_media_idx" ON "_pages_v_blocks_layout417_feature_sections" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout417_order_idx" ON "_pages_v_blocks_layout417" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout417_parent_id_idx" ON "_pages_v_blocks_layout417" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout417_path_idx" ON "_pages_v_blocks_layout417" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout351_features_order_idx" ON "_pages_v_blocks_layout351_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout351_features_parent_id_idx" ON "_pages_v_blocks_layout351_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout351_features_media_idx" ON "_pages_v_blocks_layout351_features" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout351_order_idx" ON "_pages_v_blocks_layout351" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout351_parent_id_idx" ON "_pages_v_blocks_layout351" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout351_path_idx" ON "_pages_v_blocks_layout351" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout493_links_order_idx" ON "_pages_v_blocks_layout493_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout493_links_parent_id_idx" ON "_pages_v_blocks_layout493_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout493_tabs_order_idx" ON "_pages_v_blocks_layout493_tabs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout493_tabs_parent_id_idx" ON "_pages_v_blocks_layout493_tabs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout493_tabs_media_idx" ON "_pages_v_blocks_layout493_tabs" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout493_order_idx" ON "_pages_v_blocks_layout493" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout493_parent_id_idx" ON "_pages_v_blocks_layout493" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout493_path_idx" ON "_pages_v_blocks_layout493" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout356_features_links_order_idx" ON "_pages_v_blocks_layout356_features_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout356_features_links_parent_id_idx" ON "_pages_v_blocks_layout356_features_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout356_features_buttons_order_idx" ON "_pages_v_blocks_layout356_features_buttons" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout356_features_buttons_parent_id_idx" ON "_pages_v_blocks_layout356_features_buttons" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout356_features_order_idx" ON "_pages_v_blocks_layout356_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout356_features_parent_id_idx" ON "_pages_v_blocks_layout356_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout356_features_media_idx" ON "_pages_v_blocks_layout356_features" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout356_order_idx" ON "_pages_v_blocks_layout356" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout356_parent_id_idx" ON "_pages_v_blocks_layout356" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout356_path_idx" ON "_pages_v_blocks_layout356" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout486_features_links_order_idx" ON "_pages_v_blocks_layout486_features_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout486_features_links_parent_id_idx" ON "_pages_v_blocks_layout486_features_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout486_features_order_idx" ON "_pages_v_blocks_layout486_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout486_features_parent_id_idx" ON "_pages_v_blocks_layout486_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout486_order_idx" ON "_pages_v_blocks_layout486" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout486_parent_id_idx" ON "_pages_v_blocks_layout486" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout486_path_idx" ON "_pages_v_blocks_layout486" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout488_order_idx" ON "_pages_v_blocks_layout488" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout488_parent_id_idx" ON "_pages_v_blocks_layout488" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout488_path_idx" ON "_pages_v_blocks_layout488" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout488_media_idx" ON "_pages_v_blocks_layout488" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout352_content_links_order_idx" ON "_pages_v_blocks_layout352_content_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout352_content_links_parent_id_idx" ON "_pages_v_blocks_layout352_content_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout352_items_links_order_idx" ON "_pages_v_blocks_layout352_items_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout352_items_links_parent_id_idx" ON "_pages_v_blocks_layout352_items_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout352_items_order_idx" ON "_pages_v_blocks_layout352_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout352_items_parent_id_idx" ON "_pages_v_blocks_layout352_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout352_items_media_idx" ON "_pages_v_blocks_layout352_items" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout352_order_idx" ON "_pages_v_blocks_layout352" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout352_parent_id_idx" ON "_pages_v_blocks_layout352" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_layout352_path_idx" ON "_pages_v_blocks_layout352" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_posts_id_idx" ON "_pages_v_rels" USING btree ("posts_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "newsletter_subscribers_email_idx" ON "newsletter_subscribers" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "newsletter_subscribers_updated_at_idx" ON "newsletter_subscribers" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "posts_populated_authors_order_idx" ON "posts_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_populated_authors_parent_id_idx" ON "posts_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_hero_image_idx" ON "posts" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "posts_meta_meta_image_idx" ON "posts" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "posts_rels_posts_id_idx" ON "posts_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_categories_id_idx" ON "posts_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_users_id_idx" ON "posts_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_populated_authors_order_idx" ON "_posts_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_populated_authors_parent_id_idx" ON "_posts_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_hero_image_idx" ON "_posts_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_posts_v_autosave_idx" ON "_posts_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_order_idx" ON "_posts_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_parent_idx" ON "_posts_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_path_idx" ON "_posts_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_posts_id_idx" ON "_posts_v_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_categories_id_idx" ON "_posts_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_users_id_idx" ON "_posts_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_square_sizes_square_filename_idx" ON "media" USING btree ("sizes_square_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_small_sizes_small_filename_idx" ON "media" USING btree ("sizes_small_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_medium_sizes_medium_filename_idx" ON "media" USING btree ("sizes_medium_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_xlarge_sizes_xlarge_filename_idx" ON "media" USING btree ("sizes_xlarge_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE INDEX IF NOT EXISTS "categories_breadcrumbs_order_idx" ON "categories_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "categories_breadcrumbs_parent_id_idx" ON "categories_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "categories_breadcrumbs_doc_idx" ON "categories_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX IF NOT EXISTS "categories_slug_idx" ON "categories" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "categories_parent_idx" ON "categories" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "categories_created_at_idx" ON "categories" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX IF NOT EXISTS "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "redirects_rels_pages_id_idx" ON "redirects_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "redirects_rels_posts_id_idx" ON "redirects_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_order_idx" ON "forms_blocks_country" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_parent_id_idx" ON "forms_blocks_country" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_path_idx" ON "forms_blocks_country" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_order_idx" ON "forms_blocks_email" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_parent_id_idx" ON "forms_blocks_email" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_path_idx" ON "forms_blocks_email" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_order_idx" ON "forms_blocks_message" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_parent_id_idx" ON "forms_blocks_message" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_path_idx" ON "forms_blocks_message" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_order_idx" ON "forms_blocks_number" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_parent_id_idx" ON "forms_blocks_number" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_path_idx" ON "forms_blocks_number" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_order_idx" ON "forms_blocks_select" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_path_idx" ON "forms_blocks_select" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_order_idx" ON "forms_blocks_state" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_parent_id_idx" ON "forms_blocks_state" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_path_idx" ON "forms_blocks_state" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_order_idx" ON "forms_blocks_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_path_idx" ON "forms_blocks_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_emails_order_idx" ON "forms_emails" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_emails_parent_id_idx" ON "forms_emails" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_updated_at_idx" ON "forms" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "search_categories_order_idx" ON "search_categories" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "search_categories_parent_id_idx" ON "search_categories" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "search_slug_idx" ON "search" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "search_meta_meta_image_idx" ON "search" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "search_updated_at_idx" ON "search" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "search_created_at_idx" ON "search" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "search_rels_order_idx" ON "search_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "search_rels_parent_idx" ON "search_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "search_rels_path_idx" ON "search_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "search_rels_posts_id_idx" ON "search_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX IF NOT EXISTS "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX IF NOT EXISTS "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX IF NOT EXISTS "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX IF NOT EXISTS "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX IF NOT EXISTS "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX IF NOT EXISTS "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX IF NOT EXISTS "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_newsletter_subscribers_id_idx" ON "payload_locked_documents_rels" USING btree ("newsletter_subscribers_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_search_id_idx" ON "payload_locked_documents_rels" USING btree ("search_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_payload_jobs_id_idx" ON "payload_locked_documents_rels" USING btree ("payload_jobs_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "header_nav_items_order_idx" ON "header_nav_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_nav_items_parent_id_idx" ON "header_nav_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "header_rels_order_idx" ON "header_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "header_rels_parent_idx" ON "header_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "header_rels_path_idx" ON "header_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "header_rels_posts_id_idx" ON "header_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "footer_nav_items_order_idx" ON "footer_nav_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_nav_items_parent_id_idx" ON "footer_nav_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "footer_rels_posts_id_idx" ON "footer_rels" USING btree ("posts_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_hero_links" CASCADE;
  DROP TABLE "pages_hero_media" CASCADE;
  DROP TABLE "pages_blocks_cta7_links" CASCADE;
  DROP TABLE "pages_blocks_cta7" CASCADE;
  DROP TABLE "pages_blocks_cta25_links" CASCADE;
  DROP TABLE "pages_blocks_cta25" CASCADE;
  DROP TABLE "pages_blocks_cta1_links" CASCADE;
  DROP TABLE "pages_blocks_cta1" CASCADE;
  DROP TABLE "pages_blocks_cta37_hover_links" CASCADE;
  DROP TABLE "pages_blocks_cta37" CASCADE;
  DROP TABLE "pages_blocks_cta38_hover_links" CASCADE;
  DROP TABLE "pages_blocks_cta38" CASCADE;
  DROP TABLE "pages_blocks_cta33_links" CASCADE;
  DROP TABLE "pages_blocks_cta33_logos" CASCADE;
  DROP TABLE "pages_blocks_cta33" CASCADE;
  DROP TABLE "pages_blocks_cta15_links" CASCADE;
  DROP TABLE "pages_blocks_cta15" CASCADE;
  DROP TABLE "pages_blocks_header64" CASCADE;
  DROP TABLE "pages_blocks_header62_links" CASCADE;
  DROP TABLE "pages_blocks_header62" CASCADE;
  DROP TABLE "pages_blocks_header47_links" CASCADE;
  DROP TABLE "pages_blocks_header47" CASCADE;
  DROP TABLE "pages_blocks_header50_links" CASCADE;
  DROP TABLE "pages_blocks_header50" CASCADE;
  DROP TABLE "pages_blocks_layout366_big_links" CASCADE;
  DROP TABLE "pages_blocks_layout366_small_links" CASCADE;
  DROP TABLE "pages_blocks_layout366_small" CASCADE;
  DROP TABLE "pages_blocks_layout366" CASCADE;
  DROP TABLE "pages_blocks_layout422_features" CASCADE;
  DROP TABLE "pages_blocks_layout422" CASCADE;
  DROP TABLE "pages_blocks_layout415_links" CASCADE;
  DROP TABLE "pages_blocks_layout415_features" CASCADE;
  DROP TABLE "pages_blocks_layout415" CASCADE;
  DROP TABLE "pages_blocks_layout458_links" CASCADE;
  DROP TABLE "pages_blocks_layout458_features" CASCADE;
  DROP TABLE "pages_blocks_layout458" CASCADE;
  DROP TABLE "pages_blocks_layout499_links" CASCADE;
  DROP TABLE "pages_blocks_layout499_tabs" CASCADE;
  DROP TABLE "pages_blocks_layout499" CASCADE;
  DROP TABLE "pages_blocks_layout38" CASCADE;
  DROP TABLE "pages_blocks_layout66_features" CASCADE;
  DROP TABLE "pages_blocks_layout66" CASCADE;
  DROP TABLE "pages_blocks_layout90" CASCADE;
  DROP TABLE "pages_blocks_layout364_sections_links" CASCADE;
  DROP TABLE "pages_blocks_layout364_sections" CASCADE;
  DROP TABLE "pages_blocks_layout364" CASCADE;
  DROP TABLE "pages_blocks_layout348_contents_links" CASCADE;
  DROP TABLE "pages_blocks_layout348_contents" CASCADE;
  DROP TABLE "pages_blocks_layout348" CASCADE;
  DROP TABLE "pages_blocks_layout349_contents_links" CASCADE;
  DROP TABLE "pages_blocks_layout349_contents" CASCADE;
  DROP TABLE "pages_blocks_layout349" CASCADE;
  DROP TABLE "pages_blocks_layout423_features_links" CASCADE;
  DROP TABLE "pages_blocks_layout423_features" CASCADE;
  DROP TABLE "pages_blocks_layout423" CASCADE;
  DROP TABLE "pages_blocks_layout353_links" CASCADE;
  DROP TABLE "pages_blocks_layout353_feature_sections" CASCADE;
  DROP TABLE "pages_blocks_layout353" CASCADE;
  DROP TABLE "pages_blocks_layout414_links" CASCADE;
  DROP TABLE "pages_blocks_layout414_images_part_one" CASCADE;
  DROP TABLE "pages_blocks_layout414_images_part_two" CASCADE;
  DROP TABLE "pages_blocks_layout414" CASCADE;
  DROP TABLE "pages_blocks_layout417_feature_sections" CASCADE;
  DROP TABLE "pages_blocks_layout417" CASCADE;
  DROP TABLE "pages_blocks_layout351_features" CASCADE;
  DROP TABLE "pages_blocks_layout351" CASCADE;
  DROP TABLE "pages_blocks_layout493_links" CASCADE;
  DROP TABLE "pages_blocks_layout493_tabs" CASCADE;
  DROP TABLE "pages_blocks_layout493" CASCADE;
  DROP TABLE "pages_blocks_layout356_features_links" CASCADE;
  DROP TABLE "pages_blocks_layout356_features_buttons" CASCADE;
  DROP TABLE "pages_blocks_layout356_features" CASCADE;
  DROP TABLE "pages_blocks_layout356" CASCADE;
  DROP TABLE "pages_blocks_layout486_features_links" CASCADE;
  DROP TABLE "pages_blocks_layout486_features" CASCADE;
  DROP TABLE "pages_blocks_layout486" CASCADE;
  DROP TABLE "pages_blocks_layout488" CASCADE;
  DROP TABLE "pages_blocks_layout352_content_links" CASCADE;
  DROP TABLE "pages_blocks_layout352_items_links" CASCADE;
  DROP TABLE "pages_blocks_layout352_items" CASCADE;
  DROP TABLE "pages_blocks_layout352" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_version_hero_links" CASCADE;
  DROP TABLE "_pages_v_version_hero_media" CASCADE;
  DROP TABLE "_pages_v_blocks_cta7_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta7" CASCADE;
  DROP TABLE "_pages_v_blocks_cta25_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta25" CASCADE;
  DROP TABLE "_pages_v_blocks_cta1_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta1" CASCADE;
  DROP TABLE "_pages_v_blocks_cta37_hover_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta37" CASCADE;
  DROP TABLE "_pages_v_blocks_cta38_hover_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta38" CASCADE;
  DROP TABLE "_pages_v_blocks_cta33_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta33_logos" CASCADE;
  DROP TABLE "_pages_v_blocks_cta33" CASCADE;
  DROP TABLE "_pages_v_blocks_cta15_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta15" CASCADE;
  DROP TABLE "_pages_v_blocks_header64" CASCADE;
  DROP TABLE "_pages_v_blocks_header62_links" CASCADE;
  DROP TABLE "_pages_v_blocks_header62" CASCADE;
  DROP TABLE "_pages_v_blocks_header47_links" CASCADE;
  DROP TABLE "_pages_v_blocks_header47" CASCADE;
  DROP TABLE "_pages_v_blocks_header50_links" CASCADE;
  DROP TABLE "_pages_v_blocks_header50" CASCADE;
  DROP TABLE "_pages_v_blocks_layout366_big_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout366_small_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout366_small" CASCADE;
  DROP TABLE "_pages_v_blocks_layout366" CASCADE;
  DROP TABLE "_pages_v_blocks_layout422_features" CASCADE;
  DROP TABLE "_pages_v_blocks_layout422" CASCADE;
  DROP TABLE "_pages_v_blocks_layout415_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout415_features" CASCADE;
  DROP TABLE "_pages_v_blocks_layout415" CASCADE;
  DROP TABLE "_pages_v_blocks_layout458_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout458_features" CASCADE;
  DROP TABLE "_pages_v_blocks_layout458" CASCADE;
  DROP TABLE "_pages_v_blocks_layout499_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout499_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_layout499" CASCADE;
  DROP TABLE "_pages_v_blocks_layout38" CASCADE;
  DROP TABLE "_pages_v_blocks_layout66_features" CASCADE;
  DROP TABLE "_pages_v_blocks_layout66" CASCADE;
  DROP TABLE "_pages_v_blocks_layout90" CASCADE;
  DROP TABLE "_pages_v_blocks_layout364_sections_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout364_sections" CASCADE;
  DROP TABLE "_pages_v_blocks_layout364" CASCADE;
  DROP TABLE "_pages_v_blocks_layout348_contents_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout348_contents" CASCADE;
  DROP TABLE "_pages_v_blocks_layout348" CASCADE;
  DROP TABLE "_pages_v_blocks_layout349_contents_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout349_contents" CASCADE;
  DROP TABLE "_pages_v_blocks_layout349" CASCADE;
  DROP TABLE "_pages_v_blocks_layout423_features_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout423_features" CASCADE;
  DROP TABLE "_pages_v_blocks_layout423" CASCADE;
  DROP TABLE "_pages_v_blocks_layout353_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout353_feature_sections" CASCADE;
  DROP TABLE "_pages_v_blocks_layout353" CASCADE;
  DROP TABLE "_pages_v_blocks_layout414_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout414_images_part_one" CASCADE;
  DROP TABLE "_pages_v_blocks_layout414_images_part_two" CASCADE;
  DROP TABLE "_pages_v_blocks_layout414" CASCADE;
  DROP TABLE "_pages_v_blocks_layout417_feature_sections" CASCADE;
  DROP TABLE "_pages_v_blocks_layout417" CASCADE;
  DROP TABLE "_pages_v_blocks_layout351_features" CASCADE;
  DROP TABLE "_pages_v_blocks_layout351" CASCADE;
  DROP TABLE "_pages_v_blocks_layout493_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout493_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_layout493" CASCADE;
  DROP TABLE "_pages_v_blocks_layout356_features_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout356_features_buttons" CASCADE;
  DROP TABLE "_pages_v_blocks_layout356_features" CASCADE;
  DROP TABLE "_pages_v_blocks_layout356" CASCADE;
  DROP TABLE "_pages_v_blocks_layout486_features_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout486_features" CASCADE;
  DROP TABLE "_pages_v_blocks_layout486" CASCADE;
  DROP TABLE "_pages_v_blocks_layout488" CASCADE;
  DROP TABLE "_pages_v_blocks_layout352_content_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout352_items_links" CASCADE;
  DROP TABLE "_pages_v_blocks_layout352_items" CASCADE;
  DROP TABLE "_pages_v_blocks_layout352" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "newsletter_subscribers" CASCADE;
  DROP TABLE "posts_populated_authors" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "posts_rels" CASCADE;
  DROP TABLE "_posts_v_version_populated_authors" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "_posts_v_rels" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "categories_breadcrumbs" CASCADE;
  DROP TABLE "categories" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "forms_blocks_checkbox" CASCADE;
  DROP TABLE "forms_blocks_country" CASCADE;
  DROP TABLE "forms_blocks_email" CASCADE;
  DROP TABLE "forms_blocks_message" CASCADE;
  DROP TABLE "forms_blocks_number" CASCADE;
  DROP TABLE "forms_blocks_select_options" CASCADE;
  DROP TABLE "forms_blocks_select" CASCADE;
  DROP TABLE "forms_blocks_state" CASCADE;
  DROP TABLE "forms_blocks_text" CASCADE;
  DROP TABLE "forms_blocks_textarea" CASCADE;
  DROP TABLE "forms_emails" CASCADE;
  DROP TABLE "forms" CASCADE;
  DROP TABLE "form_submissions_submission_data" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "search_categories" CASCADE;
  DROP TABLE "search" CASCADE;
  DROP TABLE "search_rels" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "header_nav_items" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_rels" CASCADE;
  DROP TABLE "footer_nav_items" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TYPE "public"."enum_pages_hero_links_link_type";
  DROP TYPE "public"."enum_pages_hero_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_cta7_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta7_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_cta25_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta25_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_cta1_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta1_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_cta33_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta33_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_cta15_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta15_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_header62_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_header62_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_header47_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_header47_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_header50_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_header50_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout366_big_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout366_big_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout366_small_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout366_small_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout415_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout415_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout458_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout458_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout499_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout499_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout364_sections_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout364_sections_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout348_contents_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout348_contents_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout349_contents_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout349_contents_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout423_features_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout423_features_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout353_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout353_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout414_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout414_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout493_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout493_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout356_features_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout356_features_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout356_features_buttons_variant";
  DROP TYPE "public"."enum_pages_blocks_layout486_features_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout486_features_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout352_content_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout352_content_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_layout352_items_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_layout352_items_links_link_appearance";
  DROP TYPE "public"."enum_pages_hero_type";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_type";
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_cta7_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta7_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_cta25_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta25_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta1_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_cta33_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta33_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_cta15_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta15_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_header62_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_header62_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_header47_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_header47_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_header50_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_header50_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout366_big_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout366_big_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout366_small_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout366_small_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout415_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout415_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout458_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout458_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout499_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout499_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout364_sections_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout364_sections_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout348_contents_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout348_contents_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout349_contents_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout349_contents_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout423_features_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout423_features_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout353_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout353_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout414_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout414_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout493_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout493_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout356_features_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout356_features_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout356_features_buttons_variant";
  DROP TYPE "public"."enum__pages_v_blocks_layout486_features_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout486_features_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout352_content_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout352_content_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_layout352_items_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_layout352_items_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_forms_confirmation_type";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_header_nav_items_link_type";
  DROP TYPE "public"."enum_footer_nav_items_link_type";`)
}

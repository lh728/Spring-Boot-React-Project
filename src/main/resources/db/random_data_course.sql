/*
 Navicat Premium Data Transfer

 Source Server         : postgreSQL
 Source Server Type    : PostgreSQL
 Source Server Version : 160000 (160000)
 Source Host           : 192.168.56.10:5432
 Source Catalog        : student
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 160000 (160000)
 File Encoding         : 65001

 Date: 14/12/2023 19:51:35
*/


-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS "public"."course";
CREATE TABLE "public"."course" (
                                   "course_id" uuid NOT NULL,
                                   "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
                                   "description" text COLLATE "pg_catalog"."default" NOT NULL,
                                   "department" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
                                   "teacher_name" varchar(100) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of course
-- ----------------------------
INSERT INTO "public"."course" VALUES ('6271d1ac-e178-4d85-a969-085d9405d9b4', 'Database Fundamentals', 'TODO', 'Computer Science', NULL);
INSERT INTO "public"."course" VALUES ('c86cfe74-a9ff-4e5e-b843-a29ce16ffa6e', 'Spring Boot and React', 'TODO', 'Computer Science', NULL);

-- ----------------------------
-- Uniques structure for table course
-- ----------------------------
ALTER TABLE "public"."course" ADD CONSTRAINT "course_name_key" UNIQUE ("name");

-- ----------------------------
-- Primary Key structure for table course
-- ----------------------------
ALTER TABLE "public"."course" ADD CONSTRAINT "course_pkey" PRIMARY KEY ("course_id");

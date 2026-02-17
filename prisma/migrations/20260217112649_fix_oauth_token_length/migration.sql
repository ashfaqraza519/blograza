/*
  Warnings:

  - You are about to drop the column `session_state` on the `account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `account` DROP COLUMN `session_state`,
    MODIFY `refresh_token` TEXT NULL,
    MODIFY `access_token` TEXT NULL,
    MODIFY `scope` TEXT NULL,
    MODIFY `id_token` TEXT NULL;

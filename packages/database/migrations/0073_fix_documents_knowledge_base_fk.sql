-- Canonical corrective migration for documents.knowledge_base_id.
-- Historical migrations 0065/0066 are preserved as originally shipped.
-- This migration normalizes every deployed state to ON DELETE SET NULL.
DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'documents'
      AND column_name = 'knowledge_base_id'
  ) THEN
    ALTER TABLE "documents" DROP CONSTRAINT IF EXISTS "documents_knowledge_base_id_knowledge_bases_id_fk";
    ALTER TABLE "documents"
      ADD CONSTRAINT "documents_knowledge_base_id_knowledge_bases_id_fk"
      FOREIGN KEY ("knowledge_base_id")
      REFERENCES "public"."knowledge_bases"("id")
      ON DELETE set null
      ON UPDATE no action;
  END IF;
END $$;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "documents_knowledge_base_id_idx" ON "documents" USING btree ("knowledge_base_id");

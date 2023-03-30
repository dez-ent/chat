import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://lsvtgdrajdhdwxzdxrxy.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzdnRnZHJhamRoZHd4emR4cnh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAyMTQ2MDAsImV4cCI6MTk5NTc5MDYwMH0.sg5nK3ObYazE741Czx5nurFqOu9R0YDupmpeWhPtj1U"

export const supabase = createClient(supabaseUrl, supabaseKey)
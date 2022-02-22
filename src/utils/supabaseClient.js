import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://xcjdvxvhakmazsjywhok.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjamR2eHZoYWttYXpzanl3aG9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDU0NzQxMzYsImV4cCI6MTk2MTA1MDEzNn0.JnctrHRA0uibXCIaN_s-VdXuxCHxBDCsgIzOblakDok"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
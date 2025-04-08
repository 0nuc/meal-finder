// lib/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vpvgeexnwgtkuovlknlt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwdmdlZXhud2d0a3Vvdmxrbmx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0OTI3NTQsImV4cCI6MjA1OTA2ODc1NH0.lZ1mH7w_BCaBkmPk8AP0tN80tzNVelXvjjtF1ZUZdGs'

export const supabase = createClient(supabaseUrl, supabaseKey)


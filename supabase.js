// supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://txjdflhtrowtagbzdtwe.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4amRmbGh0cm93dGFnYnpkdHdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgwMDAxMDksImV4cCI6MjAzMzU3NjEwOX0.OVpcAq-6IaMPucaLE7wK_CxVUe5m1HJEr-hlW5K30zU'
export const supabase = createClient(supabaseUrl, supabaseKey)

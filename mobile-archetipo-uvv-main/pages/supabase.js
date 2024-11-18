import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rmffolzapgrjzcvdryhq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtZmZvbHphcGdyanpjdmRyeWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwOTUwNzksImV4cCI6MjA0MjY3MTA3OX0.lez3iro1Gzcl2qWgW64KVwAOROemyq8eOMBnzpx28Hw';
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ygenkuhafaojlpqzlhcb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnZW5rdWhhZmFvamxwcXpsaGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIwNzg1ODcsImV4cCI6MjAxNzY1NDU4N30.9OS53h6VHgZJuypIHnT3CmcVhZW_yI3hQ3IInohEtnI";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

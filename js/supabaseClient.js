const SUPABASE_URL = "https://leceithebntgxauivrdf.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlY2VpdGhlYm50Z3hhdWl2cmRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNjkzNTgsImV4cCI6MjA4ODc0NTM1OH0.R3n8Gj6EpZ-7SnbcvfzoCdKgmkAWlFetEyUBsNjg2ns";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

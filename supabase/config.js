import { createClient } from "@supabase/supabase-js";

const supaurl = "https://dgdnacgzsdxaxbcnkahj.supabase.co";
const supaanon =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnZG5hY2d6c2R4YXhiY25rYWhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAzMjk5OTgsImV4cCI6MjAxNTkwNTk5OH0.gWE8LiHcUeP3DRf69rH1IsMAn2bmiuqf1fp8PB3Su-I";
// Create a single supabase client for interacting with your database
const supabase = createClient(supaurl, supaanon);
export default supabase;

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lolstiyjiuwnqdvfzlip.supabase.co";

const supabaseKey = "sb_publishable_QM8H1HjoSirutnBNuoFkUw_TPbIN5Mt";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
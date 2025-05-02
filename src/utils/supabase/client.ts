import { checkEnvVariables } from "./common";
import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

const { url, key } = checkEnvVariables({ useServiceKey: false });

export function createDynamicClient(): SupabaseClient<any, "public", any> {
  return createBrowserClient(url, key);
}

export function createClient(): SupabaseClient<any, "public", any> {
  return createBrowserClient<any>(url, key);
}

export type { SupabaseClient };

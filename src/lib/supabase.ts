import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';

// Crea un cliente de Supabase con las variables de entorno
export const supabase = createClient<Database>(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);

// Cliente con privilegios de servicio para operaciones admin
// (solo usar en API segura del lado del servidor, nunca en el cliente)
export const supabaseAdmin = createClient<Database>(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.SUPABASE_SERVICE_ROLE_KEY
);

// Función de ayuda para gestionar errores de Supabase
export function handleSupabaseError(error: unknown): string {
  console.error('Supabase error:', error);
  if (typeof error === 'object' && error !== null && 'message' in error) {
    return (error as Error).message;
  }
  return 'Ha ocurrido un error desconocido';
}
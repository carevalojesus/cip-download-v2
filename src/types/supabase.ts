export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      persona: {
        Row: {
          id: string
          nombres: string
          apellidos: string
          dni: string | null
          correo: string | null
          telefono: string | null
          fecha_registro: string
        }
        Insert: {
          id?: string
          nombres: string
          apellidos: string
          dni?: string | null
          correo?: string | null
          telefono?: string | null
          fecha_registro?: string
        }
        Update: {
          id?: string
          nombres?: string
          apellidos?: string
          dni?: string | null
          correo?: string | null
          telefono?: string | null
          fecha_registro?: string
        }
      }
      consejos_departamentales: {
        Row: {
          id: string
          nombre: string
          ubicacion: string | null
          fecha_creacion: string
        }
        Insert: {
          id?: string
          nombre: string
          ubicacion?: string | null
          fecha_creacion?: string
        }
        Update: {
          id?: string
          nombre?: string
          ubicacion?: string | null
          fecha_creacion?: string
        }
      }
      capitulos: {
        Row: {
          id: string
          nombre: string
          consejo_id: string
          fecha_creacion: string
        }
        Insert: {
          id?: string
          nombre: string
          consejo_id: string
          fecha_creacion?: string
        }
        Update: {
          id?: string
          nombre?: string
          consejo_id?: string
          fecha_creacion?: string
        }
      }
      especialidades: {
        Row: {
          id: string
          nombre: string
          capitulo_id: string
          fecha_creacion: string
        }
        Insert: {
          id?: string
          nombre: string
          capitulo_id: string
          fecha_creacion?: string
        }
        Update: {
          id?: string
          nombre?: string
          capitulo_id?: string
          fecha_creacion?: string
        }
      }
      miembro: {
        Row: {
          id: string
          persona_id: string
          cip: string
          capitulo_id: string
          especialidad_id: string | null
          consejo_id: string | null
          fecha_colegiatura: string | null
        }
        Insert: {
          id?: string
          persona_id: string
          cip: string
          capitulo_id: string
          especialidad_id?: string | null
          consejo_id?: string | null
          fecha_colegiatura?: string | null
        }
        Update: {
          id?: string
          persona_id?: string
          cip?: string
          capitulo_id?: string
          especialidad_id?: string | null
          consejo_id?: string | null
          fecha_colegiatura?: string | null
        }
      }
      instituciones_externas: {
        Row: {
          id: string
          nombre: string
          ruc: string | null
          contacto: string | null
        }
        Insert: {
          id?: string
          nombre: string
          ruc?: string | null
          contacto?: string | null
        }
        Update: {
          id?: string
          nombre?: string
          ruc?: string | null
          contacto?: string | null
        }
      }
      cargos: {
        Row: {
          id: string
          nombre: string
          nivel: 'departamental' | 'capitulo'
        }
        Insert: {
          id?: string
          nombre: string
          nivel: 'departamental' | 'capitulo'
        }
        Update: {
          id?: string
          nombre?: string
          nivel?: 'departamental' | 'capitulo'
        }
      }
      // Continuar con el resto de tablas según el esquema SQL...
      // Este es un ejemplo simplificado, deberías completar todas las tablas
    }
    Enums: {
      modalidad_evento: 'presencial' | 'virtual' | 'mixto'
      nivel_cargo: 'departamental' | 'capitulo'
    }
    Functions: {}
  }
}
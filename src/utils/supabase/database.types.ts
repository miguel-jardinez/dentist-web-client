export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      address: {
        Row: {
          city: string | null
          created_at: string
          exterior_number: number | null
          full_address: string | null
          id: string
          interior_number: number | null
          neighborhood: string | null
          phone_number: string | null
          postal_code: string | null
          profile_id: string | null
          street_line_1: string | null
          street_line_2: string | null
        }
        Insert: {
          city?: string | null
          created_at?: string
          exterior_number?: number | null
          full_address?: string | null
          id?: string
          interior_number?: number | null
          neighborhood?: string | null
          phone_number?: string | null
          postal_code?: string | null
          profile_id?: string | null
          street_line_1?: string | null
          street_line_2?: string | null
        }
        Update: {
          city?: string | null
          created_at?: string
          exterior_number?: number | null
          full_address?: string | null
          id?: string
          interior_number?: number | null
          neighborhood?: string | null
          phone_number?: string | null
          postal_code?: string | null
          profile_id?: string | null
          street_line_1?: string | null
          street_line_2?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_address_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
        ]
      }
      adult_teeth: {
        Row: {
          code_teeth: string | null
          created_at: string
          id: string
          name_teeth: string | null
          type_teeth: Database["public"]["Enums"]["tooth_type_enum"] | null
        }
        Insert: {
          code_teeth?: string | null
          created_at?: string
          id?: string
          name_teeth?: string | null
          type_teeth?: Database["public"]["Enums"]["tooth_type_enum"] | null
        }
        Update: {
          code_teeth?: string | null
          created_at?: string
          id?: string
          name_teeth?: string | null
          type_teeth?: Database["public"]["Enums"]["tooth_type_enum"] | null
        }
        Relationships: []
      }
      appointment: {
        Row: {
          appoinment_state:
            | Database["public"]["Enums"]["appointment_state_enum"]
            | null
          created_at: string
          id: string
          payment_id: string | null
          profile_id: string | null
        }
        Insert: {
          appoinment_state?:
            | Database["public"]["Enums"]["appointment_state_enum"]
            | null
          created_at?: string
          id?: string
          payment_id?: string | null
          profile_id?: string | null
        }
        Update: {
          appoinment_state?:
            | Database["public"]["Enums"]["appointment_state_enum"]
            | null
          created_at?: string
          id?: string
          payment_id?: string | null
          profile_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_appointment_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payment"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_appointment_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
        ]
      }
      blog: {
        Row: {
          author_id: string | null
          content: string | null
          created_at: string
          description: string | null
          id: string
          published: boolean | null
          slug: string | null
          title: string | null
        }
        Insert: {
          author_id?: string | null
          content?: string | null
          created_at?: string
          description?: string | null
          id?: string
          published?: boolean | null
          slug?: string | null
          title?: string | null
        }
        Update: {
          author_id?: string | null
          content?: string | null
          created_at?: string
          description?: string | null
          id?: string
          published?: boolean | null
          slug?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_post_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
        ]
      }
      carousel: {
        Row: {
          call_to_action: string | null
          created_at: string
          id: string
          page_id: string | null
          subtitle: string | null
          title: string | null
        }
        Insert: {
          call_to_action?: string | null
          created_at?: string
          id?: string
          page_id?: string | null
          subtitle?: string | null
          title?: string | null
        }
        Update: {
          call_to_action?: string | null
          created_at?: string
          id?: string
          page_id?: string | null
          subtitle?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_carousel_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "page"
            referencedColumns: ["id"]
          },
        ]
      }
      category: {
        Row: {
          category: string | null
          created_at: string
          id: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          id?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          id?: string
        }
        Relationships: []
      }
      comments: {
        Row: {
          content: string | null
          created_at: string
          id: string
          post_id: string | null
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          post_id?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          post_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "blog"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
        ]
      }
      customer: {
        Row: {
          created_at: string
          id: string
          last_name: string | null
          name: string | null
          phone_number: string | null
          profile_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          last_name?: string | null
          name?: string | null
          phone_number?: string | null
          profile_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          last_name?: string | null
          name?: string | null
          phone_number?: string | null
          profile_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_customer_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
        ]
      }
      dentist: {
        Row: {
          created_at: string
          id: string
          last_name: string | null
          name: string | null
          phone_number: string | null
          profile_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          last_name?: string | null
          name?: string | null
          phone_number?: string | null
          profile_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          last_name?: string | null
          name?: string | null
          phone_number?: string | null
          profile_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_dentist_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
        ]
      }
      emercency_contact: {
        Row: {
          created_at: string
          customer_id: string | null
          display_name: string | null
          email: string | null
          id: string
          last_name: string | null
          name: string | null
          phone_number: string | null
          relationship: string | null
        }
        Insert: {
          created_at?: string
          customer_id?: string | null
          display_name?: string | null
          email?: string | null
          id?: string
          last_name?: string | null
          name?: string | null
          phone_number?: string | null
          relationship?: string | null
        }
        Update: {
          created_at?: string
          customer_id?: string | null
          display_name?: string | null
          email?: string | null
          id?: string
          last_name?: string | null
          name?: string | null
          phone_number?: string | null
          relationship?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_emercency_contact_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customer"
            referencedColumns: ["id"]
          },
        ]
      }
      familiar_clinic_history: {
        Row: {
          created_at: string
          customer_id: string | null
          id: string
          relative_has_cancer: boolean | null
          relative_has_diabetes: boolean | null
          relative_with_cancer_relation: string | null
          relative_with_diabetes: string | null
        }
        Insert: {
          created_at?: string
          customer_id?: string | null
          id?: string
          relative_has_cancer?: boolean | null
          relative_has_diabetes?: boolean | null
          relative_with_cancer_relation?: string | null
          relative_with_diabetes?: string | null
        }
        Update: {
          created_at?: string
          customer_id?: string | null
          id?: string
          relative_has_cancer?: boolean | null
          relative_has_diabetes?: boolean | null
          relative_with_cancer_relation?: string | null
          relative_with_diabetes?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_familiar_clinic_history_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customer"
            referencedColumns: ["id"]
          },
        ]
      }
      feature_flag: {
        Row: {
          active: boolean | null
          created_at: string
          id: string
          name: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string
          id?: string
          name?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      label: {
        Row: {
          created_at: string
          id: string
          label: string | null
          label_id: string | null
          page_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          label?: string | null
          label_id?: string | null
          page_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          label?: string | null
          label_id?: string | null
          page_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_label_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "page"
            referencedColumns: ["id"]
          },
        ]
      }
      page: {
        Row: {
          created_at: string
          id: string
          page_id: string | null
          page_name: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          page_id?: string | null
          page_name?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          page_id?: string | null
          page_name?: string | null
        }
        Relationships: []
      }
      payment: {
        Row: {
          amount: number | null
          billing_address: string | null
          created_at: string
          currency: string | null
          customer_id: string | null
          first_six: string | null
          id: string
          last_four: string | null
          paymenth_method: string | null
        }
        Insert: {
          amount?: number | null
          billing_address?: string | null
          created_at?: string
          currency?: string | null
          customer_id?: string | null
          first_six?: string | null
          id?: string
          last_four?: string | null
          paymenth_method?: string | null
        }
        Update: {
          amount?: number | null
          billing_address?: string | null
          created_at?: string
          currency?: string | null
          customer_id?: string | null
          first_six?: string | null
          id?: string
          last_four?: string | null
          paymenth_method?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_payment_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customer"
            referencedColumns: ["id"]
          },
        ]
      }
      personal_clinic_history: {
        Row: {
          cancer_type: string | null
          created_at: string
          customer_id: string | null
          diabetes_type: string | null
          has_cancer: boolean | null
          has_diabetes: boolean | null
          hearth_diseases: boolean | null
          id: string
          kidney_diseases: boolean | null
        }
        Insert: {
          cancer_type?: string | null
          created_at?: string
          customer_id?: string | null
          diabetes_type?: string | null
          has_cancer?: boolean | null
          has_diabetes?: boolean | null
          hearth_diseases?: boolean | null
          id?: string
          kidney_diseases?: boolean | null
        }
        Update: {
          cancer_type?: string | null
          created_at?: string
          customer_id?: string | null
          diabetes_type?: string | null
          has_cancer?: boolean | null
          has_diabetes?: boolean | null
          hearth_diseases?: boolean | null
          id?: string
          kidney_diseases?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "public_personal_clinic_history_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customer"
            referencedColumns: ["id"]
          },
        ]
      }
      profile: {
        Row: {
          created_at: string
          email: string | null
          id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
        }
        Relationships: []
      }
      role_permissions: {
        Row: {
          created_at: string
          id: string
          permission: Database["public"]["Enums"]["role_permission"] | null
          role: Database["public"]["Enums"]["role_enum"] | null
        }
        Insert: {
          created_at?: string
          id?: string
          permission?: Database["public"]["Enums"]["role_permission"] | null
          role?: Database["public"]["Enums"]["role_enum"] | null
        }
        Update: {
          created_at?: string
          id?: string
          permission?: Database["public"]["Enums"]["role_permission"] | null
          role?: Database["public"]["Enums"]["role_enum"] | null
        }
        Relationships: []
      }
      service: {
        Row: {
          amount: number | null
          created_at: string
          currency: string | null
          customer_id: string | null
          dentist_id: string | null
          id: string
        }
        Insert: {
          amount?: number | null
          created_at?: string
          currency?: string | null
          customer_id?: string | null
          dentist_id?: string | null
          id?: string
        }
        Update: {
          amount?: number | null
          created_at?: string
          currency?: string | null
          customer_id?: string | null
          dentist_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_service_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customer"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_service_dentist_id_fkey"
            columns: ["dentist_id"]
            isOneToOne: false
            referencedRelation: "dentist"
            referencedColumns: ["id"]
          },
        ]
      }
      service_line: {
        Row: {
          amount: number | null
          created_at: string
          currency: string | null
          customer_id: string | null
          dentist_id: string | null
          description: string | null
          id: string
          name: string | null
          service_id: string | null
          teeth_id: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          currency?: string | null
          customer_id?: string | null
          dentist_id?: string | null
          description?: string | null
          id?: string
          name?: string | null
          service_id?: string | null
          teeth_id?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          currency?: string | null
          customer_id?: string | null
          dentist_id?: string | null
          description?: string | null
          id?: string
          name?: string | null
          service_id?: string | null
          teeth_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_service_line_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customer"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_service_line_dentist_id_fkey"
            columns: ["dentist_id"]
            isOneToOne: false
            referencedRelation: "dentist"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_service_line_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "service"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_service_line_teeth_id_fkey"
            columns: ["teeth_id"]
            isOneToOne: false
            referencedRelation: "adult_teeth"
            referencedColumns: ["id"]
          },
        ]
      }
      tags: {
        Row: {
          created_at: string
          id: string
          tag: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          tag?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          tag?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          profile_id: string | null
          role: Database["public"]["Enums"]["role_enum"] | null
        }
        Insert: {
          created_at?: string
          id?: string
          profile_id?: string | null
          role?: Database["public"]["Enums"]["role_enum"] | null
        }
        Update: {
          created_at?: string
          id?: string
          profile_id?: string | null
          role?: Database["public"]["Enums"]["role_enum"] | null
        }
        Relationships: [
          {
            foreignKeyName: "public_user_role_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      authorize: {
        Args: {
          requested_permission: Database["public"]["Enums"]["role_permission"]
        }
        Returns: boolean
      }
      custom_access_token_hook: {
        Args: {
          event: Json
        }
        Returns: Json
      }
    }
    Enums: {
      appointment_state_enum: "SCHEDULED" | "CANCELED" | "REFOUND" | "FINISHED"
      role_enum: "DENTIST" | "CUSTOMER" | "ADMINISTRATOR" | "PUBLISHER"
      role_permission:
        | "post.create"
        | "post.delete"
        | "post.update"
        | "category.read"
        | "category.create"
        | "category.update"
        | "category.delete"
        | "tag.read"
        | "tag.update"
        | "tag.create"
        | "tag.delete"
      tooth_type_enum: "INCISORS" | "CANINES" | "PREMOLARS" | "MOLARS"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

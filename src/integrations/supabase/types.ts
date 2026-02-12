export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      achievements: {
        Row: {
          condition_json: Json | null
          created_at: string | null
          description_ar: string
          description_en: string
          icon: string | null
          id: string
          key: string
          title_ar: string
          title_en: string
          xp_reward: number | null
        }
        Insert: {
          condition_json?: Json | null
          created_at?: string | null
          description_ar: string
          description_en: string
          icon?: string | null
          id?: string
          key: string
          title_ar: string
          title_en: string
          xp_reward?: number | null
        }
        Update: {
          condition_json?: Json | null
          created_at?: string | null
          description_ar?: string
          description_en?: string
          icon?: string | null
          id?: string
          key?: string
          title_ar?: string
          title_en?: string
          xp_reward?: number | null
        }
        Relationships: []
      }
      blog_articles: {
        Row: {
          author_id: string | null
          author_name: string
          category_id: string | null
          content_ar: string
          content_en: string
          created_at: string | null
          excerpt_ar: string
          excerpt_en: string
          featured_image: string | null
          id: string
          is_published: boolean | null
          published_at: string | null
          slug: string
          title_ar: string
          title_en: string
          updated_at: string | null
          views_count: number | null
        }
        Insert: {
          author_id?: string | null
          author_name?: string
          category_id?: string | null
          content_ar: string
          content_en: string
          created_at?: string | null
          excerpt_ar: string
          excerpt_en: string
          featured_image?: string | null
          id?: string
          is_published?: boolean | null
          published_at?: string | null
          slug: string
          title_ar: string
          title_en: string
          updated_at?: string | null
          views_count?: number | null
        }
        Update: {
          author_id?: string | null
          author_name?: string
          category_id?: string | null
          content_ar?: string
          content_en?: string
          created_at?: string | null
          excerpt_ar?: string
          excerpt_en?: string
          featured_image?: string | null
          id?: string
          is_published?: boolean | null
          published_at?: string | null
          slug?: string
          title_ar?: string
          title_en?: string
          updated_at?: string | null
          views_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_articles_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "blog_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_categories: {
        Row: {
          color: string | null
          created_at: string | null
          id: string
          name_ar: string
          name_en: string
          slug: string
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          id?: string
          name_ar: string
          name_en: string
          slug: string
        }
        Update: {
          color?: string | null
          created_at?: string | null
          id?: string
          name_ar?: string
          name_en?: string
          slug?: string
        }
        Relationships: []
      }
      certificate_requests: {
        Row: {
          email: string
          full_name: string
          id: string
          level: string
          notes: string | null
          requested_at: string
          reviewed_at: string | null
          reviewed_by: string | null
          status: string
          user_id: string
        }
        Insert: {
          email: string
          full_name: string
          id?: string
          level?: string
          notes?: string | null
          requested_at?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          user_id: string
        }
        Update: {
          email?: string
          full_name?: string
          id?: string
          level?: string
          notes?: string | null
          requested_at?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      certificates: {
        Row: {
          certificate_code: string
          full_name: string
          id: string
          is_valid: boolean
          issued_at: string
          issued_by: string
          level: string
          user_id: string
        }
        Insert: {
          certificate_code: string
          full_name: string
          id?: string
          is_valid?: boolean
          issued_at?: string
          issued_by: string
          level: string
          user_id: string
        }
        Update: {
          certificate_code?: string
          full_name?: string
          id?: string
          is_valid?: boolean
          issued_at?: string
          issued_by?: string
          level?: string
          user_id?: string
        }
        Relationships: []
      }
      challenges: {
        Row: {
          challenge_type: string
          created_at: string | null
          description_ar: string
          description_en: string
          id: string
          is_active: boolean
          key: string
          name_ar: string
          name_en: string
          reward_achievement_id: string | null
          reward_xp: number
          target_value: number
        }
        Insert: {
          challenge_type?: string
          created_at?: string | null
          description_ar: string
          description_en: string
          id?: string
          is_active?: boolean
          key: string
          name_ar: string
          name_en: string
          reward_achievement_id?: string | null
          reward_xp?: number
          target_value?: number
        }
        Update: {
          challenge_type?: string
          created_at?: string | null
          description_ar?: string
          description_en?: string
          id?: string
          is_active?: boolean
          key?: string
          name_ar?: string
          name_en?: string
          reward_achievement_id?: string | null
          reward_xp?: number
          target_value?: number
        }
        Relationships: [
          {
            foreignKeyName: "challenges_reward_achievement_id_fkey"
            columns: ["reward_achievement_id"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_messages: {
        Row: {
          created_at: string
          email: string
          id: string
          is_read: boolean
          message: string
          name: string
          subject: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          is_read?: boolean
          message: string
          name: string
          subject: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          is_read?: boolean
          message?: string
          name?: string
          subject?: string
        }
        Relationships: []
      }
      exercises: {
        Row: {
          created_at: string | null
          data_json: Json
          id: string
          lesson_id: string
          order_index: number
          prompt_ar: string | null
          prompt_en: string | null
          type: Database["public"]["Enums"]["exercise_type"]
        }
        Insert: {
          created_at?: string | null
          data_json: Json
          id?: string
          lesson_id: string
          order_index?: number
          prompt_ar?: string | null
          prompt_en?: string | null
          type: Database["public"]["Enums"]["exercise_type"]
        }
        Update: {
          created_at?: string | null
          data_json?: Json
          id?: string
          lesson_id?: string
          order_index?: number
          prompt_ar?: string | null
          prompt_en?: string | null
          type?: Database["public"]["Enums"]["exercise_type"]
        }
        Relationships: [
          {
            foreignKeyName: "exercises_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      lessons: {
        Row: {
          created_at: string | null
          description_ar: string | null
          description_en: string | null
          id: string
          order_index: number
          title_ar: string
          title_en: string
          unit_id: string
          xp_reward: number | null
        }
        Insert: {
          created_at?: string | null
          description_ar?: string | null
          description_en?: string | null
          id?: string
          order_index?: number
          title_ar: string
          title_en: string
          unit_id: string
          xp_reward?: number | null
        }
        Update: {
          created_at?: string | null
          description_ar?: string | null
          description_en?: string | null
          id?: string
          order_index?: number
          title_ar?: string
          title_en?: string
          unit_id?: string
          xp_reward?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "lessons_unit_id_fkey"
            columns: ["unit_id"]
            isOneToOne: false
            referencedRelation: "units"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          is_read: boolean
          message: string
          sender_name: string
          target_type: string
          target_value: string | null
          title: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean
          message: string
          sender_name?: string
          target_type?: string
          target_value?: string | null
          title: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean
          message?: string
          sender_name?: string
          target_type?: string
          target_value?: string | null
          title?: string
          user_id?: string | null
        }
        Relationships: []
      }
      placement_tests: {
        Row: {
          answers_json: Json
          breakdown_json: Json | null
          created_at: string
          id: string
          score: number
          suggested_level: string
          total_questions: number
          user_id: string
        }
        Insert: {
          answers_json?: Json
          breakdown_json?: Json | null
          created_at?: string
          id?: string
          score: number
          suggested_level: string
          total_questions?: number
          user_id: string
        }
        Update: {
          answers_json?: Json
          breakdown_json?: Json | null
          created_at?: string
          id?: string
          score?: number
          suggested_level?: string
          total_questions?: number
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          country_code: string | null
          created_at: string | null
          current_level: string | null
          daily_goal: Database["public"]["Enums"]["daily_goal"] | null
          display_name: string | null
          email: string | null
          has_taken_placement: boolean | null
          id: string
          interests: string[] | null
          is_founder: boolean | null
          is_premium: boolean | null
          is_verified: boolean | null
          last_active_at: string | null
          last_login_at: string | null
          last_study_date: string | null
          level: Database["public"]["Enums"]["user_level"] | null
          month_start: string | null
          monthly_xp: number | null
          name: string | null
          notify_achievements: boolean | null
          notify_announcements: boolean | null
          notify_course_updates: boolean | null
          notify_reminders: boolean | null
          onboarding_completed: boolean | null
          placement_level: string | null
          placement_score: number | null
          placement_taken_at: string | null
          privacy_marketing_emails: boolean | null
          privacy_show_profile: boolean | null
          privacy_show_progress: boolean | null
          streak_count: number | null
          updated_at: string | null
          user_level: number | null
          username: string | null
          week_start: string | null
          weekly_xp: number | null
          xp: number | null
        }
        Insert: {
          avatar_url?: string | null
          country_code?: string | null
          created_at?: string | null
          current_level?: string | null
          daily_goal?: Database["public"]["Enums"]["daily_goal"] | null
          display_name?: string | null
          email?: string | null
          has_taken_placement?: boolean | null
          id: string
          interests?: string[] | null
          is_founder?: boolean | null
          is_premium?: boolean | null
          is_verified?: boolean | null
          last_active_at?: string | null
          last_login_at?: string | null
          last_study_date?: string | null
          level?: Database["public"]["Enums"]["user_level"] | null
          month_start?: string | null
          monthly_xp?: number | null
          name?: string | null
          notify_achievements?: boolean | null
          notify_announcements?: boolean | null
          notify_course_updates?: boolean | null
          notify_reminders?: boolean | null
          onboarding_completed?: boolean | null
          placement_level?: string | null
          placement_score?: number | null
          placement_taken_at?: string | null
          privacy_marketing_emails?: boolean | null
          privacy_show_profile?: boolean | null
          privacy_show_progress?: boolean | null
          streak_count?: number | null
          updated_at?: string | null
          user_level?: number | null
          username?: string | null
          week_start?: string | null
          weekly_xp?: number | null
          xp?: number | null
        }
        Update: {
          avatar_url?: string | null
          country_code?: string | null
          created_at?: string | null
          current_level?: string | null
          daily_goal?: Database["public"]["Enums"]["daily_goal"] | null
          display_name?: string | null
          email?: string | null
          has_taken_placement?: boolean | null
          id?: string
          interests?: string[] | null
          is_founder?: boolean | null
          is_premium?: boolean | null
          is_verified?: boolean | null
          last_active_at?: string | null
          last_login_at?: string | null
          last_study_date?: string | null
          level?: Database["public"]["Enums"]["user_level"] | null
          month_start?: string | null
          monthly_xp?: number | null
          name?: string | null
          notify_achievements?: boolean | null
          notify_announcements?: boolean | null
          notify_course_updates?: boolean | null
          notify_reminders?: boolean | null
          onboarding_completed?: boolean | null
          placement_level?: string | null
          placement_score?: number | null
          placement_taken_at?: string | null
          privacy_marketing_emails?: boolean | null
          privacy_show_profile?: boolean | null
          privacy_show_progress?: boolean | null
          streak_count?: number | null
          updated_at?: string | null
          user_level?: number | null
          username?: string | null
          week_start?: string | null
          weekly_xp?: number | null
          xp?: number | null
        }
        Relationships: []
      }
      progress: {
        Row: {
          completed: boolean | null
          hearts_remaining: number | null
          id: string
          lesson_id: string
          score: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          completed?: boolean | null
          hearts_remaining?: number | null
          id?: string
          lesson_id: string
          score?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          completed?: boolean | null
          hearts_remaining?: number | null
          id?: string
          lesson_id?: string
          score?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      units: {
        Row: {
          created_at: string | null
          description_ar: string | null
          description_en: string | null
          icon: string | null
          id: string
          order_index: number
          title_ar: string
          title_en: string
        }
        Insert: {
          created_at?: string | null
          description_ar?: string | null
          description_en?: string | null
          icon?: string | null
          id?: string
          order_index?: number
          title_ar: string
          title_en: string
        }
        Update: {
          created_at?: string | null
          description_ar?: string | null
          description_en?: string | null
          icon?: string | null
          id?: string
          order_index?: number
          title_ar?: string
          title_en?: string
        }
        Relationships: []
      }
      user_achievements: {
        Row: {
          achievement_id: string
          earned_at: string | null
          id: string
          user_id: string
        }
        Insert: {
          achievement_id: string
          earned_at?: string | null
          id?: string
          user_id: string
        }
        Update: {
          achievement_id?: string
          earned_at?: string | null
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_achievements_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          },
        ]
      }
      user_activity_log: {
        Row: {
          activity_date: string
          created_at: string
          id: string
          updated_at: string
          user_id: string
          visit_count: number
        }
        Insert: {
          activity_date?: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id: string
          visit_count?: number
        }
        Update: {
          activity_date?: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string
          visit_count?: number
        }
        Relationships: []
      }
      user_challenges: {
        Row: {
          challenge_id: string
          completed: boolean
          completed_at: string | null
          id: string
          progress: number
          started_at: string | null
          user_id: string
          week_start: string | null
        }
        Insert: {
          challenge_id: string
          completed?: boolean
          completed_at?: string | null
          id?: string
          progress?: number
          started_at?: string | null
          user_id: string
          week_start?: string | null
        }
        Update: {
          challenge_id?: string
          completed?: boolean
          completed_at?: string | null
          id?: string
          progress?: number
          started_at?: string | null
          user_id?: string
          week_start?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_challenges_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "challenges"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      compute_user_level: {
        Args: {
          lessons_completed?: number
          streak_count?: number
          total_xp: number
        }
        Returns: number
      }
      generate_certificate_code: { Args: never; Returns: string }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      log_daily_activity: { Args: { p_user_id: string }; Returns: undefined }
    }
    Enums: {
      app_role: "user" | "admin"
      daily_goal: "5" | "10" | "15"
      exercise_type:
        | "mcq"
        | "fill_blank"
        | "reorder"
        | "listening"
        | "translation"
      user_level: "beginner" | "intermediate" | "advanced"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["user", "admin"],
      daily_goal: ["5", "10", "15"],
      exercise_type: [
        "mcq",
        "fill_blank",
        "reorder",
        "listening",
        "translation",
      ],
      user_level: ["beginner", "intermediate", "advanced"],
    },
  },
} as const

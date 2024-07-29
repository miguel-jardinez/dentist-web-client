export interface UserRolesSupabase {
  created_at: string;
  id: string;
  role_id: string | null;
  user_id: string | null;
}

export interface UserRoles {
  created_at: string;
  id: string;
  role_id: string;
  user_id: string;
}

export const userRolesMapper = (data: UserRolesSupabase | null) : UserRoles => {
  if (!data) {
    return {
      created_at: '',
      id: '',
      role_id: '',
      user_id: '',
    }
  };

  return {
    created_at: data.created_at,
    id: data.id,
    role_id: data.role_id ?? '',
    user_id: data.user_id ?? '',
  }
}
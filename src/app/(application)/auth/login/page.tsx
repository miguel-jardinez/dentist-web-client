import { supabaseServerClient } from "@dentist/utils/supabase/server-client";
import { LoginPage } from "@dentist/views/auth";
import { redirect } from "next/navigation";

const Login = async () => {
  const dataLogin = await supabaseServerClient()
    .from('feature_flag')
    .select('*')
    .eq('name', 'login_feature')
    .single()

  if (dataLogin.error) {
    redirect('/')
  }

  if (!dataLogin.data.active) {
    redirect('/')
  }

  return <LoginPage />
}

export default Login
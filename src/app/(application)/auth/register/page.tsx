import { supabaseServerClient } from "@dentist/utils/supabase/server-client";
import { RegisterPage } from "@dentist/views/auth/register/register-page";
import { redirect } from "next/navigation";

const Home = async () => {
  const dataLogin = await supabaseServerClient()
    .from('feature_flag')
    .select('*')
    .eq('name', 'register_feature')
    .single()

  if (dataLogin.error) {
    redirect('/')
  }

  if (!dataLogin.data.active) {
    redirect('/')
  }

  return <RegisterPage />
}


export default Home
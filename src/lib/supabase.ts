import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface UserInfo {
  gmail: string;
  telegram: string;
}

export async function saveUserInfo(data: UserInfo) {
  const { data: result, error } = await supabase
    .from("redotpay_user_info")
    .insert([
      {
        gmail: data.gmail,
        telegram: data.telegram,
        status: "new",
      },
    ])
    .select();
  if (error) throw error;
  return result;
}

export async function bindTransactionToUser(
  userId: number,
  transactionId: string
) {
  const { error } = await supabase
    .from("redotpay_user_info")
    .update({ transaction_id: transactionId, status: "pending" })
    .eq("id", userId);
  if (error) throw error;
}

export async function setUserPaidByTransaction(transactionId: string) {
  const { error } = await supabase
    .from("redotpay_user_info")
    .update({ status: "paid" })
    .eq("transaction_id", transactionId);
  if (error) throw error;
}






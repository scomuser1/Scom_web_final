import AuthLogo from "../auth-logo";
import Form from "./form";

export type SocialAccountType = {
  name: string;
  type: "instagram" | "twitter" | "tiktok";
};

export type SignUpFormData = {
  email: string;
  password: string;
  walletAddr: string;
  accounts: SocialAccountType[];
};

export default async function RegisterPage() {
  return (
    <>
      {/* Page header */}
      <div className="max-w-3xl pb-12 mx-auto text-center">
        {/* Logo */}
        <AuthLogo />
        {/* Page title */}
        <h1 className="text-transparent h2 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
          Create your free account
        </h1>
      </div>
      <Form />
    </>
  );
}

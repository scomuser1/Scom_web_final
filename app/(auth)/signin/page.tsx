import AuthLogo from "../auth-logo";
import Form from "./form";
import Link from "next/link";

export default async function LogIn() {
  return (
    <>
      {/* Page header */}
      <div className="max-w-3xl pb-12 mx-auto text-center">
        {/* Logo */}
        <AuthLogo />
        {/* Page title */}
        <h1 className="text-transparent h2 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
          Log In
        </h1>
      </div>
      <Form>
        <Link
          href={"/signup"}
          className="block uppercase transition text-secondary hover:text-primary signup hover:scale-90 target:scale-75"
        >
          <span>Sign up</span>
        </Link>
      </Form>
    </>
  );
}

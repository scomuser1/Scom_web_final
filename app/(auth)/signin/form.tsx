"use client";

import clsx from "clsx";
import { signIn } from "next-auth/react";

export default function Form(
  { children }: { children: React.ReactNode },
) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    signIn('credentials', {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      callbackUrl: `${window.location.origin}/dashboard`,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5">
        <div>
          <label
            className="block mb-1 text-sm font-medium text-slate-800"
            htmlFor="email"
            aria-label="Email Address"
          >
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            className={clsx("w-full form-input")}
            type="email"
            placeholder="scomuser@scomcoin.io"
            name="email"
            aria-labelledby="email"
            required
          />
        </div>
        <div>
          <label
            className="block mb-1 text-sm font-medium text-slate-800"
            htmlFor="password"
            aria-label="Password"
          >
            Password <span className="text-rose-500">*</span>
          </label>
          <input
            id="password"
            className={clsx("w-full form-input")}
            type="password"
            placeholder="Sc0m4Ev@"
            name="password"
            aria-labelledby="password"
            required
          />
        </div>
      </div>
      <div className="flex justify-between p-2 pt-6">
        <button
          type="submit"
          className="block text-black uppercase transition hover:text-primary signup hover:scale-90 target:scale-75"
        >
          <span>Sign in</span>
        </button>
        {children}
      </div>
    </form>
  );
}

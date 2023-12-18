"use client";

import { useState } from "react";
import { SignUpFormData } from "./page";
import clsx from "clsx";
import { isAddress } from "web3-validator";

type InputError = {
  email: boolean;
  password: boolean;
  walletAddr: boolean;
  accounts: boolean;
};

function ValidateInputs(data: SignUpFormData): InputError {
  const errors: InputError = {
    email: false,
    password: false,
    walletAddr: false,
    accounts: false,
  };

  if (!data.email || !EmailRegex(data.email)) {
    errors.email = true;
  }

  if (!isAddress(data.walletAddr)) {
    errors.walletAddr = true;
  }

  if (data.accounts[0].name === '' && data.accounts[1].name === '' && data.accounts[2].name === '') {
    errors.accounts = true;
  }

  return errors;
}

function EmailRegex(email: string): boolean {
  const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return re.test(email);
}

export default function Form() {
  const [inputError, setInputError] = useState<InputError>({
    email: false,
    password: false,
    walletAddr: false,
    accounts: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const errors = ValidateInputs({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      walletAddr: formData.get("wallet") as string,
      accounts: [
        {
          name: formData.get("instagram") as string,
          type: "instagram",
        },
        {
          name: formData.get("tiktok") as string,
          type: "tiktok",
        },
        {
          name: formData.get("twitter") as string,
          type: "twitter",
        },
      ],
    });
    setInputError(errors);
    if (
      errors.email ||
      errors.password ||
      errors.walletAddr ||
      errors.accounts
    ) {
      return;
    }
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
        walletAddr: formData.get("wallet"),
        accounts: [
          {
            name: formData.get("instagram"),
            type: "instagram",
          },
          {
            name: formData.get("tiktok"),
            type: "tiktok",
          },
          {
            name: formData.get("twitter"),
            type: "twitter",
          },
        ],
      }),
    });
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5">
        <div >
          <label
            className="block mb-1 text-sm font-medium text-slate-800"
            htmlFor="email"
            aria-label="Email Address"
          >
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input    
            id="email"
            className={clsx("w-full form-input", inputError.email && "border-rose-500")}
            type="email"
            placeholder="scomuser@scomcoin.io"
            name="email"
            aria-labelledby="email"
            required
          />
          {inputError.email && (
            <p className="text-rose-500">Please enter a valid email address</p>
          )}
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
            className={clsx("w-full form-input", inputError.password && "border-rose-500")}
            type="password"
            placeholder="Sc0m4Ev@"
            name="password"
            aria-labelledby="password"
            required
          />
        </div>
        <div className="h-20">
          <label
            className="block mb-1 text-sm font-medium text-slate-800"
            htmlFor="wallet"
            aria-label="Wallet Address"
          >
            Wallet Address <span className="text-rose-500">*</span>
          </label>
          <input
            id="wallet"
            className={clsx("w-full form-input", inputError.walletAddr && "border-rose-500")}
            type="wallet"
            placeholder="0x000000000000000000000000000000000000dead"
            name="wallet"
            aria-labelledby="wallet"
            required
          />
            {inputError.walletAddr && (
                <p className="text-rose-500">Please enter a valid Ethereum address</p>
            )}
        </div>
        <div>Register with at least one social media account</div>
        <div>
          <label
            className="block mb-1 text-sm font-medium text-slate-800"
            htmlFor="instagram"
            aria-label="Instagram Username"
          >
            Instagram Username
          </label>
          <input
            id="instagram"
            className={clsx("w-full form-input", inputError.accounts && "border-rose-500")}
            type="instagram"
            placeholder="scomuser"
            name="instagram"
            aria-labelledby="instagram"
          />
        </div>
        <div>
          <label
            className="block mb-1 text-sm font-medium text-slate-800"
            htmlFor="tiktok"
            aria-label="TikTok Username"
          >
            TikTok Username
          </label>
          <input
            id="tiktok"
            className={clsx("w-full form-input", inputError.accounts && "border-rose-500")}
            type="tiktok"
            placeholder="scomuser"
            name="tiktok"
            aria-labelledby="tiktok"
          />
        </div>
        <div>
          <label
            className="block mb-1 text-sm font-medium text-slate-800"
            htmlFor="twitter"
            aria-label="Twitter Username"
          >
            Twitter Username
          </label>
          <input
            id="twitter"
            className={clsx("w-full form-input", inputError.accounts && "border-rose-500")}
            type="twitter"
            placeholder="scomuser"
            name="twitter"
            aria-labelledby="twitter"
          />
        </div>
        <div className="h-8">

        {inputError.accounts && (
          <p className="text-rose-500">Please enter at least one social username</p>
          )}
          </div>
      </div>
      <div className="p-2 pt-6">
        <button
          type="submit"
          className="block text-black uppercase transition hover:text-primary signup hover:scale-90 target:scale-75"
        >
          <span>Sign up</span>
        </button>
      </div>
    </form>
  );
}

import React, { Suspense } from "react";
import { getLoggedInUser } from "../../../lib/actions/user.actions";
import Link from "next/link";
import Image from "next/image";
import PlaidLink from "../../../components/PlaidLink";

const LinkAccount = async () => {
  const user = await getLoggedInUser();

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex cursor-pointer items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="FinMate logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            FinMate
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-500 ">
            Link Account
            <p className="text-16 font-normal text-gray-600">
              Link your account to get started
            </p>
          </h1>
        </div>
      </header>
      <div className="flex flex-col gap-4">
        <Suspense>
          <PlaidLink user={user} variant="primary" />
        </Suspense>
      </div>
    </section>
  );
};

export default LinkAccount;

import React from "react";
import HeaderBox from "../../../components/HeaderBox";
import { getLoggedInUser } from "../../../lib/actions/user.actions";
import { getAccounts } from "../../../lib/actions/bank.actions";
import BankCard from "../../../components/BankCard";

const MyBanks = async () => {
  const loggedInUser = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedInUser?.$id });

  return (
    <section className="flex">
      <div className="my-banks">
        <HeaderBox
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activities."
        />
        <div className="space-y-4">
          <h2 className="header-2">Your cards</h2>
        </div>
        <div className="flex flex-wrap gap-6">
          {accounts &&
            accounts.data.map((account: Account) => (
              <BankCard
                key={account.id}
                account={account}
                userName={loggedInUser.firstName}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default MyBanks;

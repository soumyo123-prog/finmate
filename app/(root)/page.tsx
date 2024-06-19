import React from "react";
import HeaderBox from "../../components/HeaderBox";
import TotalBalanceBox from "../../components/TotalBalanceBox";
import RightSidebar from "../../components/RightSidebar";
import { getLoggedInUser } from "../../lib/actions/user.actions";

const Home = async () => {
  const loggedInUser = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedInUser?.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedInUser}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500.0 }]}
      />
    </section>
  );
};

export default Home;

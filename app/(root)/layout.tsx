import Image from "next/image";
import Sidebar from "../../components/Sidebar";
import MobileNavbar from "../../components/MobileNavbar";
import { getLoggedInUser } from "../../lib/actions/user.actions";
import { redirect } from "next/navigation";
import { getAccounts } from "../../lib/actions/bank.actions";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedInUser = await getLoggedInUser();

  if (!loggedInUser) {
    redirect("/login");
  }

  const accounts = await getAccounts({ userId: loggedInUser?.$id });
  const totalBanks = accounts?.totalBanks;

  if (totalBanks === 0) {
    redirect("/link-account");
  }

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedInUser} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="Menu icon" />
          <div>
            <MobileNavbar user={loggedInUser} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}

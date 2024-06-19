"use server";

import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "../appwrite";
import { ID } from "node-appwrite";
import { appwriteSessionName } from "../../constants";
import { parseStringify } from "../utils";

export const login = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);
    cookies().set(appwriteSessionName, session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return parseStringify(session);
  } catch (error) {
    console.error("Error", error);
  }
};

export const register = async (userData: SignUpParams) => {
  try {
    const { account } = await createAdminClient();
    const { email, password, firstName, lastName } = userData;

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      firstName + " " + lastName
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set(appwriteSessionName, session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount);
  } catch (error) {
    console.error("Error", error);
  }
};

export const getLoggedInUser = async () => {
  try {
    const { account } = await createSessionClient();
    const userAccount = await account.get();
    return parseStringify(userAccount);
  } catch (error) {
    return null;
  }
};

export const logout = async () => {
  try {
    const { account } = await createSessionClient();
    cookies().delete(appwriteSessionName);
    await account.deleteSession("current");
    return true;
  } catch (error) {
    return null;
  }
};

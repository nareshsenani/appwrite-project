import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)

            if (userAccount) {
                //call another account
                return this.login({email,password});
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            const session = await this.account.createEmailPasswordSession(email,password);
            return session
    
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    }


    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            if (error.code === 401) {
                // Unauthorized, force logout
                console.log("User session expired. Logging out...");
                return null;
            }
        }

        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error ",error)
            
        }
    }
}

const authService = new AuthService();

export default authService

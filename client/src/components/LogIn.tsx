import Link from "next/link";

export default function LogIn(){
    return (
        <div className="bg-[#17887A] w-full h-screen">
            <div className="container">
                <div className="mx-auto border">
                    <h1>Log In</h1>
                    <form>
                        <div className="form-group flex">
                            <label>Username</label>
                            <input type="text" />
                        </div>
                        <div className="form-group flex">
                            <label>Password</label>
                            <input type="text" />
                        </div>
                        <button>Login</button>
                        <Link href="#">Register</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
import { Building2 } from "lucide-react"
import { LoginForm } from "@/components/forms/login-form"

export default function LoginPage() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                {/* Brand Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-500/30 mb-4">
                        <Building2 className="w-7 h-7" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Property CRM
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Internal Property Management System
                    </p>
                </div>

                {/* Form Login Component */}
                <LoginForm />

                {/* Footer info */}
                <div className="mt-8 text-center text-xs text-slate-400">
                    Internal Access Only • CRM v1.0
                </div>
            </div>
        </div>
    )
}
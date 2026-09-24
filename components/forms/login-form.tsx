"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff, Lock, ShieldAlert, User } from "lucide-react"

import { loginSchema, LoginInput } from "@/schemas/auth.schema"
import { loginAction } from "@/actions/auth.action"

export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    const onSubmit = async (data: LoginInput) => {
        setError(null)
        setIsLoading(true)

        try {
            const result = await loginAction(data)

            if (result?.error) {
                setError(result.error)
                setIsLoading(false)
            }
            // Jika berhasil, NextAuth akan otomatis melempar error redirect
            // sehingga kode ini mungkin tidak akan mencapai isLoading(false) jika sukses.
        } catch (err: unknown) {
            // Karena Next.js redirect() dilempar sebagai error (NEXT_REDIRECT), 
            // kita harus membiarkannya bubble up ke Next.js router.
            // Namun jika err bukan redirect, kita bisa tangani (walaupun loginAction sudah catch).
            if (typeof err === 'object' && err !== null && 'digest' in err) {
                throw err;
            }
            setIsLoading(false)
        }
    }

    return (
        <>
            {/* Alert Error Dummy/Server */}
            {error && (
                <div className="mb-6 p-3.5 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl flex items-center gap-3">
                    <ShieldAlert className="w-5 h-5 text-red-500 shrink-0" />
                    <span>{error}</span>
                </div>
            )}

            {/* Form Login */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Email Input */}
                <div>
                    <label
                        htmlFor="username"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                        Username
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <User className="w-5 h-5" />
                        </div>
                        <input
                            id="username"
                            type="text"
                            {...register("username")}
                            placeholder="Masukkan username Anda"
                            className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border ${errors.username ? 'border-red-500' : 'border-slate-200'} rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all`}
                        />
                    </div>
                    {errors.username && (
                        <p className="mt-1 text-sm text-red-500">{errors.username.message}</p>
                    )}
                </div>

                {/* Password Input */}
                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <Lock className="w-5 h-5" />
                        </div>
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            {...register("password")}
                            placeholder="••••••••"
                            className={`w-full pl-10 pr-11 py-2.5 bg-slate-50 border ${errors.password ? 'border-red-500' : 'border-slate-200'} rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all`}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none"
                        >
                            {showPassword ? (
                                <EyeOff className="w-5 h-5" />
                            ) : (
                                <Eye className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                    {errors.password && (
                        <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-2.5 px-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                >
                    {isLoading ? (
                        <>
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Memproses...</span>
                        </>
                    ) : (
                        <span>Masuk ke Sistem</span>
                    )}
                </button>
            </form>
        </>
    )
}

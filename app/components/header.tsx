"use client";

import { FormEvent, useState } from "react";

const categories = ["Food & dining", "Transport", "Home", "Shopping", "Health", "Other"];

export default function Header() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitted(true);
        event.currentTarget.reset();
    }

    return (
        <header className="min-h-screen bg-[#f4f3ef] px-5 py-6 text-[#202321] sm:px-8 sm:py-8 lg:px-12">
            <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl flex-col rounded-[2rem] bg-[#202321] px-6 py-6 text-[#f4f3ef] shadow-[0_24px_80px_rgba(32,35,33,0.16)] sm:min-h-[calc(100vh-4rem)] sm:px-10 sm:py-8 lg:px-14">
                <nav className="flex items-center justify-between border-b border-white/15 pb-6">
                    <div className="flex items-center gap-3">
                        <span className="flex size-9 items-center justify-center rounded-full bg-[#d7f36b] text-sm font-bold text-[#202321]">₹</span>
                        <span className="text-sm font-semibold tracking-[0.18em] text-white/90 uppercase">Expense Tracker</span>
                    </div>
                    <span className="hidden text-xs tracking-[0.16em] text-white/45 uppercase sm:block">Personal finance / 2026</span>
                </nav>

                <div className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(28rem,1fr)] lg:gap-24 lg:py-20">
                    <div className="max-w-xl">
                        <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-[#d7f36b] uppercase">New entry</p>
                        <h1 className="max-w-lg text-5xl leading-[0.95] font-semibold tracking-[-0.04em] text-white sm:text-7xl">Keep your spending in view.</h1>
                        <p className="mt-7 max-w-md text-base leading-7 text-white/55">Add an expense while it is still fresh. A clearer expense starts with one honest number.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="rounded-2xl bg-[#f4f3ef] p-6 text-[#202321] sm:p-8">
                        <div className="mb-8 flex items-start justify-between gap-4">
                            <div>
                                <h2 className="text-xl font-semibold tracking-[-0.02em]">Add expense</h2>
                                <p className="mt-1 text-sm text-[#202321]/50">Every detail helps later.</p>
                            </div>
                            <span className="rounded-full border border-[#202321]/10 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-[#202321]/45 uppercase">Required</span>
                        </div>

                        <div className="space-y-5">
                            <label className="block">
                                <span className="mb-2 block text-xs font-semibold tracking-[0.14em] text-[#202321]/55 uppercase">Amount</span>
                                <span className="flex items-center border-b border-[#202321]/20 focus-within:border-[#202321]">
                                    <span className="pb-3 text-2xl text-[#202321]/40">₹</span>
                                    <input required name="amount" type="number" min="0.01" step="0.01" placeholder="0.00" aria-label="Amount" className="w-full bg-transparent px-2 pb-3 text-2xl font-medium outline-none placeholder:text-[#202321]/20" />
                                </span>
                            </label>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="block">
                                    <span className="mb-2 block text-xs font-semibold tracking-[0.14em] text-[#202321]/55 uppercase">Category</span>
                                    <select required name="category" defaultValue="" className="w-full appearance-none border-b border-[#202321]/20 bg-transparent pb-3 text-sm outline-none focus:border-[#202321]">
                                        <option value="" disabled>Select one</option>
                                        {categories.map((category) => <option key={category}>{category}</option>)}
                                    </select>
                                </label>

                                <label className="block">
                                    <span className="mb-2 block text-xs font-semibold tracking-[0.14em] text-[#202321]/55 uppercase">Date</span>
                                    <input required name="date" type="date" className="w-full border-b border-[#202321]/20 bg-transparent pb-3 text-sm outline-none focus:border-[#202321]" />
                                </label>
                            </div>

                            <label className="block">
                                <span className="mb-2 block text-xs font-semibold tracking-[0.14em] text-[#202321]/55 uppercase">Description</span>
                                <input required name="description" type="text" placeholder="What was this for?" className="w-full border-b border-[#202321]/20 bg-transparent pb-3 text-sm outline-none placeholder:text-[#202321]/30 focus:border-[#202321]" />
                            </label>
                        </div>

                        <button type="submit" className="mt-9 flex w-full items-center justify-between rounded-xl bg-[#202321] px-5 py-4 text-sm font-semibold text-[#f4f3ef] transition-colors hover:bg-[#39403b] focus:ring-2 focus:ring-[#202321] focus:ring-offset-2 focus:outline-none">
                            <span>{isSubmitted ? "Expense added" : "Save expense"}</span>
                            <span aria-hidden="true" className="text-lg leading-none">-&gt;</span>
                        </button>
                    </form>
                </div>

                <footer className="flex items-center justify-between border-t border-white/15 pt-5 text-xs text-white/35">
                    <span>Spend with intention.</span>
                    <span>01 / 01</span>
                </footer>
            </div>
        </header>
    );
}
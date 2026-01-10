import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, FileText, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode; title: string }> = ({ children, title }) => (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-gray-800">
        <nav className="bg-white border-b border-gray-100 py-4 px-6 md:px-12">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 text-gray-900 font-bold hover:text-[#E67E7E] transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>
                <span className="font-serif italic text-xl">The Connection Code</span>
            </div>
        </nav>

        <main className="max-w-3xl mx-auto py-12 px-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-4">{title}</h1>
            <div className="prose prose-rose max-w-none">
                {children}
            </div>
        </main>

        <footer className="bg-gray-900 text-white py-12 text-center mt-20">
            <p className="text-gray-500 text-sm">© 2026 The Connection Code. All rights reserved.</p>
        </footer>
    </div>
);

export const TermsOfService = () => (
    <Layout title="Terms of Service">
        <div className="space-y-6 text-gray-600 leading-relaxed">
            <div className="flex items-center gap-2 text-[#E67E7E] font-bold mb-2">
                <FileText className="w-5 h-5" />
                <span>Last Updated: January 2026</span>
            </div>
            <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the website operated by The Connection Code ("us", "we", or "our").</p>

            <h3 className="text-xl font-bold text-gray-900 mt-6">1. Conditions of Use</h3>
            <p>By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to leave the website accordingly.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-6">2. Intellectual Property</h3>
            <p>You agree that all materials, products, and services provided on this website are the property of The Connection Code, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute the [The Connection Code]’s intellectual property in any way, including electronic, digital, or new trademark registrations.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-6">3. User Accounts</h3>
            <p>As a user of this website, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information.</p>
        </div>
    </Layout>
);

export const PrivacyPolicy = () => (
    <Layout title="Privacy Policy">
        <div className="space-y-6 text-gray-600 leading-relaxed">
            <div className="flex items-center gap-2 text-[#E67E7E] font-bold mb-2">
                <ShieldCheck className="w-5 h-5" />
                <span>Your Privacy Matters</span>
            </div>
            <p>This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-6">Information Collection</h3>
            <p>For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-6">Security</h3>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex items-start gap-3">
                <Lock className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm text-green-800">We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet is 100% secure and reliable.</p>
            </div>
        </div>
    </Layout>
);

export const Support = () => (
    <Layout title="Support Center">
        <div className="space-y-8 text-center py-8">
            <div className="bg-rose-50 p-8 rounded-2xl border border-rose-100 inline-block">
                <Mail className="w-12 h-12 text-[#E67E7E] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">We typically respond within 24 hours.</p>
                <a href="mailto:support@connectioncode.com" className="text-[#E67E7E] font-bold hover:underline text-lg">support@connectioncode.com</a>
            </div>

            <div className="max-w-lg mx-auto text-left space-y-4">
                <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">Frequently Asked Questions</h3>
                <details className="group">
                    <summary className="cursor-pointer font-medium text-gray-700 marker:text-[#E67E7E]">I can't find my download link.</summary>
                    <p className="mt-2 text-gray-500 text-sm pl-4">Please check your spam/promotions folder. The subject line usually contains "Your Order".</p>
                </details>
                <details className="group">
                    <summary className="cursor-pointer font-medium text-gray-700 marker:text-[#E67E7E]">How do I request a refund?</summary>
                    <p className="mt-2 text-gray-500 text-sm pl-4">Simply email us with your order number within 60 days of purchase.</p>
                </details>
            </div>
        </div>
    </Layout>
);

export const Login = () => (
    <Layout title="Member Login">
        <div className="max-w-sm mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                    <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E67E7E]/50" placeholder="sarah@example.com" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
                    <input type="password" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E67E7E]/50" placeholder="••••••••" />
                </div>
                <button type="submit" className="w-full bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-gray-800 transition-colors">Sign In</button>
            </form>
            <p className="text-center mt-4 text-xs text-gray-400">Forgot your password? <a href="#" className="underline">Reset here</a></p>
        </div>
    </Layout>
);

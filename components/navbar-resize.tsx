"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import LanguageSwitcher from "@/components/language-switcher";

export function NavbarResize() {
    const navItems = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "about",
        },
        {
            name: "Contact",
            link: "contact",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <div className="flex items-center justify-between w-full">
                        <NavbarLogo />
                        <div className="ml-10 flex items-center space-x-6">
                            {navItems.map((item, idx) => (
                                <Link 
                                    key={`desktop-link-${idx}`}
                                    href={item.link}
                                    className="font-bold text-base text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] hover:text-gray-200 transition-colors z-[100]"
                                >
                                    {item.name}
                                </Link> 
                            ))}
                        </div>
                        <LanguageSwitcher />
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <Link
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative font-bold text-lg text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] px-4 py-2 w-full hover:text-gray-200 z-[100]"
                            >
                                <span className="block">{item.name}</span>
                            </Link>
                        ))}
                        <div className="flex w-full flex-col gap-4">
                            <div className="flex justify-center my-2">
                                <LanguageSwitcher />
                            </div>
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="secondary"
                                className="w-full"
                            >
                                Login
                            </NavbarButton>
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Get Started
                            </NavbarButton>
                    </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>
    );
}
'use client'

// src/components/organisms/Navbar.tsx
// Fixed top navigation bar with dropdown menus, mobile hamburger + language switcher

import { useState, useRef, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'

type NavItem = {
  label: string
  href?: string
  children?: { label: string; href: string }[]
}

const navLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products/cbd-isolate' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  {
    label: 'About',
    children: [
      { label: 'Company', href: '/about' },
      { label: 'Equipment', href: '/equipment' },
      { label: 'Planting Base', href: '/planting' },
    ],
  },
]

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧', href: '/' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', href: '/de' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', href: '/fr' },
]

const supportedLangPrefixes = ['/de', '/fr']

/** Detect language prefix from pathname */
function detectLangPrefix(pathname: string): string {
  for (const prefix of supportedLangPrefixes) {
    if (pathname === prefix || pathname.startsWith(prefix + '/')) {
      return prefix
    }
  }
  return ''
}

/** Add language prefix to a href */
function localizeHref(href: string, langPrefix: string): string {
  if (!langPrefix) return href
  if (href === '/') return langPrefix
  return langPrefix + href
}

function DesktopDropdown({
  item,
  pathname,
  langPrefix,
}: {
  item: NavItem
  pathname: string
  langPrefix: string
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLLIElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const isChildActive = item.children?.some(
    (c) => pathname === localizeHref(c.href, langPrefix)
  )

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className={`inline-flex items-center gap-1 h-8 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 ${
          isChildActive
            ? 'text-primary'
            : 'text-on-surface-variant hover:text-on-surface'
        }`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-2 z-50">
          <div className="bg-surface-container-lowest border border-outline-variant/20 shadow-lg py-1.5 min-w-[180px] rounded-md">
            {item.children!.map((child) => {
              const childHref = localizeHref(child.href, langPrefix)
              return (
                <Link
                  key={child.href}
                  href={childHref}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2.5 text-xs font-semibold tracking-wider transition-colors duration-150 ${
                    pathname === childHref
                      ? 'text-primary bg-primary-fixed/30'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                  }`}
                >
                  {child.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </li>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const langRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const langPrefix = useMemo(() => detectLangPrefix(pathname), [pathname])

  const currentLang =
    languages.find((l) => l.code !== 'en' && pathname.startsWith(l.href)) ||
    languages[0]

  const homePath = localizeHref('/', langPrefix)

  // Build language switcher hrefs: switch language but keep the same sub-path
  const stripPrefix = (p: string) => {
    for (const prefix of supportedLangPrefixes) {
      if (p === prefix) return '/'
      if (p.startsWith(prefix + '/')) return p.slice(prefix.length)
    }
    return p
  }
  const basePath = stripPrefix(pathname)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const toggleMobileGroup = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-lg border-b border-outline-variant/20">
      <nav className="max-w-container mx-auto px-6 lg:px-12 h-12 flex items-center justify-between">
        {/* Brand */}
        <Link href={homePath} className="flex items-center overflow-hidden h-10">
          <img
            src="/logo.svg"
            alt="Vetrux CBD"
            className="h-32 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => {
            if (item.children) {
              return (
                <DesktopDropdown
                  key={item.label}
                  item={item}
                  pathname={pathname}
                  langPrefix={langPrefix}
                />
              )
            }
            const linkHref = localizeHref(item.href!, langPrefix)
            const isActive = pathname === linkHref
            return (
              <li key={item.href}>
                <Link
                  href={linkHref}
                  className={`inline-flex items-center h-8 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 ${
                    isActive
                      ? 'text-primary'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTA area */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Switcher */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold tracking-wider text-on-surface-variant hover:text-on-surface transition-colors duration-200"
              aria-label="Switch language"
            >
              <Globe size={14} />
              <span>{currentLang.flag}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-surface-container-lowest border border-outline-variant/20 shadow-lg py-1 min-w-[140px] z-50 rounded-md">
                {languages.map((lang) => {
                  const langHref =
                    lang.code === 'en'
                      ? basePath
                      : basePath === '/'
                        ? `/${lang.code}`
                        : `/${lang.code}${basePath}`
                  return (
                    <Link
                      key={lang.code}
                      href={langHref}
                      onClick={() => setLangOpen(false)}
                      className={`flex items-center gap-2.5 px-4 py-2 text-xs font-semibold tracking-wider transition-colors duration-150 ${
                        currentLang.code === lang.code
                          ? 'text-primary bg-primary-fixed/30'
                          : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>

          <Link
            href={localizeHref('/inquiry', langPrefix)}
            className="inline-flex items-center px-4 py-2 bg-primary text-white text-xs font-semibold tracking-widest uppercase rounded-md hover:bg-primary-container transition-all duration-300 whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-on-surface"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-t border-outline-variant/20 px-6 py-6">
          <ul className="flex flex-col gap-2">
            {navLinks.map((item) => {
              if (item.children) {
                const isExpanded = mobileExpanded === item.label
                const isChildActive = item.children.some(
                  (c) => pathname === localizeHref(c.href, langPrefix)
                )
                return (
                  <li key={item.label}>
                    <button
                      onClick={() => toggleMobileGroup(item.label)}
                      className={`flex items-center justify-between w-full text-xs font-semibold tracking-widest uppercase py-2 transition-colors duration-200 ${
                        isChildActive
                          ? 'text-primary'
                          : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <ul className="pl-4 flex flex-col gap-1 pb-2">
                        {item.children.map((child) => {
                          const childHref = localizeHref(child.href, langPrefix)
                          return (
                            <li key={child.href}>
                              <Link
                                href={childHref}
                                onClick={() => setMobileOpen(false)}
                                className={`block text-xs font-semibold tracking-wider py-1.5 transition-colors duration-200 ${
                                  pathname === childHref
                                    ? 'text-primary'
                                    : 'text-on-surface-variant/70 hover:text-on-surface'
                                }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </li>
                )
              }
              const mobileLinkHref = localizeHref(item.href!, langPrefix)
              const isActive = pathname === mobileLinkHref
              return (
                <li key={item.href}>
                  <Link
                    href={mobileLinkHref}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-xs font-semibold tracking-widest uppercase py-2 transition-colors duration-200 ${
                      isActive
                        ? 'text-primary'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
            <li className="pt-2">
              <Link
                href={localizeHref('/inquiry', langPrefix)}
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center px-4 py-2 bg-primary text-white text-xs font-semibold tracking-widest uppercase rounded-md hover:bg-primary-container transition-all duration-300 mt-2"
              >
                Contact Us
              </Link>
            </li>
            <li className="pt-2 border-t border-outline-variant/20 mt-2">
              <p className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant/50 mb-2">
                Language
              </p>
              <div className="flex gap-3">
                {languages.map((lang) => {
                  const langHref =
                    lang.code === 'en'
                      ? basePath
                      : basePath === '/'
                        ? `/${lang.code}`
                        : `/${lang.code}${basePath}`
                  return (
                    <Link
                      key={lang.code}
                      href={langHref}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wider rounded-md transition-colors duration-150 ${
                        currentLang.code === lang.code
                          ? 'text-primary bg-primary-fixed/30'
                          : 'text-on-surface-variant hover:text-on-surface bg-surface-container'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </Link>
                  )
                })}
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

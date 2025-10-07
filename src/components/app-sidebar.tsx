"use client"

import { usePathname } from "next/navigation"
import { 
  Sparkles, 
  Building2, 
  Layers, 
  Puzzle, 
  FileText, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Megaphone, 
  Layout, 
  DollarSign, 
  Scale, 
  HelpCircle, 
  LogIn, 
  UserPlus 
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Sections with their sub-items
const sections = [
  {
    title: "Hero Section",
    icon: Sparkles,
    items: ["hero-01", "hero-02", "hero-03"],
  },
  {
    title: "Logo Cloud",
    icon: Building2,
    items: ["logocloud-01", "logocloud-02", "logocloud-03"],
  },
  {
    title: "Features",
    icon: Layers,
    items: ["features-01", "features-02", "features-03"],
  },
  {
    title: "Integrations",
    icon: Puzzle,
    items: ["integrations-01", "integrations-02", "integrations-03"],
  },
  {
    title: "Content",
    icon: FileText,
    items: ["content-01", "content-02", "content-03"],
  },
  {
    title: "Stats",
    icon: BarChart3,
    items: ["stats-01", "stats-02", "stats-03"],
  },
  {
    title: "Team",
    icon: Users,
    items: ["team-01", "team-02", "team-03"],
  },
  {
    title: "Testimonials",
    icon: MessageSquare,
    items: ["testimonials-01", "testimonials-02", "testimonials-03"],
  },
  {
    title: "Call to Action",
    icon: Megaphone,
    items: ["cta-01", "cta-02", "cta-03"],
  },
  {
    title: "Footer",
    icon: Layout,
    items: ["footer-01", "footer-02", "footer-03"],
  },
  {
    title: "Pricing",
    icon: DollarSign,
    items: ["pricing-01", "pricing-02", "pricing-03"],
  },
  {
    title: "Comparator",
    icon: Scale,
    items: ["comparator-01", "comparator-02", "comparator-03"],
  },
  {
    title: "FAQs",
    icon: HelpCircle,
    items: ["faqs-01", "faqs-02", "faqs-03"],
  },
  {
    title: "Login",
    icon: LogIn,
    items: ["login-01", "login-02", "login-03"],
  },
  {
    title: "Sign Up",
    icon: UserPlus,
    items: ["signup-01", "signup-02", "signup-03"],
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  
  // Extract the current item from the pathname (e.g., "/components/hero1" -> "hero1")
  const currentItem = pathname?.split('/').pop() || ""

  return (
    <Sidebar collapsible="none" className="border-r border-[#1B1B1D]">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-4">
          <h1 className="text-2xl font-bold tracking-tight" style={{ fontFamily: "'GT Walsheim', sans-serif" }}>
            OpenFramer
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {sections.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel className="px-4 text-sm font-medium opacity-40" style={{ fontFamily: "'GT Walsheim', sans-serif" }}>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => {
                  const isActive = currentItem === item
                  return (
                    <SidebarMenuItem key={item}>
                      <SidebarMenuButton 
                        asChild 
                        isActive={isActive}
                        className="px-4 py-2"
                      >
                        <a 
                          href={`/components/${item}`}
                          className={isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
                        >
                          <span className="text-sm">{item}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}


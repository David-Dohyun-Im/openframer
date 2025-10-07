"use client"

import { useState } from "react"
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
    items: ["hero1", "hero2", "hero3"],
  },
  {
    title: "Logo Cloud",
    icon: Building2,
    items: ["logo-cloud1", "logo-cloud2", "logo-cloud3"],
  },
  {
    title: "Features",
    icon: Layers,
    items: ["features1", "features2", "features3"],
  },
  {
    title: "Integrations",
    icon: Puzzle,
    items: ["integrations1", "integrations2", "integrations3"],
  },
  {
    title: "Content",
    icon: FileText,
    items: ["content1", "content2", "content3"],
  },
  {
    title: "Stats",
    icon: BarChart3,
    items: ["stats1", "stats2", "stats3"],
  },
  {
    title: "Team",
    icon: Users,
    items: ["team1", "team2", "team3"],
  },
  {
    title: "Testimonials",
    icon: MessageSquare,
    items: ["testimonials1", "testimonials2", "testimonials3"],
  },
  {
    title: "Call to Action",
    icon: Megaphone,
    items: ["cta1", "cta2", "cta3"],
  },
  {
    title: "Footer",
    icon: Layout,
    items: ["footer1", "footer2", "footer3"],
  },
  {
    title: "Pricing",
    icon: DollarSign,
    items: ["pricing1", "pricing2", "pricing3"],
  },
  {
    title: "Comparator",
    icon: Scale,
    items: ["comparator1", "comparator2", "comparator3"],
  },
  {
    title: "FAQs",
    icon: HelpCircle,
    items: ["faqs1", "faqs2", "faqs3"],
  },
  {
    title: "Login",
    icon: LogIn,
    items: ["login1", "login2", "login3"],
  },
  {
    title: "Sign Up",
    icon: UserPlus,
    items: ["signup1", "signup2", "signup3"],
  },
]

export function AppSidebar() {
  const [activeItem, setActiveItem] = useState<string>("hero1")

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-4">
          <h1 className="text-2xl font-bold tracking-tight" style={{ fontFamily: "'GT Walsheim', sans-serif" }}>
            OpenFramer
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {sections.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel className="px-4 text-sm font-medium opacity-40" style={{ fontFamily: "'GT Walsheim', sans-serif" }}>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={activeItem === item}
                      className="px-4 py-2"
                    >
                      <a 
                        href={`#${item}`}
                        onClick={() => setActiveItem(item)}
                        className={activeItem === item ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
                      >
                        <span className="text-sm">{item}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}


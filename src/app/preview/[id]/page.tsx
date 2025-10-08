import dynamic from 'next/dynamic';

// 컴포넌트 매핑
const componentMap: Record<string, any> = {
  'hero-01': dynamic(() => import('@/components/hero/hero-01')),
  'hero-02': dynamic(() => import('@/components/hero/hero-02')),
  'hero-03': dynamic(() => import('@/components/hero/hero-03')),
  'hero-04': dynamic(() => import('@/components/hero/hero-04')),
  'hero-dark': dynamic(() => import('@/components/hero/hero-dark')),
  'hero-vision': dynamic(() => import('@/components/hero/hero-vision')),
  'hero-mood': dynamic(() => import('@/components/hero/hero-mood')),
  'hero-mono': dynamic(() => import('@/components/hero/hero-mono')),
  'hero-simple': dynamic(() => import('@/components/hero/hero-simple')),
  'hero-text': dynamic(() => import('@/components/hero/hero-text')),
  'logocloud-01': dynamic(() => import('@/components/logocloud/logocloud-01')),
  'logocloud-02': dynamic(() => import('@/components/logocloud/logocloud-02')),
  'logocloud-03': dynamic(() => import('@/components/logocloud/logocloud-03')),
  'features-01': dynamic(() => import('@/components/features/features-01')),
  'features-02': dynamic(() => import('@/components/features/features-02')),
  'features-03': dynamic(() => import('@/components/features/features-03')),
  'integrations-01': dynamic(() => import('@/components/integrations/integrations-01')),
  'integrations-02': dynamic(() => import('@/components/integrations/integrations-02')),
  'integrations-03': dynamic(() => import('@/components/integrations/integrations-03')),
  'content-01': dynamic(() => import('@/components/content/content-01')),
  'content-02': dynamic(() => import('@/components/content/content-02')),
  'content-03': dynamic(() => import('@/components/content/content-03')),
  'stats-01': dynamic(() => import('@/components/stats/stats-01')),
  'stats-02': dynamic(() => import('@/components/stats/stats-02')),
  'stats-03': dynamic(() => import('@/components/stats/stats-03')),
  'team-01': dynamic(() => import('@/components/team/team-01')),
  'team-02': dynamic(() => import('@/components/team/team-02')),
  'team-03': dynamic(() => import('@/components/team/team-03')),
  'testimonials-01': dynamic(() => import('@/components/testimonials/testimonials-01')),
  'testimonials-02': dynamic(() => import('@/components/testimonials/testimonials-02')),
  'testimonials-03': dynamic(() => import('@/components/testimonials/testimonials-03')),
  'testimonials-04': dynamic(() => import('@/components/testimonials/testimonials-04')),
  'cta-01': dynamic(() => import('@/components/cta/cta-01')),
  'cta-02': dynamic(() => import('@/components/cta/cta-02')),
  'cta-03': dynamic(() => import('@/components/cta/cta-03')),
  'cta-04': dynamic(() => import('@/components/cta/cta-04')),
  'cta-05': dynamic(() => import('@/components/cta/cta-05')),
  'footer-01': dynamic(() => import('@/components/footer/footer-01')),
  'footer-02': dynamic(() => import('@/components/footer/footer-02')),
  'footer-03': dynamic(() => import('@/components/footer/footer-03')),
  'pricing-01': dynamic(() => import('@/components/pricing/pricing-01')),
  'pricing-02': dynamic(() => import('@/components/pricing/pricing-02')),
  'pricing-03': dynamic(() => import('@/components/pricing/pricing-03')),
  'pricing-04': dynamic(() => import('@/components/pricing/pricing-04')),
  'comparator-01': dynamic(() => import('@/components/comparator/comparator-01')),
  'comparator-02': dynamic(() => import('@/components/comparator/comparator-02')),
  'comparator-03': dynamic(() => import('@/components/comparator/comparator-03')),
  'faqs-01': dynamic(() => import('@/components/faqs/faqs-01')),
  'faqs-02': dynamic(() => import('@/components/faqs/faqs-02')),
  'faqs-03': dynamic(() => import('@/components/faqs/faqs-03')),
  'faqs-04': dynamic(() => import('@/components/faqs/faqs-04')),
  'login-01': dynamic(() => import('@/components/login/login-01')),
  'login-02': dynamic(() => import('@/components/login/login-02')),
  'login-03': dynamic(() => import('@/components/login/login-03')),
  'signup-01': dynamic(() => import('@/components/signup/signup-01')),
  'signup-02': dynamic(() => import('@/components/signup/signup-02')),
  'signup-03': dynamic(() => import('@/components/signup/signup-03')),
};

export default async function PreviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // 해당 id의 컴포넌트 가져오기
  const PreviewComponent = componentMap[id];

  if (!PreviewComponent) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Component Not Found
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            The component "{id}" is not available.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full">
      <div className="min-h-[600px]">
        <PreviewComponent />
      </div>
    </div>
  );
}


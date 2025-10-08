import dynamic from 'next/dynamic';
import { promises as fs } from 'fs';
import path from 'path';

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

export default async function ComponentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // 해당 id의 컴포넌트 가져오기
  const PreviewComponent = componentMap[id];
  
  // Meta data 가져오기
  let metadata = null;
  try {
    const metaFilePath = path.join(process.cwd(), 'src', 'components', id.split('-')[0], `${id}-meta.json`);
    const metaFileContent = await fs.readFile(metaFilePath, 'utf-8');
    metadata = JSON.parse(metaFileContent);
  } catch (error) {
    console.error('Meta file not found:', error);
  }

  // Props data 가져오기
  let propsData = null;
  try {
    const propsFilePath = path.join(process.cwd(), 'src', 'components', id.split('-')[0], `${id}-props.json`);
    const propsFileContent = await fs.readFile(propsFilePath, 'utf-8');
    propsData = JSON.parse(propsFileContent);
  } catch (error) {
    console.error('Props file not found:', error);
  }

  return (
    <div className="mx-auto flex w-full max-w-6xl min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-foreground md:px-8 lg:py-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <nav aria-label="Breadcrumb" className="text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1 text-sm">
              <li className="flex items-center gap-1">
                <a className="hover:text-foreground transition-colors" href="/">
                  Docs
                </a>
                <span aria-hidden="true">/</span>
              </li>
              <li className="flex items-center gap-1">
                <a className="hover:text-foreground transition-colors" href="/components">
                  Components
                </a>
                <span aria-hidden="true">/</span>
              </li>
              <li className="flex items-center gap-1">
                <span aria-current="page" className="text-foreground font-medium">
                  {id}
                </span>
              </li>
            </ol>
          </nav>
          <div className="flex items-start justify-between">
            <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl capitalize">
              {id}
            </h1>
          </div>
          <p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
            An example component for {id}.
          </p>
        </div>
      </div>
      
      <div className="w-full flex-1">
        <div className="relative mt-4 mb-12 flex flex-col gap-2">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium">Preview</div>
            <a
              href={`/preview/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md px-2 py-2 hover:opacity-80 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
                <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
                <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
                <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
              </svg>
            </a>
          </div>
          <div className="relative rounded-lg border overflow-hidden">
            {PreviewComponent ? (
              <div className="w-full min-h-[600px]">
                <PreviewComponent />
              </div>
            ) : (
              <div className="flex min-h-[450px] w-full justify-center items-center p-10">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Component Not Found</h2>
                  <p className="text-muted-foreground">
                    The component "{id}" is not available yet.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <h2 className="font-heading mt-8 scroll-m-28 text-xl font-medium tracking-tight first:mt-0 lg:mt-8">
          Installation
        </h2>
        
        <div className="relative mt-4">
          <pre className="rounded-lg bg-[#111111] p-4 overflow-x-auto">
            <code className="text-sm font-mono text-gray-300">
              <span className="text-pink-400">npm</span>
              <span className="text-gray-300"> install </span>
              <span className="text-blue-400">@openframer/{id}</span>
            </code>
          </pre>
        </div>

        <h2 className="font-heading mt-8 scroll-m-28 text-xl font-medium tracking-tight">
          Usage
        </h2>
        
        <div className="relative mt-4">
          <pre className="rounded-lg bg-[#111111] p-4 overflow-x-auto">
            <code className="text-sm font-mono">
              <span className="text-pink-400">import</span>
              <span className="text-gray-300"> {'{ '}</span>
              <span className="text-yellow-400">{id.charAt(0).toUpperCase() + id.slice(1)}</span>
              <span className="text-gray-300">{' }'} </span>
              <span className="text-pink-400">from</span>
              <span className="text-green-400"> "@/components/{id}"</span>
            </code>
          </pre>
        </div>

        <h2 className="font-heading mt-8 scroll-m-28 text-xl font-medium tracking-tight">
          Props
        </h2>
        
        {propsData ? (
          <div className="my-6 w-full overflow-y-auto">
            <table className="relative w-full overflow-hidden border-none text-sm">
              <thead>
                <tr className="last:border-b-none m-0 border-b">
                  <th className="px-4 py-2 text-left font-bold">Prop</th>
                  <th className="px-4 py-2 text-left font-bold">Type</th>
                  <th className="px-4 py-2 text-left font-bold">Required</th>
                  <th className="px-4 py-2 text-left font-bold">Default</th>
                  <th className="px-4 py-2 text-left font-bold">Description</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(propsData).map(([propName, propInfo]: [string, any]) => (
                  <tr key={propName} className="last:border-b-none m-0 border-b">
                    <td className="px-4 py-2 text-left">
                      <code className="bg-muted relative rounded-md px-2 py-1 font-mono text-xs">
                        {propName}
                      </code>
                    </td>
                    <td className="px-4 py-2 text-left">
                      <code className="bg-muted relative rounded-md px-2 py-1 font-mono text-xs">
                        {propInfo.type}
                      </code>
                    </td>
                    <td className="px-4 py-2 text-left">
                      <code className="bg-muted relative rounded-md px-2 py-1 font-mono text-xs">
                        {propInfo.required ? 'Yes' : 'No'}
                      </code>
                    </td>
                    <td className="px-4 py-2 text-left">
                      <code className="bg-muted relative rounded-md px-2 py-1 font-mono text-xs">
                        {propInfo.default ? String(propInfo.default) : '-'}
                      </code>
                    </td>
                    <td className="px-4 py-2 text-left">
                      {propInfo.description || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="relative mt-4 rounded-lg border p-8">
            <div className="text-center text-muted-foreground">
              Props data not available
            </div>
          </div>
        )}

        <h2 className="font-heading mt-8 scroll-m-28 text-xl font-medium tracking-tight">
          Meta Data
        </h2>
        
        <div className="relative mt-4">
          <pre className="rounded-lg bg-[#111111] p-4 max-h-[500px] overflow-y-auto overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
            <code className="text-sm font-mono text-gray-300">
              {metadata ? JSON.stringify(metadata, null, 2) : 'Meta data not available'}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}


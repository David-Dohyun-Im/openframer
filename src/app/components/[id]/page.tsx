import dynamic from 'next/dynamic';

// 컴포넌트 매핑
const componentMap: Record<string, any> = {
  'hero-01': dynamic(() => import('@/components/hero/hero-01')),
  'hero-02': dynamic(() => import('@/components/hero/hero-02')),
  'hero-03': dynamic(() => import('@/components/hero/hero-03')),
  'logocloud-01': dynamic(() => import('@/components/logocloud/logocloud-01')),
  'logocloud-02': dynamic(() => import('@/components/logocloud/logocloud-02')),
  'logocloud-03': dynamic(() => import('@/components/logocloud/logocloud-03')),
  'cta-01': dynamic(() => import('@/components/cta/cta-01')),
  'cta-02': dynamic(() => import('@/components/cta/cta-02')),
  'cta-03': dynamic(() => import('@/components/cta/cta-03')),
};

export default async function ComponentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // 해당 id의 컴포넌트 가져오기
  const PreviewComponent = componentMap[id];

  return (
    <div className="mx-auto flex w-full max-w-3xl min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-foreground md:px-0 lg:py-8">
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
          <div className="text-sm font-medium mb-2">Preview</div>
          <div className="relative rounded-lg border overflow-hidden">
            {PreviewComponent ? (
              <div className="w-full">
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
          <pre className="rounded-lg border border-white/10 bg-[#0d1117] p-4 overflow-x-auto">
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
          <pre className="rounded-lg border border-white/10 bg-[#0d1117] p-4 overflow-x-auto">
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
          Examples
        </h2>
        
        <div className="relative mt-4 rounded-lg border p-8">
          <div className="text-center text-muted-foreground">
            Example section for {id}
          </div>
        </div>

        <h2 className="font-heading mt-8 scroll-m-28 text-xl font-medium tracking-tight">
          Props
        </h2>
        
        <div className="my-6 w-full overflow-y-auto">
          <table className="relative w-full overflow-hidden border-none text-sm">
            <thead>
              <tr className="last:border-b-none m-0 border-b">
                <th className="px-4 py-2 text-left font-bold">Prop</th>
                <th className="px-4 py-2 text-left font-bold">Type</th>
                <th className="px-4 py-2 text-left font-bold">Default</th>
                <th className="px-4 py-2 text-left font-bold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="last:border-b-none m-0 border-b">
                <td className="px-4 py-2 text-left">
                  <code className="bg-muted relative rounded-md px-2 py-1 font-mono text-xs">
                    children
                  </code>
                </td>
                <td className="px-4 py-2 text-left">
                  <code className="bg-muted relative rounded-md px-2 py-1 font-mono text-xs">
                    React.ReactNode
                  </code>
                </td>
                <td className="px-4 py-2 text-left">
                  <code className="bg-muted relative rounded-md px-2 py-1 font-mono text-xs">
                    -
                  </code>
                </td>
                <td className="px-4 py-2 text-left">
                  The content to be displayed.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


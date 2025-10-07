export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-3xl min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-foreground md:px-0 lg:py-8">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to OpenFramer</h1>
        <p className="text-lg text-muted-foreground">
          Browse through the components using the sidebar navigation.
        </p>
        <div className="grid gap-4 mt-8">
          <div className="rounded-lg border p-6">
            <h2 className="text-2xl font-semibold mb-2">Getting Started</h2>
            <p className="text-muted-foreground">
              Select a component from the sidebar to view its documentation, examples, and usage.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h2 className="text-2xl font-semibold mb-2">Component Library</h2>
            <p className="text-muted-foreground">
              OpenFramer provides a comprehensive collection of UI components for your projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import QueryProvider from "./lib/ReactQueryProvider";
import AntdProvider from "./lib/AntdProvider";
import { ChildrenType } from "./types/App";

function ProviderContainer({ children }: ChildrenType) {
  return (
    <QueryProvider>
      <AntdProvider>
        {children}
      </AntdProvider>
    </QueryProvider>
  );
}

export default ProviderContainer;

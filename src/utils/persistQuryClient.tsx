import { QueryClient } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create QueryClient
const queryClientPersisted = new QueryClient();

// Create storage persister
const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
});

// Enable persistence
persistQueryClient({
  queryClient: queryClientPersisted,
  persister: asyncStoragePersister,
});

export default queryClientPersisted;

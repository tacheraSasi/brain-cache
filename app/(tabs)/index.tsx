import { SignOutButton } from '@/components/signout';
import { api } from '@/convex/_generated/api';
import { Authenticated, Unauthenticated, useConvexAuth, useQuery } from 'convex/react';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Page() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Authenticated>
          <Text>Welcome! You are signed in.</Text>
          <SignOutButton />
          <Content />
        </Authenticated>
        <Unauthenticated>
          <Link href="/(auth)/sign-in">
            <Text>Sign in</Text>
          </Link>
          <Link href="/(auth)/sign-up">
            <Text>Sign up</Text>
          </Link>
        </Unauthenticated>
      </View>
    </SafeAreaView>
  );
}


function Content() {
  // const messages = useQuery(api.messages.getForCurrentUser);
  return <Text>Authenticated content: messages?.length</Text>;
}
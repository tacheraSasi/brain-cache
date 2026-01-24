import { SignOutButton } from '@/components/signout'
import { api } from '@/convex/_generated/api'
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { useQuery } from 'convex/react'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Page() {
  const { user } = useUser()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <SignedIn>
          <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
          <SignOutButton />
        </SignedIn>
        <SignedOut>
          <Link href="/(auth)/sign-in">
            <Text>Sign in</Text>
          </Link>
          <Link href="/(auth)/sign-up">
            <Text>Sign up</Text>
          </Link>
        </SignedOut>
      </View>
    </SafeAreaView>
  )
}


function Content() {
  const messages = useQuery(api.messages.getForCurrentUser);
  return <Text>Authenticated content: {messages?.length}</Text>;
}
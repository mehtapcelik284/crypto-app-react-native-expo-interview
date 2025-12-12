import BrowseTokenItem from "@/components/browse/BrowseTokenItem";
import LoadingIndicator from "@/components/common/LoadingIndicator";
import { Colors, Fonts } from "@/constants/theme";
import { useMarketTokens } from "@/hooks/useMarketTokens";
import { MarketToken } from "@/services/api/markets";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "@/utils/responsive";
import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BrowseScreen = () => {
  const router = useRouter();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isRefetching,
    isLoading,
    error,
  } = useMarketTokens();

  const tokens = useMemo(
    () => data?.pages.flatMap((page) => page) ?? [],
    [data]
  );
  const errorMessage = error instanceof Error ? error.message : undefined;
  const hasError = Boolean(errorMessage);

  const handleEndReached = () => {
    if (hasError) return;
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const handleTokenPress = (token: MarketToken) => {
    router.push({
      pathname: "/(tabs)/browse/[id]",
      params: {
        id: token.id,
        name: token.name,
        symbol: token.symbol.toUpperCase(),
        price: String(token.current_price ?? 0),
        marketCap: String(token.market_cap ?? 0),
        image: token.image,
        priceChangePct: String(token.price_change_percentage_24h ?? 0),
        priceChangeValue: String(token.price_change_24h ?? 0),
      },
    });
  };

  const refreshing = isRefetching && !isFetchingNextPage;

  if (isLoading && tokens.length === 0) {
    return <LoadingIndicator />;
  }

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <FlatList
        data={tokens}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <BrowseTokenItem
            token={item}
            onPress={handleTokenPress}
            isFirst={index === 0}
          />
        )}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.3}
        ListFooterComponent={
          <View style={styles.footer}>
            {isFetchingNextPage && !hasError && <LoadingIndicator inline />}
            {errorMessage && (
              <Text style={styles.errorText}>{errorMessage}</Text>
            )}
          </View>
        }
        refreshControl={
          <RefreshControl
            tintColor={Colors.loader}
            titleColor={Colors.loader}
            colors={[Colors.loader]}
            progressBackgroundColor={Colors.background}
            style={styles.refreshControl}
            refreshing={refreshing}
            onRefresh={refetch}
          />
        }
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: responsiveWidth(16),
    paddingTop: responsiveHeight(16),
  },
  footer: {
    paddingVertical: responsiveHeight(16),
    alignItems: "center",
    gap: responsiveHeight(8),
  },
  errorText: {
    fontFamily: Fonts.satoshiRegular,
    fontSize: responsiveFontSize(12),
    color: Colors.text,
    textAlign: "center",
    paddingHorizontal: responsiveWidth(16),
  },
  listContent: {
    paddingBottom: responsiveHeight(24),
  },
  refreshControl: {
    backgroundColor: Colors.background,
  },
});

export default BrowseScreen;

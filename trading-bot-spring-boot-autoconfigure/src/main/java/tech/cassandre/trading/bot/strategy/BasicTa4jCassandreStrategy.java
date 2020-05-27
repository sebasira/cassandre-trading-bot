package tech.cassandre.trading.bot.strategy;

import com.google.common.base.MoreObjects;
import org.ta4j.core.BarSeries;
import org.ta4j.core.BaseBarSeriesBuilder;
import org.ta4j.core.Strategy;
import org.ta4j.core.num.DoubleNum;
import tech.cassandre.trading.bot.dto.market.TickerDTO;
import tech.cassandre.trading.bot.dto.trade.OrderDTO;
import tech.cassandre.trading.bot.dto.user.AccountDTO;
import tech.cassandre.trading.bot.util.dto.CurrencyPairDTO;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;

/**
 * Basic ta4j strategy.
 */
@SuppressWarnings("unused")
public abstract class BasicTa4jCassandreStrategy extends BasicCassandreStrategy {

    /** Series. */
    private final BarSeries series;

    /** Strategy. */
    private final Strategy strategy;

    /** The accounts owned by the user. */
    private final Map<String, AccountDTO> accounts = new LinkedHashMap<>();

    /** The orders owned by the user. */
    private final Map<String, OrderDTO> orders = new LinkedHashMap<>();

    /**
     * Constructor.
     */
    public BasicTa4jCassandreStrategy() {
        // Build the series.
        series = new BaseBarSeriesBuilder()
                .withNumTypeOf(DoubleNum.class)
                .withName(getRequestedCurrencyPair().toString())
                .build();
        series.setMaximumBarCount(getMaximumBarCount());

        // Build the strategy.
        strategy = getStrategy();
    }

    /**
     * Implements this method to tell the bot which currency pair your strategy will receive.
     *
     * @return the list of currency pairs tickers your want to receive
     */
    public abstract CurrencyPairDTO getRequestedCurrencyPair();

    /**
     * Implements this method to tell the bot how many bars you want to keep in your bar series.
     *
     * @return maximum bar count.
     */
    public abstract int getMaximumBarCount();

    /**
     * Implements this method to tell the bot which strategy to apply.
     *
     * @return strategy
     */
    public abstract Strategy getStrategy();

    /**
     * Getter of accounts.
     *
     * @return accounts
     */
    public final Map<String, AccountDTO> getAccounts() {
        return accounts;
    }

    /**
     * Getter of orders.
     *
     * @return orders
     */
    public final Map<String, OrderDTO> getOrders() {
        return orders;
    }

    @Override
    public final Set<CurrencyPairDTO> getRequestedCurrencyPairs() {
        // We only support one currency pair with this strategy.
        return Set.of(getRequestedCurrencyPair());
    }

    @Override
    public final void onAccountUpdate(final AccountDTO account) {
        accounts.put(account.getId(), account);
    }

    @Override
    public final void onTickerUpdate(final TickerDTO ticker) {
        // Add the ticker to the series.
        Number openPrice = MoreObjects.firstNonNull(ticker.getOpen(), 0);
        Number highPrice = MoreObjects.firstNonNull(ticker.getHigh(), 0);
        Number lowPrice = MoreObjects.firstNonNull(ticker.getLow(), 0);
        Number closePrice = MoreObjects.firstNonNull(ticker.getLast(), 0);
        Number volume = MoreObjects.firstNonNull(ticker.getVolume(), 0);
        series.addBar(ticker.getTimestamp(), openPrice, highPrice, lowPrice, closePrice, volume);

        // Ask what to do to the strategy.
        int endIndex = series.getEndIndex();
        if (strategy.shouldEnter(endIndex)) {
            // Our strategy should enter.
            shouldEnter();
        } else if (strategy.shouldExit(endIndex)) {
            // Our strategy should exit.
            shouldExit();
        }
    }

    @Override
    public final void onOrderUpdate(final OrderDTO order) {
        orders.put(order.getId(), order);
    }

    /**
     * Called when your strategy says you should enter.
     */
    public abstract void shouldEnter();

    /**
     * Called when your strategy says your should exit.
     */
    public abstract void shouldExit();

    /**
     * Getter series.
     *
     * @return series
     */
    public final BarSeries getSeries() {
        return series;
    }

}

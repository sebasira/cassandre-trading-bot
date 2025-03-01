#set($symbol_pound='#')
#set($symbol_dollar='$')
#set($symbol_escape='\' )
package ${package};

import org.ta4j.core.BaseStrategy;
import org.ta4j.core.Strategy;
import org.ta4j.core.indicators.SMAIndicator;
import org.ta4j.core.indicators.helpers.ClosePriceIndicator;
import org.ta4j.core.rules.OverIndicatorRule;
import org.ta4j.core.rules.UnderIndicatorRule;
import tech.cassandre.trading.bot.dto.market.TickerDTO;
import tech.cassandre.trading.bot.dto.position.PositionDTO;
import tech.cassandre.trading.bot.dto.position.PositionRulesDTO;
import tech.cassandre.trading.bot.dto.user.AccountDTO;
import tech.cassandre.trading.bot.strategy.BasicTa4jCassandreStrategy;
import tech.cassandre.trading.bot.strategy.CassandreStrategy;
import tech.cassandre.trading.bot.dto.util.CurrencyPairDTO;

import java.math.BigDecimal;
import java.time.Duration;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import static tech.cassandre.trading.bot.dto.util.CurrencyDTO.BTC;
import static tech.cassandre.trading.bot.dto.util.CurrencyDTO.USDT;

/**
 * Simple Ta4j strategy.
 * Please, create your own Kucoin sandbox account and do not make orders with this account.
 * How to do it : https://trading-bot.cassandre.tech/ressources/how-tos/how-to-create-a-kucoin-account.html
 */
@CassandreStrategy(strategyName = "Simple ta4j strategy")
public final class SimpleTa4jStrategy extends BasicTa4jCassandreStrategy {

    @Override
    public CurrencyPairDTO getRequestedCurrencyPair() {
        // We only ask BTC/USDT tickers (Base currency : BTC / Quote currency : USDT).
        return new CurrencyPairDTO(BTC, USDT);
    }

    @Override
    public Optional<AccountDTO> getTradeAccount(Set<AccountDTO> accounts) {
        // From all the accounts we have on the exchange, we must return the one we use for trading.
        if (accounts.size() == 1) {
            // If there is only one on the exchange, we choose this one.
            return accounts.stream().findFirst();
        } else {
            // If there are several accounts on the exchange, we choose the one with the name "trade".
            return accounts.stream()
                    .filter(a -> "trade".equalsIgnoreCase(a.getName()))
                    .findFirst();
        }
    }

    @Override
    public int getMaximumBarCount() {
        // Number of bars to keep.
        return 10;
    }

    @Override
    public Duration getDelayBetweenTwoBars() {
        // Delay between two bars.
        return Duration.ofDays(1);
    }

    @Override
    public Strategy getStrategy() {
        // Creates strategy.
        ClosePriceIndicator closePrice = new ClosePriceIndicator(getSeries());
        SMAIndicator sma = new SMAIndicator(closePrice, getMaximumBarCount());
        return new BaseStrategy(new OverIndicatorRule(sma, closePrice), new UnderIndicatorRule(sma, closePrice));
    }

    @Override
    public final void onTickersUpdates(final Map<CurrencyPairDTO, TickerDTO> tickers) {
        // Here we will receive all tickers we required from the exchange.
        tickers.values().forEach(ticker -> System.out.println("Received information about a ticker : " + ticker));
    }

    @Override
    public void onPositionsStatusUpdates(final Map<Long, PositionDTO> positions) {
        // Here, we will receive a PositionDTO each time a position status has changed.
        positions.values().forEach(position -> System.out.println("Received information about a position status : " + position));
    }

    @Override
    public void shouldEnter() {
        // Called when the strategy says we should enter.
        if (canBuy(new BigDecimal("0.01"))) {
            // Create rules.
            PositionRulesDTO rules = PositionRulesDTO
                    .builder()
                    .stopGainPercentage(10f)
                    .stopLossPercentage(5f)
                    .build();
            // Create position.
            createLongPosition(
                    new CurrencyPairDTO(BTC, USDT),
                    new BigDecimal("0.01"),
                    rules);
        }
    }

    @Override
    public void shouldExit() {
        // Called when the strategy says we should exit.
    }

}

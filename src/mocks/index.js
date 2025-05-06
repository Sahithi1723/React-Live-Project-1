
export const getMockData = () => {
  if (process.env.NODE_ENV !== "development") return null;
 
  const Series = require("time-series-data-generator");
  const from = "2020-01-01T16:30:41Z";
  const until = "2020-05-01T18:30:00Z";
  const interval = 43200;
  const keyName = "amount";
 
  const salesSeries = new Series({ from, until, interval, keyName });
  const subscriptionsSeries = new Series({ from, until, interval, keyName });
 
  return {
    sales: salesSeries.gaussian({ mean: 360, variance: 10, decimalDigits: 0 }),
    subscriptions: subscriptionsSeries.gaussian({ mean: 9, variance: 5, decimalDigits: 0 })
  };
};
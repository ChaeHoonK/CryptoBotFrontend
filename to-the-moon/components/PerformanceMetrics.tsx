// PerformanceMetrics.tsx
import React from "react";
import styles from "./PerformanceMetrics.module.css";

interface PerformanceMetricsProps {
  trade_yield: number;
  num_buy: number;
  num_sell: number;
  profit: number;
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({
  trade_yield,
  num_buy,
  num_sell,
  profit,
}) => {
  return (
    <div className={styles.performanceMetrics}>
      <h2>Performance Metrics</h2>
      <div className={styles.metrics}>
        <div className={styles.metric}>
          <h4>Total Return: {trade_yield.toFixed(2)}%</h4>
        </div>
        <div className={styles.metric}>
          <h4> Num Buy: {num_buy} times</h4>
        </div>
        <div className={styles.metric}>
          <h4> Num Sell: {num_sell} times</h4>
        </div>
        <div className={styles.metric}>
          <h4> Profit : ₩{profit.toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;

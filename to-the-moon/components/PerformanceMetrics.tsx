// PerformanceMetrics.tsx
import React from "react";
import styles from "./PerformanceMetrics.module.css";

interface PerformanceMetricsProps {
  totalReturn: number;
  sharpeRatio: number;
  maxDrawdown: number;
  winRate: number;
  numTrades: number;
}

const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({
  totalReturn,
  sharpeRatio,
  maxDrawdown,
  winRate,
  numTrades,
}) => {
  return (
    <div className={styles.performanceMetrics}>
      <h2>Performance Metrics</h2>
      <div className={styles.metrics}>
        <div className={styles.metric}>
          <h4>Total Return: {totalReturn.toFixed(2)}%</h4>
        </div>
        <div className={styles.metric}>
          <h4>Sharpe Ratio: {sharpeRatio.toFixed(2)}</h4>
        </div>
        <div className={styles.metric}>
          <h4>Max Drawdown: {maxDrawdown.toFixed(2)}%</h4>
        </div>
        <div className={styles.metric}>
          <h4>Win Rate: {winRate.toFixed(2)}%</h4>
        </div>
        <div className={styles.metric}>
          <h4>Number of Trades: {numTrades}</h4>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;

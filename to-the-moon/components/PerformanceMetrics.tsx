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
      <h3>Performance Metrics</h3>
      <div className={styles.metrics}>
        <div className={styles.metric}>
          <strong>Total Return: </strong> {totalReturn.toFixed(2)}%
        </div>
        <div className={styles.metric}>
          <strong>Sharpe Ratio: </strong> {sharpeRatio.toFixed(2)}
        </div>
        <div className={styles.metric}>
          <strong>Max Drawdown: </strong> {maxDrawdown.toFixed(2)}%
        </div>
        <div className={styles.metric}>
          <strong>Win Rate: </strong> {winRate.toFixed(2)}%
        </div>
        <div className={styles.metric}>
          <strong>Number of Trades: </strong> {numTrades}
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;

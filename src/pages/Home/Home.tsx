import { Grid, Paper, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import DashboardCard from "components/DashboardCard";
import { useAlert } from "hooks/useAlert";
import React, { useEffect, useState } from "react";
import {
  fetchFreeDiskSpace,
  fetchHttpServerRequest,
  fetchTotalDataCount,
  fetchTotalDiskSpace,
} from "services/AdminService";
import { TMetrics } from "types/DataTypes";

export const dataset = [
  { x: 1, y: 2 },
  { x: 2, y: 5.5 },
  { x: 3, y: 2 },
  { x: 5, y: 8.5 },
  { x: 8, y: 1.5 },
  { x: 10, y: 5 },
];

export const Home = () => {
  const [metrics, setMetrics] = useState<TMetrics>();
  const { showAlert } = useAlert();
  var currentdate = new Date();

  // Fetch Inital Data
  useEffect(() => {
    fetchAllMetricsAsync();
    currentdate = new Date();
  }, []);

  const fetchAllMetricsAsync = async () => {
    try {
      const httpReq = await fetchHttpServerRequest();
      const freeDisk = await fetchFreeDiskSpace();
      const totalDisk = await fetchTotalDiskSpace();
      const totalDataCount = await fetchTotalDataCount();
      const metricsData: TMetrics = {
        httpRequestCount: "0",
        freeDiskSpace: "",
        totalDiskSpace: "",
        userCount: "0",
        clientCount: "0",
      };

      let freeDiskSpace =
        freeDisk.find((measure) => (measure.statistic = "value"))?.value || 0;
      freeDiskSpace = freeDiskSpace / 1073741824;
      let totalDiskSpace =
        totalDisk.find((measure) => (measure.statistic = "value"))?.value || 0;
      totalDiskSpace = totalDiskSpace / 1073741824;

      metricsData.clientCount = totalDataCount.clientCount.toString();
      metricsData.userCount = totalDataCount.userCount.toString();
      metricsData.httpRequestCount =
        httpReq
          .find((measure) => (measure.statistic = "count"))
          ?.value.toString() || "0";
      metricsData.freeDiskSpace = freeDiskSpace.toFixed(1) + " GB";
      metricsData.totalDiskSpace = "/" + totalDiskSpace.toFixed(1) + " GB";

      setMetrics(metricsData);
    } catch (error: any) {
      showAlert(error.message, error.severity, error.title);
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper elevation={3} sx={{ height: "200px" }}>
            <DashboardCard
              title="Total User Count"
              value={metrics?.userCount || "0"}
              footer="Total active users"
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} sx={{ height: "200px" }}>
            <DashboardCard
              title="Total Client Count"
              value={metrics?.clientCount || "0"}
              footer="Total active clients"
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} sx={{ height: "200px" }}>
            <DashboardCard
              title="Total HTTP Requests"
              value={metrics?.httpRequestCount || "0"}
              footer="Since server start"
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={3} sx={{ height: "200px" }}>
            <DashboardCard
              title="Available Disk Space"
              value={metrics?.freeDiskSpace || "0 GB"}
              subvalue={metrics?.totalDiskSpace || "0 GB"}
              footer={"as of " + currentdate.toLocaleString()}
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ height: "480px" }}>
            <LineChart
              dataset={dataset}
              xAxis={[{ dataKey: "x" }]}
              series={[{ dataKey: "y" }]}
              margin={{ left: 30, right: 30, top: 30, bottom: 40 }}
              grid={{ vertical: true, horizontal: true }}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

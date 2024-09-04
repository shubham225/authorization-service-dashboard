export const httpRequests = {
  name: "http.server.requests",
  baseUnit: "seconds",
  measurements: [
    {
      statistic: "COUNT",
      value: 2,
    },
    {
      statistic: "TOTAL_TIME",
      value: 0.07906599,
    },
    {
      statistic: "MAX",
      value: 0.070355442,
    },
  ],
  availableTags: [
    {
      tag: "exception",
      values: ["none"],
    },
    {
      tag: "method",
      values: ["OPTIONS"],
    },
    {
      tag: "error",
      values: ["none"],
    },
    {
      tag: "uri",
      values: ["/actuator/metrics/{requiredMetricName}"],
    },
    {
      tag: "outcome",
      values: ["CLIENT_ERROR"],
    },
    {
      tag: "status",
      values: ["403"],
    },
  ],
};

export const diskFree = {
  name: "disk.free",
  description: "Usable space for path",
  baseUnit: "bytes",
  measurements: [
    {
      statistic: "VALUE",
      value: 60808249344,
    },
  ],
  availableTags: [
    {
      tag: "path",
      values: ["/home/shubham/Temporary/oauth2.0-server/."],
    },
  ],
};

export const diskTotal = {
  name: "disk.total",
  description: "Total space for path",
  baseUnit: "bytes",
  measurements: [
    {
      statistic: "VALUE",
      value: 115658190848,
    },
  ],
  availableTags: [
    {
      tag: "path",
      values: ["/home/shubham/Temporary/oauth2.0-server/."],
    },
  ],
};

export const dataMetrics = {
  code: 300,
  message: "",
  payload: {
    userCount: 20,
    clientCount: 21,
  },
};

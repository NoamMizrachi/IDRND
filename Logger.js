const {
  createLogger,
  transports,
  format,
  config,
  addColors
} = require("winston");
const LogzioWinstonTransport = require("winston-logzio");

const logzioWinstonTransport = new LogzioWinstonTransport({
  level: "info",
  name: "winston_logzio",
  token: "",
  host: ""
});

const myCustomLevels = {
  levels: {
    error: 0,
    debug: 1,
    info: 2
  },
  colors: {
    error: "bold red",
    debug: "bold blue",
    info: "bold green"
  }
};

addColors(myCustomLevels.colors);

const logger = createLogger({
  defaultMeta: { service: "Customer Management" },
  levels: myCustomLevels.levels,
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.simple()
  ),
  transports: [
    // For Transporting logs to the console.
    new transports.Console({}),
    logzioWinstonTransport
  ]
});

//example of child
// const childLogger = logger.child({ requestId: '451' });

module.exports = logger;

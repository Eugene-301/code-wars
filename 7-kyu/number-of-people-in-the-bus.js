var number = function (busStops) {
  return busStops.reduce((pv, cv) => pv + cv[0] - cv[1], 0);
};

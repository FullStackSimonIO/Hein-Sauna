import * as migration_20250302_090908 from './20250302_090908';
import * as migration_20250302_100342 from './20250302_100342';
import * as migration_20250303_105412 from './20250303_105412';

export const migrations = [
  {
    up: migration_20250302_090908.up,
    down: migration_20250302_090908.down,
    name: '20250302_090908',
  },
  {
    up: migration_20250302_100342.up,
    down: migration_20250302_100342.down,
    name: '20250302_100342',
  },
  {
    up: migration_20250303_105412.up,
    down: migration_20250303_105412.down,
    name: '20250303_105412'
  },
];

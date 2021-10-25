const isCI = process.env.CI;
const coverageReporters = isCI ? ['text', 'cobertura'] : ['text'];
const jestJunitConfig = {
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'Jest tests',
        outputDirectory: 'build/test-reports',
        outputName: 'junit.xml',
        usePathForSuiteName: 'true',
      },
    ],
  ],
};
const jestCoverageConfig = {
  collectCoverage: !!isCI,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '**/src/**/*.js',
  ],
  coverageReporters,
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "js", "json", "node"],
  /**
   * Matches:
   * 1. files in nested subdirectories of a `test`, `tests`, `spec`, `specs`, or `src` folder, and
   * 2. file names that contain `test`, `Test`, `spec`, or `Spec`, and
   * 3. file names that end in `.ts` or `.js`.
   */
  testRegex: "/((test|spec)s?|src)/.*([Tt]est|[Ss]pec)\\.(ts|js)$",
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.{ts,js}", "!src/**/*.d.ts"],
  preset: 'ts-jest',
};

module.exports = {
  // Automatically clear mock calls and instances before every test. Equivalent to calling
  // jest.clearAllMocks() before each test. This does not remove any mock implementation that may
  // have been provided.
  clearMocks: true,
  // Merge in our standard test configs.
  ...jestJunitConfig,
  ...jestCoverageConfig,
  // Override our standard collectCoverageFrom parameter since modules just have a /src folder.
  collectCoverageFrom: ['src/**/*.[tj]s'],
};

const fs = require("fs");
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper,
} = require("../lib/zookeepers");
const {zookeepers} = require("../data/zookeepers.json");
const { TestWatcher } = require("@jest/core");

jest.mock("fs");
new TestWatcher("creates a zookeeper object")